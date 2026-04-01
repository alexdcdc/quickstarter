import { User } from './types';

export const mockUser: User = {
  id: 'u1',
  name: 'Demo User',
  email: 'demo@example.com',
  creditBalance: 500,
  role: 'backer',
  hasCompletedOnboarding: false,
  transactions: [
    { id: 't1', type: 'recharge', amount: 500, label: 'Recharged 500 credits', date: '2026-03-28' },
    { id: 't2', type: 'donation', amount: -50, label: 'Donated to Cosmic Synth Album', date: '2026-03-29' },
    { id: 't3', type: 'donation', amount: -25, label: 'Donated to Neon Ronin', date: '2026-03-30' },
    { id: 't4', type: 'recharge', amount: 200, label: 'Recharged 200 credits', date: '2026-03-30' },
  ],
};
