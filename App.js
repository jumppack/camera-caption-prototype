import React from 'react';
import { useCameraPermissions } from 'expo-camera';
import PermissionScreen from './src/screens/PermissionScreen';
import CameraScreen from './src/screens/CameraScreen';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission || !permission.granted) {
    return (
      <PermissionScreen 
        permission={permission} 
        requestPermission={requestPermission} 
      />
    );
  }

  return <CameraScreen />;
}
