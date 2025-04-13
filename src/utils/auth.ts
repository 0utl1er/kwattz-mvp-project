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

/**
 * Saves user data to the database after successful authentication
 */
export const saveUserToDatabase = async (user: any): Promise<boolean> => {
  try {
    if (!user || !user.email) {
      console.error('Cannot save user to database: Missing user or email');
      return false;
    }

    const userData = {
      email: user.email,
      displayName: user.displayName || '',
      uid: user.uid,
      createdAt: Date.now(),
      lastLogin: Date.now(),
    };

    // Use Azure Static Web Apps Data API
    const response = await fetch('/data-api/rest/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error saving user to database:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error saving user to database:', error);
    return false;
  }
};

// Function to get user data from Cosmos DB by userId
export const getUserFromDatabase = async (userId: string) => {
  try {
    const response = await fetch(`/data-api/rest/users?userId=${userId}`);
    
    if (!response.ok) {
      console.error('Failed to fetch user data:', await response.text());
      return null;
    }
    
    const data = await response.json();
    return data.value && data.value.length > 0 ? data.value[0] : null;
  } catch (error) {
    console.error('Error fetching user from database:', error);
    return null;
  }
};

// Function to update user data in Cosmos DB
export const updateUserInDatabase = async (id: string, userData: any) => {
  try {
    const response = await fetch(`/data-api/rest/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      console.error('Failed to update user data:', await response.text());
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating user in database:', error);
    return null;
  }
};

// Function to save questionnaire answers
export const saveQuestionnaireAnswers = async (userId: string, answers: any) => {
  // First get the user to get their ID
  const user = await getUserFromDatabase(userId);
  
  if (!user) {
    console.error('User not found in database');
    return null;
  }
  
  // Update the user with questionnaire answers
  return await updateUserInDatabase(user.id, {
    ...user,
    questionnaireAnswers: answers,
  });
};

// Function to initiate OAuth login
export const initiateOAuthLogin = (provider: OAuthProvider) => {
  if (provider === 'google') {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // Handle successful login
        localStorage.setItem('authToken', result.user.refreshToken);
        localStorage.setItem('userEmail', result.user.email || '');
        localStorage.setItem('authProvider', provider);
        
        // Save user to database
        const userData = {
          userId: result.user.uid,
          email: result.user.email,
          name: result.user.displayName,
          provider: provider,
          createdAt: new Date().toISOString(),
        };
        
        await saveUserToDatabase(userData);
        
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
      .then(async (result) => {
        // Handle successful login
        localStorage.setItem('authToken', result.user.refreshToken);
        localStorage.setItem('userEmail', result.user.email || '');
        localStorage.setItem('authProvider', provider);
        
        // Save user to database
        const userData = {
          userId: result.user.uid,
          email: result.user.email,
          name: result.user.displayName,
          provider: provider,
          createdAt: new Date().toISOString(),
        };
        
        await saveUserToDatabase(userData);
        
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
    .then(async (result) => {
      // Handle successful login
      localStorage.setItem('authToken', result.user.refreshToken);
      localStorage.setItem('userEmail', result.user.email || '');
      localStorage.setItem('authProvider', 'email');
      
      // Check if user exists in database
      const existingUser = await getUserFromDatabase(result.user.uid);
      
      if (!existingUser) {
        // Save user to database if they don't exist yet
        const userData = {
          userId: result.user.uid,
          email: result.user.email,
          provider: 'email',
          createdAt: new Date().toISOString(),
        };
        
        await saveUserToDatabase(userData);
      }
      
      return result;
    });
};

// Email password sign up
export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      // Handle successful signup
      localStorage.setItem('authToken', result.user.refreshToken);
      localStorage.setItem('userEmail', result.user.email || '');
      localStorage.setItem('authProvider', 'email');
      
      // Save user to database
      const userData = {
        userId: result.user.uid,
        email: result.user.email,
        provider: 'email',
        createdAt: new Date().toISOString(),
      };
      
      await saveUserToDatabase(userData);
      
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
