import { mockProjects } from '@/data/mock-projects';
import { mockUser } from '@/data/mock-user';
import { Project, Reward, Transaction, User, UserRole } from '@/data/types';

/** In-memory state that persists for the app session */
let projects = [...mockProjects.map((p) => ({ ...p, rewards: [...p.rewards], videos: [...p.videos] }))];
let user: User | null = null;
let isLoggedIn = false;

const delay = (ms = 300) => new Promise<void>((r) => setTimeout(r, ms));

// ─── Projects ────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  await delay();
  return projects;
}

export async function getProject(id: string): Promise<Project | undefined> {
  await delay(150);
  return projects.find((p) => p.id === id);
}

export async function searchProjects(query: string): Promise<Project[]> {
  await delay(200);
  const q = query.toLowerCase();
  return projects.filter(
    (p) => p.title.toLowerCase().includes(q) || p.creatorName.toLowerCase().includes(q),
  );
}

export async function createCampaign(data: {
  title: string;
  description: string;
  goalCredits: number;
}): Promise<Project> {
  await delay(400);
  const newProject: Project = {
    id: String(Date.now()),
    title: data.title,
    creatorName: 'You',
    description: data.description,
    goalCredits: data.goalCredits,
    raisedCredits: 0,
    backerCount: 0,
    videos: [],
    rewards: [],
    isOwned: true,
  };
  projects = [newProject, ...projects];
  return newProject;
}

export async function uploadContent(
  projectId: string,
  videoTitle: string,
): Promise<void> {
  await delay(800);
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;
  const colors = ['#2d00f7', '#1a1a2e', '#1b4332', '#b7410e', '#003049', '#5c3d2e'];
  project.videos.push({
    id: `v${Date.now()}`,
    title: videoTitle,
    placeholderColor: colors[Math.floor(Math.random() * colors.length)],
  });
}

export async function addReward(
  projectId: string,
  reward: Omit<Reward, 'id'>,
): Promise<void> {
  await delay(300);
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;
  project.rewards.push({ ...reward, id: `r${Date.now()}` });
}

// ─── Credits & Donations ────────────────────────────────────────

export async function getUser(): Promise<User | null> {
  await delay(100);
  if (!user) return null;
  return { ...user, transactions: [...user.transactions] };
}

export async function donate(
  projectId: string,
  amount: number,
): Promise<{ success: boolean; rewardsUnlocked: Reward[] }> {
  await delay(400);
  if (!user || user.creditBalance < amount) {
    return { success: false, rewardsUnlocked: [] };
  }

  user.creditBalance -= amount;
  const project = projects.find((p) => p.id === projectId);
  const rewardsUnlocked: Reward[] = [];

  if (project) {
    project.raisedCredits += amount;
    project.backerCount += 1;
    // Unlock rewards where minDonation <= donated amount
    for (const r of project.rewards) {
      if (r.minDonation <= amount) rewardsUnlocked.push(r);
    }
  }

  const tx: Transaction = {
    id: `t${Date.now()}`,
    type: 'donation',
    amount: -amount,
    label: `Donated to ${project?.title ?? 'Unknown'}`,
    date: new Date().toISOString().slice(0, 10),
  };
  user.transactions = [tx, ...user.transactions];

  return { success: true, rewardsUnlocked };
}

export async function rechargeCredits(amount: number): Promise<void> {
  await delay(500);
  if (!user) return;
  user.creditBalance += amount;
  const tx: Transaction = {
    id: `t${Date.now()}`,
    type: 'recharge',
    amount,
    label: `Recharged ${amount} credits`,
    date: new Date().toISOString().slice(0, 10),
  };
  user.transactions = [tx, ...user.transactions];
}

export async function convertCreditsToMoney(amount: number): Promise<{ dollarAmount: number }> {
  await delay(500);
  if (!user) return { dollarAmount: 0 };
  // Mock conversion: 100 credits = $1
  const dollarAmount = amount / 100;
  const tx: Transaction = {
    id: `t${Date.now()}`,
    type: 'payout',
    amount: -amount,
    label: `Converted ${amount} credits to $${dollarAmount.toFixed(2)}`,
    date: new Date().toISOString().slice(0, 10),
  };
  user.transactions = [tx, ...user.transactions];
  return { dollarAmount };
}

export function getCreatorEarnings(): number {
  return projects.filter((p) => p.isOwned).reduce((sum, p) => sum + p.raisedCredits, 0);
}

// ─── User Role & Onboarding ────────────────────────────────────

export async function setUserRole(role: UserRole): Promise<void> {
  await delay(200);
  if (!user) return;
  user.role = role;
  user.hasCompletedOnboarding = true;
}

export async function toggleUserRole(): Promise<UserRole> {
  await delay(200);
  if (!user) return 'backer';
  user.role = user.role === 'backer' ? 'creator' : 'backer';
  return user.role;
}

// ─── Authentication ─────────────────────────────────────────────

/** Mock registered accounts (email -> password) */
const accounts = new Map<string, { password: string; name: string }>([
  ['demo@example.com', { password: 'password', name: 'Demo User' }],
]);

export async function login(
  email: string,
  password: string,
): Promise<{ success: boolean; error?: string }> {
  await delay(400);
  const account = accounts.get(email.toLowerCase());
  if (!account || account.password !== password) {
    return { success: false, error: 'Invalid email or password' };
  }
  user = {
    ...mockUser,
    transactions: [...mockUser.transactions],
    name: account.name,
    email: email.toLowerCase(),
  };
  isLoggedIn = true;
  return { success: true };
}

export async function signup(
  name: string,
  email: string,
  password: string,
): Promise<{ success: boolean; error?: string }> {
  await delay(500);
  const lower = email.toLowerCase();
  if (accounts.has(lower)) {
    return { success: false, error: 'An account with this email already exists' };
  }
  accounts.set(lower, { password, name });
  user = {
    id: `u${Date.now()}`,
    name,
    email: lower,
    creditBalance: 0,
    transactions: [],
    role: 'backer',
    hasCompletedOnboarding: false,
  };
  isLoggedIn = true;
  return { success: true };
}

export async function logout(): Promise<void> {
  await delay(200);
  user = null;
  isLoggedIn = false;
}

export async function forgotPassword(
  email: string,
): Promise<{ success: boolean; error?: string }> {
  await delay(600);
  // Always return success to avoid leaking whether an account exists
  return { success: true };
}

export async function updateAccount(data: {
  name?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
}): Promise<{ success: boolean; error?: string }> {
  await delay(400);
  if (!user) return { success: false, error: 'Not logged in' };

  const account = accounts.get(user.email);
  if (!account) return { success: false, error: 'Account not found' };

  // Validate current password if changing password
  if (data.newPassword) {
    if (!data.currentPassword || data.currentPassword !== account.password) {
      return { success: false, error: 'Current password is incorrect' };
    }
    account.password = data.newPassword;
  }

  // Update email
  if (data.email && data.email.toLowerCase() !== user.email) {
    const lower = data.email.toLowerCase();
    if (accounts.has(lower)) {
      return { success: false, error: 'Email already in use' };
    }
    accounts.delete(user.email);
    accounts.set(lower, account);
    user.email = lower;
  }

  // Update name
  if (data.name) {
    account.name = data.name;
    user.name = data.name;
  }

  return { success: true };
}

export async function deleteAccount(): Promise<void> {
  await delay(400);
  if (!user) return;
  accounts.delete(user.email);
  user = null;
  isLoggedIn = false;
}
