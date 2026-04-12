import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type CameraControlsProps = {
  // Callback function to switch between front and back camera lenses
  toggleCameraFacing: () => void;
};

/**
 * Overlay component for camera controls.
 * Displays interactive buttons on top of the live camera feed.
 */
export default function CameraControls({ toggleCameraFacing }: CameraControlsProps) {
  return (
    <View style={styles.buttonContainer}>
      {/* Button to flip active lens */}
      <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
        <Text style={styles.text}>Flip Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
