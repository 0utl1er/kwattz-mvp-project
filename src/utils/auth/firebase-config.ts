
// Import the auth directly from our main firebaseConfig.ts file
import { auth } from '../../lib/firebaseConfig';
import { setPersistence, inMemoryPersistence } from 'firebase/auth';

console.log("Using already initialized Firebase instance");

// Set persistence to ensure tokens are properly stored
setPersistence(auth, inMemoryPersistence)
  .then(() => {
    console.log("Firebase persistence set to inMemoryPersistence");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// For testing in development, uncomment to use Firebase Auth Emulator
// if (window.location.hostname === "localhost") {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   console.log("Using Firebase Auth Emulator");
// }

export { auth };
