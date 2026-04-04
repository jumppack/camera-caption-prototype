import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PermissionResponse } from 'expo-camera';

type PermissionScreenProps = {
  permission: PermissionResponse | null;
  requestPermission: () => void;
};

export default function PermissionScreen({ permission, requestPermission }: PermissionScreenProps) {
  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Loading camera permissions...</Text>
      </View>
    );
  }

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
