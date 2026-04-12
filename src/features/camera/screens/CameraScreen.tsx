import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CameraView, CameraType } from 'expo-camera';
import CameraControls from '../components/CameraControls';

/**
 * Core camera screen component.
 * Renders the live video feed and overlays interactive controls.
 */
export default function CameraScreen() {
  // Track the currently active lens (front or back)
  const [facing, setFacing] = useState<CameraType>('back');

  // Toggles the active lens between front and back
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      {/* Native camera view streaming the device sensor feed */}
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
