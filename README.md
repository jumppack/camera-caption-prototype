# Camera Caption Prototype

An iOS React Native prototype built with Expo that uses the device camera to dynamically generate AI-powered captions and effects.

## Features Currently Implemented
- Native iOS device camera authorization (`NSCameraUsageDescription`).
- Live video stream preview using `expo-camera`.
- UI overlay allowing users to interact with the camera (e.g., flipping front/back lenses).

## Setup & Running Locally

Because this project interfaces with native camera hardware, it cannot be fully tested using the iOS Simulator. It must be run on a physical iPhone.

### Prerequisites 
- **Expo Go App**: Download the free [Expo Go](https://expo.dev/go) app from your iPhone's App Store.
- **Node.js**: Make sure NodeJS is installed to start the local bundler (e.g. via `nvm`).

### Getting Started

1. Clone this repository locally or navigate into the project directory:
   ```bash
   cd "path/to/camera_caption"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npm start
   ```

### Testing on your iPhone
Once the development server is running and displaying a QR code in your terminal:
1. Open your physical iPhone's standard Camera app.
2. Point it at the QR code on your Mac's screen.
3. Tap the prompt to open the link in the "Expo Go" app.
4. When prompted, grant "Camera Caption" permission to use your camera.
5. If at any point you deny permissions, you can restart the app and click the "Grant Permission" fallback button.

## Architecture & History
The system's design phase and evolving implementation plans are recorded in the `ai_brain/` directory to maintain a strict historical record of how the application is built over time.
