# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Start dev server:** `npx expo start` (or `npm start`)
- **Start for specific platform:** `npm run android`, `npm run ios`, `npm run web`
- **Lint:** `npm run lint` (uses eslint-config-expo flat config)
- **Type check:** `npx tsc --noEmit`
- **No test framework is currently configured.**

## Architecture

This is an Expo SDK 54 React Native app using expo-router for file-based routing, with React 19, New Architecture enabled, and the React Compiler experiment turned on.

### Routing

- `app/_layout.tsx` — Root layout: Stack navigator with ThemeProvider (light/dark) wrapped in `AppProvider` context
- `app/(tabs)/_layout.tsx` — 4-tab navigator: Feed, Discover, Dashboard, Wallet
- Modal screens: `donate`, `recharge`, `create-campaign`, `upload-content`, `add-reward` — all `presentation: 'modal'`
- Detail screens: `project/[id]` (backer view), `campaign/[id]` (creator view)

### State & Data

- `context/app-context.tsx` — Single React Context holding user state, projects, and action functions (donate, recharge, createCampaign, etc.)
- `services/mock-api.ts` — Mock async API layer with in-memory state and simulated delays. All mutations go through here.
- `data/types.ts` — TypeScript interfaces: `Project`, `Reward`, `User`, `Transaction`
- `data/mock-projects.ts` / `data/mock-user.ts` — Seed data. Projects with `isOwned: true` appear in the Creator Dashboard.

### Theming

- `constants/theme.ts` — Exports `Colors` (light/dark palettes) and `Fonts` (platform-specific font stacks)
- `ThemedText` and `ThemedView` are the base themed components; use them instead of raw `Text`/`View`

### Icons

- `components/ui/icon-symbol.tsx` — Cross-platform icon: native SF Symbols on iOS, MaterialIcons on Android/web. New icons require adding an SF Symbol-to-MaterialIcon entry in the `MAPPING` object.

### Path Aliases

TypeScript path alias `@/*` maps to the project root (e.g., `@/components/themed-text`).
