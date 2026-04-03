# Camera & Captioning App: System Design and Prototype Plan

This document outlines the system design and implementation plan for the "Camera Caption" app using **React Native**. The full vision includes taking pictures, identifying objects, generating captions, and applying effects (filters, rotation, mirroring). 

For the initial prototype, we will create a lightweight app that asks for camera access and displays the live camera feed.

## Tech Stack Proposal
- **Framework**: React Native with Expo (simplifies development, avoids the need for manual native Xcode configuration, and allows instant testing on your physical iPhone).
- **Camera API**: `expo-camera` (provides robust, cross-platform access to device cameras and permissions).
- **Language**: TypeScript

## System Design (Current Prototype)

1. **Permission Handling**
   - We will use `expo-camera`'s `useCameraPermissions` hook.
   - On startup, the app checks if camera permission is granted. If not, it displays a view with a button prompting the user to grant access.
   - Behind the scenes, the Expo build config (`app.json`) will handle injecting the native iOS `NSCameraUsageDescription` permission string.

2. **Camera View Layer**
   - The `<CameraView>` component from `expo-camera` will display the live camera feed natively.
   - We will implement basic UI to make sure the view spans the necessary area of the screen.

## System Design (Future Enhancements)
- **Object Identification & Captioning**: Capture an image using the `takePictureAsync()` method. The generated photo URI can be sent to a backend Vision API (like Gemini) to output the caption.
- **Effects & Filters**: Expo provides extensive support for creating layout overlays. If we eventually need wildly advanced native image pipeline frame processing, Expo allows migrating to "Development Builds" where we could plug in standard native frame-processing modules in the future without losing our progress.

## Proposed Actions (Prototype Phase)

If approved, I will bootstrap a new Expo project in your current working directory.

### 1. Scaffolding
- Run the initialization command: `npx create-expo-app@latest . -t default`
- Install the necessary native dependency: `npx expo install expo-camera`.

### 2. File Implementation

#### [NEW] `App.tsx`
Replace the initial boilerplate to:
1. Handle requesting permission using `useCameraPermissions()`.
2. Display the live `<CameraView>` if permission is granted.
3. Show a prompt/fallback screen if permission is denied.

#### [MODIFY] `app.json`
Update the Expo configuration to explicitly declare the camera plugin integration.

## Verification Plan
1. **Automated Check**: Ensure the initialization commands run successfully without conflicts and all Expo dependencies compile without error.
2. **Manual Test Request**: I will launch the Expo development server in the terminal. You will be able to simply scan the QR code using your iPhone and verify the live camera is working instantly!
