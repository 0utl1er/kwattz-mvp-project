
import { 
  GoogleAuthProvider, 
  OAuthProvider as FirebaseOAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from './firebase-config';
import { setAuthStorage, clearAuthStorage } from './auth-storage';
import { saveUserToAzureDB, getUserByEmailFromAzureDB } from '../azure-db';
import { OAuthProvider } from './auth-types';
import { toast } from "@/hooks/use-toast";

export const initiateOAuthLogin = (provider: OAuthProvider) => {
  const authProvider = provider === 'google' 
    ? new GoogleAuthProvider()
    : new FirebaseOAuthProvider('apple.com');

  return signInWithPopup(auth, authProvider)
    .then(async (result) => {
      try {
        await saveUserToDatabase(result);
        
        // For testing purposes, always go to dashboard
        window.location.href = '/dashboard';
        
        return result;
      } catch (error) {
        console.error("Error after successful authentication:", error);
        throw error;
      }
    })
    .catch((error) => {
      console.error(`${provider} sign-in error:`, error);
      throw error;
    });
};

export const signInWithEmail = (email: string, password: string) => {
  console.log("Attempting to sign in with email:", email);
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      console.log("Email sign-in successful:", result.user.email);
      try {
        await saveUserToDatabase(result);
        // Always direct to dashboard
        window.location.href = '/dashboard';
        return result;
      } catch (error) {
        console.error("Error saving user data after sign in:", error);
        // Still navigate to dashboard even if saving to DB fails
        window.location.href = '/dashboard';
        return result;
      }
    })
    .catch(error => {
      console.error("Email sign-in error:", error);
      throw error;
    });
};

export const signUpWithEmail = (email: string, password: string) => {
  console.log("Attempting to sign up with email:", email);
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      console.log("Email sign-up successful:", result.user.email);
      
      try {
        await saveUserToDatabase(result);
        
        toast({
          title: "Account created successfully",
          description: "Welcome to kWattz! Let's start saving on energy.",
        });
        
        // Skip questionnaire for testing
        window.location.href = '/dashboard';
        return result;
      } catch (dbError) {
        console.error("Error saving user to database:", dbError);
        toast({
          title: "Account created but profile setup failed",
          description: "Please try logging in again.",
          variant: "destructive",
        });
        // Still navigate to dashboard
        window.location.href = '/dashboard';
        return result;
      }
    })
    .catch(error => {
      console.error("Email sign-up error:", error);
      
      let errorMessage = "There was an error creating your account. Please try again.";
      
      switch(error.code) {
        case "auth/email-already-in-use":
          errorMessage = "This email is already registered. Please try logging in instead.";
          break;
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email address.";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/password accounts are not enabled. Please contact support.";
          break;
        case "auth/weak-password":
          errorMessage = "Please choose a stronger password (at least 8 characters).";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection and try again.";
          break;
        default:
          errorMessage = `Sign up failed: ${error.message}`;
      }
      
      toast({
        title: "Sign up failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      throw error;
    });
};

export const saveUserToDatabase = async (userCredential: any) => {
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

    try {
      // Try to save to Azure DB but don't fail if it doesn't work
      const result = await saveUserToAzureDB(userData);
      console.log("User saved to Azure DB:", result);
    } catch (error) {
      console.error("Error saving to Azure DB:", error);
      // Continue anyway
    }
    
    // Always save to local storage
    await setAuthStorage({
      token: await user.getIdToken(),
      email: user.email,
      userId: user.uid,
      provider: userData.provider
    });

    return true;
  } catch (error) {
    console.error('Error in saveUserToDatabase:', error);
    return false;
  }
};

export const logout = () => {
  return signOut(auth).then(() => {
    clearAuthStorage();
    window.location.href = '/login';
  }).catch((error) => {
    console.error("Sign out error:", error);
    throw error;
  });
};
