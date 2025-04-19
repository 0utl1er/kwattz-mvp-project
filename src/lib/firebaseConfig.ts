
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration - using environment variables or defaults
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBl0J04D0ncDNdMu3cV6QR9uTzp3VTgduI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "kwattz-ai.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "kwattz-ai",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "kwattz-ai.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1096282636985",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1096282636985:web:34be43fa96ee72fd66d168",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-Q8Y8VG6TDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
