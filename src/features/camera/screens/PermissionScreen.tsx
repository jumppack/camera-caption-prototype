import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PermissionResponse } from 'expo-camera';

type PermissionScreenProps = {
  // Current camera permission state from the OS
  permission: PermissionResponse | null;
  // Function to trigger the native permission prompt
  requestPermission: () => void;
};

/**
 * Fallback screen shown when the app lacks camera access.
 * Prompts the user to grant permissions to continue.
 */
export default function PermissionScreen({ permission, requestPermission }: PermissionScreenProps) {
  // Still loading the permission status from native layer
  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Loading camera permissions...</Text>
      </View>
    );
  }

  // Permission is loaded but not granted
  return (
    <View style={styles.container}>
      <Text style={styles.message}>We need your permission to show the camera</Text>
      <Button onPress={requestPermission} title="Grant Permission" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
  },
});
