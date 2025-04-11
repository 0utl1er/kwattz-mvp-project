
// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider as FirebaseOAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

// Define the supported OAuth providers
export type OAuthProvider = 'google' | 'apple';

// Firebase configuration
// For production, these values should be replaced with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to initiate OAuth login
export const initiateOAuthLogin = (provider: OAuthProvider) => {
  if (provider === 'google') {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Handle successful login
        localStorage.setItem('authToken', result.user.refreshToken);
        localStorage.setItem('userEmail', result.user.email || '');
        localStorage.setItem('authProvider', provider);
        
        // Redirect to questionnaire
        window.location.href = '/questionnaire';
        return result;
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        throw error;
      });
  } else if (provider === 'apple') {
    const appleProvider = new FirebaseOAuthProvider('apple.com');
    return signInWithPopup(auth, appleProvider)
      .then((result) => {
        // Handle successful login
        localStorage.setItem('authToken', result.user.refreshToken);
        localStorage.setItem('userEmail', result.user.email || '');
        localStorage.setItem('authProvider', provider);
        
        // Redirect to questionnaire
        window.location.href = '/questionnaire';
        return result;
      })
      .catch((error) => {
        console.error("Apple sign-in error:", error);
        throw error;
      });
  }
  
  return Promise.reject(new Error("Unsupported provider"));
};

// Email password sign in
export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Handle successful login
      localStorage.setItem('authToken', result.user.refreshToken);
      localStorage.setItem('userEmail', result.user.email || '');
      localStorage.setItem('authProvider', 'email');
      
      return result;
    });
};

// Email password sign up
export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      // Handle successful signup
      localStorage.setItem('authToken', result.user.refreshToken);
      localStorage.setItem('userEmail', result.user.email || '');
      localStorage.setItem('authProvider', 'email');
      
      return result;
    });
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

// Get current user info
export const getCurrentUser = () => {
  const email = localStorage.getItem('userEmail');
  const provider = localStorage.getItem('authProvider') as OAuthProvider | null;
  
  if (!email) return null;
  
  return {
    email,
    provider
  };
};

// Logout function
export const logout = () => {
  return signOut(auth).then(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('authProvider');
    
    // Redirect to home page
    window.location.href = '/';
  }).catch((error) => {
    console.error("Sign out error:", error);
    throw error;
  });
};
