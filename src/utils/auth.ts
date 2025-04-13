
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
import { saveUserToAzureDB, getUserByFirebaseUidFromAzureDB, getUserByEmailFromAzureDB } from './azure-db';

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
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      // Save or update user in Azure DB
      await saveUserToDatabase(result);
      
      return result;
    });
};

// Email password sign up
export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      // Save new user to Azure DB
      await saveUserToDatabase(result);
      
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
