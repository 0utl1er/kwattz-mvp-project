
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

try {
  const analytics = getAnalytics(app);
} catch (error) {
  console.log("Analytics not initialized:", error);
}

export { auth };
