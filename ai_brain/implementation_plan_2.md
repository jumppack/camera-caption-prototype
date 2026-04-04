# Componentize Camera Architecture

Our objective is to refactor the monolithic `App.js` into a scalable, production-ready React Native architecture. This structure will make it easy to add our future AI features and photo effects without the codebase becoming tangled.

## Proposed Directory Structure
We will adopt a standard React Native `src/` directory layout.

- `src/`
  - `screens/`
    - `CameraScreen.js`: The primary screen orchestrating the camera view.
    - `PermissionScreen.js`: A dedicated view for handling the initial permission logic.
  - `components/`
    - `CameraControls.js`: A pure UI component holding the floating buttons (e.g., "Flip Camera").

## Proposed Changes

### `src/screens/PermissionScreen.js`
We will extract the "loading" and "request permission" UI states into this dedicated component. It will receive the `requestPermission` function as a prop.

### `src/components/CameraControls.js`
This will house our interactive overlays. Currently, it will just contain the "Flip Camera" button, but it is built to hold future controls like "Capture", "Next Filter", etc.

### `src/screens/CameraScreen.js`
This screen will be responsible for defining the `<CameraView>` and layering the `<CameraControls>` over it using an absolute layout view.

### `App.js`
The top-level `App.js` will act largely as an entry point and state coordinator. It will call the `useCameraPermissions` hook, evaluate the state, and render either `PermissionScreen` or `CameraScreen` accordingly.

## Verification Plan
1. **Automated**: Ensure the new files are correctly exported/imported and no syntax errors are introduced.
2. **Manual Verification Request**: Reload the Expo app on your phone and confirm the camera rendering and flip button work identically to the previous version.
