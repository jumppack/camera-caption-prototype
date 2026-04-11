# Project Information: Camera Caption Prototype

Welcome to the **Camera Caption Prototype**! This document explains in detail how the application functions under the hood. From launching the local development server to scanning the QR code and viewing the live camera feed, we cover everything step-by-step.

## 🚀 1. Starting the Application

The project is built using [Expo](https://expo.dev) and React Native.

When you run `npm start` (which executes `expo start`), the Expo CLI spins up a local bundler (Metro). Metro compiles all the TypeScript/JavaScript files and creates a local development server.

```bash
# Command to start the development server
npm start
```

Once Metro is running, it generates an interactive terminal UI with a **QR Code**. This QR code contains a special development URL (e.g., `exp://192.168.1.10:8081`) that instructs the Expo Go app on your phone where to fetch the JavaScript bundle.

## 📱 2. Scanning the QR Code

Because the iOS Simulator does not mock physical camera hardware, this project must be run on a real physical device.

1. Install the **Expo Go** app from the iOS App Store.
2. Open your iPhone's native Camera app and point it at the QR code in your terminal.
3. Tap the notification that appears at the top of your screen to open the link in Expo Go.

When the link opens:
- Expo Go connects to your local machine via Wi-Fi.
- It downloads the compiled React Native bundle from Metro.
- It renders the application natively using Expo's pre-compiled iOS binaries.

## ⚙️ 3. Under the Hood: How the Code Works

The application follows a **Feature-Based Domain Architecture**, meaning that code is grouped by feature rather than type. All camera-related code lives in `src/features/camera`.

The execution flow starts at `App.tsx` and delegates to domain-specific screens:

### A. The Entry Point (`App.tsx`)

`App.tsx` acts as the root orchestrator. Its primary job is to handle **Permissions**. It uses the `useCameraPermissions` hook from the `expo-camera` module. 

```tsx
export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  // If permissions are not granted, render the PermissionScreen
  if (!permission || !permission.granted) {
    return (
      <PermissionScreen 
        permission={permission} 
        requestPermission={requestPermission} 
      />
    );
  }

  // Otherwise, render the main Camera View
  return <CameraScreen />;
}
```

Since iOS requires strict user consent for hardware access, the app will conditionally render a fallback UI if the camera permission hasn't been granted yet. 

### B. The Permission Screen

If `permission.granted` is false, `PermissionScreen.tsx` is shown. It displays a user-friendly message and a button that calls `requestPermission()`. This command triggers the native iOS `NSCameraUsageDescription` modal asking the user to allow camera access, ensuring compliance with Apple's strict privacy guidelines.

### C. The Camera Screen (`CameraScreen.tsx`)

Once permission is verified, the app mounts the `CameraScreen`. This component bridges JavaScript to the native iOS Camera APIs via `expo-camera`'s `<CameraView>`.

```tsx
import { CameraView, CameraType } from 'expo-camera';

export default function CameraScreen() {
  // State to track if the front or back lens is active
  const [facing, setFacing] = useState<CameraType>('back');

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <CameraControls toggleCameraFacing={toggleCameraFacing} />
      </CameraView>
    </View>
  );
}
```

- **`<CameraView>`**: A React Native component that wraps an iOS `AVCaptureSession`. It streams the live video feed directly to the screen UI layer.
- **`facing` State**: By maintaining a `facing` variable ('back' or 'front'), we can quickly swap active hardware lenses. 
- **`<CameraControls>`**: A modular component overlaid on top of the camera feed (using flexbox overlay logic) that holds buttons, such as a "Flip Camera" button, invoking the `toggleCameraFacing` function.

## 🏗️ Future Scope

This solid foundation ensures that as we layer on **AI inference** and **captioning features**, the core view layer is robust, isolated, and scalable. Complex logic can simply extend the `CameraScreen` structure, injecting UI overlays or attaching frame processors without mutating the root architecture.
