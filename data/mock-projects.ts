import { Project } from './types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Cosmic Synth Album',
    creatorName: 'Luna Wave',
    description:
      'An ambient electronic album inspired by deep space exploration. Backers get exclusive sheet music and desktop wallpapers.',
    goalCredits: 5000,
    raisedCredits: 3200,
    backerCount: 87,
    videos: [
      { id: 'v1', title: 'Album Teaser', placeholderColor: '#1a1a2e' },
      { id: 'v2', title: 'Behind the Scenes', placeholderColor: '#16213e' },
    ],
    rewards: [
      { id: 'r1', title: 'Digital Album Download', description: 'Full album in FLAC + MP3', minDonation: 50, fileName: 'cosmic-synth-album.zip' },
      { id: 'r2', title: 'Sheet Music Pack', description: 'All 12 tracks as PDF sheet music', minDonation: 100, fileName: 'sheet-music-pack.pdf' },
    ],
    isOwned: false,
  },
  {
    id: '2',
    title: 'Pocket Garden Planner',
    creatorName: 'GreenThumb Dev',
    description:
      'A mobile app that helps urban gardeners plan their balcony and windowsill gardens with AR visualization.',
    goalCredits: 8000,
    raisedCredits: 1500,
    backerCount: 42,
    videos: [{ id: 'v3', title: 'App Demo', placeholderColor: '#1b4332' }],
    rewards: [
      { id: 'r3', title: 'Beta Access', description: 'Early access to the app before launch', minDonation: 25, fileName: 'beta-invite-code.txt' },
      { id: 'r4', title: 'Plant Care Wallpapers', description: '10 botanical desktop wallpapers', minDonation: 10, fileName: 'plant-wallpapers.zip' },
    ],
    isOwned: false,
  },
  {
    id: '3',
    title: 'Indie Comic: Neon Ronin',
    creatorName: 'Kai Tanaka',
    description:
      'A cyberpunk manga-style comic about a rogue android navigating a neon-lit megacity.',
    goalCredits: 3000,
    raisedCredits: 2800,
    backerCount: 156,
    videos: [
      { id: 'v4', title: 'Art Process', placeholderColor: '#3d0066' },
      { id: 'v5', title: 'Story Preview', placeholderColor: '#240046' },
    ],
    rewards: [
      { id: 'r5', title: 'Digital Comic (PDF)', description: 'Full first issue as a PDF', minDonation: 15, fileName: 'neon-ronin-issue1.pdf' },
      { id: 'r6', title: 'Character Wallpaper Pack', description: '5 HD character wallpapers', minDonation: 10, fileName: 'character-wallpapers.zip' },
    ],
    isOwned: false,
  },
  {
    id: '4',
    title: 'Handcrafted Ceramic Mugs',
    creatorName: 'You',
    description:
      'A collection of handcrafted ceramic mugs inspired by nature. Each mug is unique and made with locally sourced clay.',
    goalCredits: 2000,
    raisedCredits: 750,
    backerCount: 23,
    videos: [{ id: 'v6', title: 'Making Process', placeholderColor: '#5c3d2e' }],
    rewards: [
      { id: 'r7', title: 'Behind-the-Scenes Video', description: 'Extended making-of documentary', minDonation: 10, fileName: 'making-of-ceramics.mp4' },
    ],
    isOwned: true,
  },
  {
    id: '5',
    title: 'Learn Piano in 30 Days',
    creatorName: 'You',
    description:
      'A structured online course with daily video lessons, exercises, and sheet music for complete beginners.',
    goalCredits: 6000,
    raisedCredits: 4200,
    backerCount: 210,
    videos: [
      { id: 'v7', title: 'Course Overview', placeholderColor: '#1a1a2e' },
      { id: 'v8', title: 'Lesson 1 Preview', placeholderColor: '#0f3460' },
    ],
    rewards: [
      { id: 'r8', title: 'Practice Sheet Music', description: 'Beginner sheet music bundle (PDF)', minDonation: 20, fileName: 'beginner-sheet-music.pdf' },
      { id: 'r9', title: 'Desktop Wallpapers', description: 'Musical themed wallpaper pack', minDonation: 5, fileName: 'piano-wallpapers.zip' },
    ],
    isOwned: true,
  },
  {
    id: '6',
    title: 'Street Food Documentary',
    creatorName: 'Maria Santos',
    description:
      'A short documentary exploring the vibrant street food culture of Southeast Asia.',
    goalCredits: 10000,
    raisedCredits: 6700,
    backerCount: 312,
    videos: [{ id: 'v9', title: 'Trailer', placeholderColor: '#b7410e' }],
    rewards: [
      { id: 'r10', title: 'Recipe E-Book', description: '25 street food recipes as a PDF', minDonation: 30, fileName: 'street-food-recipes.pdf' },
      { id: 'r11', title: 'Food Photography Wallpapers', description: '8 HD food photography wallpapers', minDonation: 10, fileName: 'food-photography.zip' },
    ],
    isOwned: false,
  },
  {
    id: '7',
    title: 'Open Source Weather Station',
    creatorName: 'HackLab Collective',
    description:
      'A DIY weather station kit with open-source firmware. Monitor temperature, humidity, pressure, and air quality.',
    goalCredits: 4000,
    raisedCredits: 900,
    backerCount: 31,
    videos: [{ id: 'v10', title: 'Prototype Demo', placeholderColor: '#003049' }],
    rewards: [
      { id: 'r12', title: 'Circuit Schematics', description: 'Full PCB schematics as PDF', minDonation: 15, fileName: 'pcb-schematics.pdf' },
    ],
    isOwned: false,
  },
  {
    id: '8',
    title: 'Pixel Art RPG Soundtrack',
    creatorName: 'ChipTune Charlie',
    description:
      'An original chiptune soundtrack for indie RPG games, featuring 20 tracks of retro-inspired music.',
    goalCredits: 2500,
    raisedCredits: 2100,
    backerCount: 98,
    videos: [
      { id: 'v11', title: 'Track Samples', placeholderColor: '#2d00f7' },
      { id: 'v12', title: 'Composing Process', placeholderColor: '#6a00f4' },
    ],
    rewards: [
      { id: 'r13', title: 'Full Soundtrack (MP3)', description: 'All 20 tracks in high quality MP3', minDonation: 25, fileName: 'rpg-soundtrack.zip' },
      { id: 'r14', title: 'Pixel Art Wallpapers', description: 'Game-themed pixel art wallpapers', minDonation: 10, fileName: 'pixel-art-wallpapers.zip' },
    ],
    isOwned: false,
  },
];
