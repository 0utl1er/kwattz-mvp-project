
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBl0J04D0ncDNdMu3cV6QR9uTzp3VTgduI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "kwattz-ai.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "kwattz-ai",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "kwattz-ai.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1096282636985",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1096282636985:web:34be43fa96ee72fd66d168",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-Q8Y8VG6TDH"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize analytics if in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized successfully");
  } catch (error) {
    console.log("Analytics not initialized. This may be expected in some environments:", error);
  }
}

export { app, analytics };
