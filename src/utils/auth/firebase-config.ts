
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl0J04D0ncDNdMu3cV6QR9uTzp3VTgduI",
  authDomain: "kwattz-ai.firebaseapp.com",
  projectId: "kwattz-ai",
  storageBucket: "kwattz-ai.appspot.com",
  messagingSenderId: "1096282636985",
  appId: "1:1096282636985:web:34be43fa96ee72fd66d168",
  measurementId: "G-Q8Y8VG6TDH"
};

// Initialize Firebase
console.log("Initializing Firebase with configuration:", Object.keys(firebaseConfig).join(', '));
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// For testing in development, uncomment to use Firebase Auth Emulator
// if (window.location.hostname === "localhost") {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   console.log("Using Firebase Auth Emulator");
// }

// Initialize analytics if possible
try {
  const analytics = getAnalytics(app);
  console.log("Firebase Analytics initialized successfully");
} catch (error) {
  console.log("Analytics not initialized. This may be expected in some environments:", error);
}

console.log("Firebase Auth initialized successfully");

// Update auth persistence settings if needed
// For example: setPersistence(auth, browserLocalPersistence);

export { auth };
