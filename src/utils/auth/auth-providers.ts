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
  console.log(`Initiating ${provider} login...`);
  
  const authProvider = provider === 'google' 
    ? new GoogleAuthProvider()
    : new FirebaseOAuthProvider('apple.com');
  
  // Add scopes for Google provider
  if (provider === 'google') {
    const googleProvider = authProvider as GoogleAuthProvider;
    googleProvider.addScope('email');
    googleProvider.addScope('profile');
  }

  return signInWithPopup(auth, authProvider)
    .then(async (result) => {
      try {
        console.log(`${provider} login successful:`, result.user.email);
        
        // Get the token
        const token = await result.user.getIdToken();
        console.log("User token obtained:", token ? "Yes" : "No");
        
        // Save user to database and local storage
        await saveUserToDatabase(result);
        
        // Show success toast
        toast({
          title: "Login successful",
          description: `You're now logged in with ${provider}!`,
        });
        
        // Directly navigate to dashboard using window.location
        console.log("Redirecting to dashboard...");
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
        
        return result;
      } catch (error) {
        console.error(`Error after successful ${provider} authentication:`, error);
        toast({
          title: "Authentication error",
          description: "There was a problem completing your login. Please try again.",
          variant: "destructive",
        });
        // Still try to redirect even if DB save fails
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
        return result;
      }
    })
    .catch((error) => {
      console.error(`${provider} sign-in error:`, error);
      let errorMessage = "Could not authenticate. Please try again.";
      
      if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "You closed the login popup. Please try again.";
      } else if (error.code === "auth/popup-blocked") {
        errorMessage = "Popup was blocked by your browser. Please allow popups for this site.";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "Multiple popup requests were made. Please try again.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your connection and try again.";
      }
      
      toast({
        title: `${provider} login failed`,
        description: errorMessage,
        variant: "destructive",
      });
      
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
        toast({
          title: "Login successful",
          description: "Welcome back to kWattz!",
        });
        // Navigate to dashboard
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
        
        // Navigate directly to dashboard
        window.location.href = '/dashboard';
        return result;
      } catch (dbError) {
        console.error("Error saving user to database:", dbError);
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

    console.log("Saving user to database:", user.email);
    
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
      // Continue anyway - this shouldn't prevent dashboard access
    }
    
    // Always save to local storage for authentication
    console.log("Saving authentication data to local storage");
    const token = await user.getIdToken();
    console.log("Token obtained:", token ? "Yes (length: " + token.length + ")" : "No");
    
    await setAuthStorage({
      token: token,
      email: user.email,
      userId: user.uid,
      provider: userData.provider
    });
    
    console.log("User data saved to local storage");
    return true;
  } catch (error) {
    console.error('Error in saveUserToDatabase:', error);
    return false;
  }
};

export const logout = () => {
  console.log("Logging out...");
  return signOut(auth).then(() => {
    clearAuthStorage();
    console.log("Logged out successfully, redirecting to login page");
    window.location.href = '/login';
  }).catch((error) => {
    console.error("Sign out error:", error);
    toast({
      title: "Logout failed",
      description: "There was a problem logging you out. Please try again.",
      variant: "destructive",
    });
    throw error;
  });
};
