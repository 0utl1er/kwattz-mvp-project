
// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider as FirebaseOAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential
} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { saveUserToAzureDB, getUserByFirebaseUidFromAzureDB, getUserByEmailFromAzureDB } from './azure-db';

// Define the supported OAuth providers
export type OAuthProvider = 'google' | 'apple';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl0J04D0ncDNdMu3cV6QR9uTzp3VTgduI",
  authDomain: "kwattz-ai.firebaseapp.com",
  projectId: "kwattz-ai",
  storageBucket: "kwattz-ai.firebasestorage.app",
  messagingSenderId: "1096282636985",
  appId: "1:1096282636985:web:34be43fa96ee72fd66d168",
  measurementId: "G-Q8Y8VG6TDH"
};

// Ensure Firebase is only initialized once
let app;
let analytics;
let auth;

try {
  // Check if Firebase has already been initialized
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
} catch (error) {
  // If Firebase is already initialized, use the existing instance
  console.log("Firebase already initialized, using existing instance");
  app = initializeApp();
  analytics = getAnalytics(app);
  auth = getAuth(app);
}

/**
 * Saves user data to the Azure database after successful authentication
 */
export const saveUserToDatabase = async (userCredential: UserCredential): Promise<boolean> => {
  try {
    const { user } = userCredential;
    
    if (!user || !user.email) {
      console.error('Cannot save user to database: Missing user or email');
      return false;
    }

    const userData = {
      email: user.email,
      name: user.displayName || '',
      firebaseUid: user.uid,
      createdAt: Date.now(),
      lastLogin: Date.now(),
      provider: user.providerData[0]?.providerId || 'email',
    };

    // Save to Azure DB
    const result = await saveUserToAzureDB(userData);
    
    if (result) {
      // Store minimal information in local storage for client-side auth state
      localStorage.setItem('authToken', await user.getIdToken());
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userId', user.uid);
      localStorage.setItem('authProvider', userData.provider);
    }

    return result;
  } catch (error) {
    console.error('Error saving user to database:', error);
    return false;
  }
};

// Function to get user data from Azure DB by Firebase userId
export const getUserFromDatabase = async (userId: string) => {
  try {
    return await getUserByFirebaseUidFromAzureDB(userId);
  } catch (error) {
    console.error('Error fetching user from database:', error);
    return null;
  }
};

// Function to initiate OAuth login
export const initiateOAuthLogin = (provider: OAuthProvider) => {
  if (provider === 'google') {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // Handle successful login by saving to Azure DB
        await saveUserToDatabase(result);
        
        // Redirect to questionnaire if new user, otherwise to dashboard
        const existingUser = await getUserByEmailFromAzureDB(result.user.email || '');
        if (existingUser && existingUser.questionnaire) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/questionnaire';
        }
        
        return result;
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        throw error;
      });
  } else if (provider === 'apple') {
    const appleProvider = new FirebaseOAuthProvider('apple.com');
    return signInWithPopup(auth, appleProvider)
      .then(async (result) => {
        // Handle successful login by saving to Azure DB
        await saveUserToDatabase(result);
        
        // Redirect to questionnaire if new user, otherwise to dashboard
        const existingUser = await getUserByEmailFromAzureDB(result.user.email || '');
        if (existingUser && existingUser.questionnaire) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/questionnaire';
        }
        
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
  console.log("Attempting to sign in with email:", email);
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      console.log("Email sign-in successful:", result.user.email);
      // Save or update user in Azure DB
      await saveUserToDatabase(result);
      
      // Redirect to dashboard after successful login
      window.location.href = '/dashboard';
      
      return result;
    })
    .catch(error => {
      console.error("Email sign-in error:", error);
      throw error;
    });
};

// Email password sign up
export const signUpWithEmail = (email: string, password: string) => {
  console.log("Attempting to sign up with email:", email);
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      console.log("Email sign-up successful:", result.user.email);
      // Save new user to Azure DB
      await saveUserToDatabase(result);
      
      // Redirect to questionnaire after successful signup
      window.location.href = '/questionnaire';
      
      return result;
    })
    .catch(error => {
      console.error("Email sign-up error:", error);
      throw error;
    });
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

// Get current user info
export const getCurrentUser = () => {
  const email = localStorage.getItem('userEmail');
  const userId = localStorage.getItem('userId');
  const provider = localStorage.getItem('authProvider') as string | null;
  
  if (!email || !userId) return null;
  
  return {
    email,
    userId,
    provider
  };
};

// Logout function
export const logout = () => {
  return signOut(auth).then(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('authProvider');
    
    // Redirect to home page
    window.location.href = '/';
  }).catch((error) => {
    console.error("Sign out error:", error);
    throw error;
  });
};
