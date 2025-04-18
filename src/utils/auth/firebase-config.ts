
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

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
console.log("Initializing Firebase");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// For testing in development, uncomment to use Firebase Auth Emulator
// Commented out for production use
// if (window.location.hostname === "localhost") {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   console.log("Using Firebase Auth Emulator");
// }

try {
  const analytics = getAnalytics(app);
  console.log("Firebase Analytics initialized");
} catch (error) {
  console.log("Analytics not initialized:", error);
}

console.log("Firebase Auth initialized");

export { auth };
