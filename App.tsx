import React from 'react';
import { useCameraPermissions } from 'expo-camera';
import PermissionScreen from './src/features/camera/screens/PermissionScreen';
import CameraScreen from './src/features/camera/screens/CameraScreen';

/**
 * Main application entry point.
 * Handles the initial camera permission request logic and routing.
 */
export default function App() {
  // Hook to retrieve and request camera permissions from the OS
  const [permission, requestPermission] = useCameraPermissions();

  // If permissions haven't loaded yet, or are denied, show the fallback screen
  if (!permission || !permission.granted) {
    return (
      <PermissionScreen 
        permission={permission} 
        requestPermission={requestPermission} 
      />
    );
  }

  // Once permissions are granted, Mount the main camera view
  return <CameraScreen />;
}
