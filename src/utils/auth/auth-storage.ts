
import { AuthStorageData } from './auth-types';

export const setAuthStorage = async (data: AuthStorageData) => {
  console.log("Setting auth storage with data:", {
    email: data.email,
    userId: data.userId,
    provider: data.provider,
    hasToken: !!data.token
  });
  
  try {
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('authProvider', data.provider);
    localStorage.setItem('lastLogin', new Date().toISOString());
    
    console.log("Auth storage set successfully");
    return true;
  } catch (error) {
    console.error("Error setting auth storage:", error);
    return false;
  }
};

export const clearAuthStorage = () => {
  console.log("Clearing auth storage");
  try {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('authProvider');
    localStorage.removeItem('lastLogin');
    console.log("Auth storage cleared successfully");
    return true;
  } catch (error) {
    console.error("Error clearing auth storage:", error);
    return false;
  }
};

export const getAuthStorage = () => {
  try {
    const storage = {
      token: localStorage.getItem('authToken'),
      email: localStorage.getItem('userEmail'),
      userId: localStorage.getItem('userId'),
      provider: localStorage.getItem('authProvider'),
      lastLogin: localStorage.getItem('lastLogin')
    };
    
    console.log("Getting auth storage:", {
      email: storage.email,
      userId: storage.userId,
      provider: storage.provider,
      hasToken: !!storage.token,
      lastLogin: storage.lastLogin
    });
    
    return storage;
  } catch (error) {
    console.error("Error getting auth storage:", error);
    return {
      token: null,
      email: null,
      userId: null,
      provider: null,
      lastLogin: null
    };
  }
};

export const isAuthenticated = (): boolean => {
  try {
    const token = localStorage.getItem('authToken');
    const isAuth = !!token;
    console.log("Is authenticated check:", isAuth);
    
    if (isAuth) {
      // Check if token exists and has some length
      if (!token || token.length < 10) {
        console.warn("Token exists but appears invalid");
        return false;
      }
      
      // Check if we have other required data
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.warn("No user ID in storage, despite having token");
        return false;
      }
    }
    
    return isAuth;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};
