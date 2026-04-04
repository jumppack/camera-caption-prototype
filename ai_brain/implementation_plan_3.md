# Feature-Based Architecture & TypeScript Migration

This plan details how to pivot our existing App structure from a type-based layout to a strict feature-based layout (`src/features/camera/...`) while fully converting our files to strict TypeScript (`.tsx`).

## System Design Changes

1. **TypeScript Setup**
   - We will install `typescript` and `@types/react` as developer dependencies.
   - We will add type declarations for our simple `.tsx` files.
   - `App.js` will become `App.tsx`.

2. **Feature-Based Folder Restructuring**
   Instead of `src/screens` and `src/components`, we pull everything relating to the camera feature into one encapsulated domain:
   
   - `src/features/camera/`
     - `components/`
       - `CameraControls.tsx`: UI Controls for the camera.
     - `screens/`
       - `CameraScreen.tsx`: Main camera viewer.
       - `PermissionScreen.tsx`: Permission handling for the camera feature.

## Proposed Changes

### Install Dependencies
Run `npm install -D typescript @types/react` to set up proper TypeScript compilation mappings in Expo.

### `src/features/camera/screens/PermissionScreen.tsx`
Migrate the existing JS into valid TypeScript, extracting props types like:
```typescript
type PermissionScreenProps = {
  permission: PermissionResponse | null;
  requestPermission: () => void;
};
```

### `src/features/camera/components/CameraControls.tsx`
Add explicit prop types for the `toggleCameraFacing` function.

### `src/features/camera/screens/CameraScreen.tsx`
Adopt strict React `useState` typings (e.g., `'back' | 'front'`).

### `App.tsx`
Convert the root entry from `.js` to `.tsx` and update the import paths to accurately point to the `src/features/camera/` domain.

## Verification Plan
1. **Automated**: Run `npx tsc --noEmit` locally (or ensure no syntax warnings appear) so the typescript compiler confirms perfect type definitions.
2. **Manual Test Request**: Boot the app onto Expo Go to make sure everything links properly and displays successfully.
