import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CameraView } from 'expo-camera';
import CameraControls from '../components/CameraControls';

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
});
