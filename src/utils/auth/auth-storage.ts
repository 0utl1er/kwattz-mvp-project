
import { AuthStorageData } from './auth-types';

export const setAuthStorage = async (data: AuthStorageData) => {
  console.log("Setting auth storage:", data);
  try {
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('authProvider', data.provider);
    console.log("Auth storage set successfully");
  } catch (error) {
    console.error("Error setting auth storage:", error);
  }
};

export const clearAuthStorage = () => {
  console.log("Clearing auth storage");
  try {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('authProvider');
    console.log("Auth storage cleared successfully");
  } catch (error) {
    console.error("Error clearing auth storage:", error);
  }
};

export const getAuthStorage = () => {
  try {
    const storage = {
      token: localStorage.getItem('authToken'),
      email: localStorage.getItem('userEmail'),
      userId: localStorage.getItem('userId'),
      provider: localStorage.getItem('authProvider')
    };
    console.log("Getting auth storage:", storage);
    return storage;
  } catch (error) {
    console.error("Error getting auth storage:", error);
    return {
      token: null,
      email: null,
      userId: null,
      provider: null
    };
  }
};

export const isAuthenticated = (): boolean => {
  try {
    const isAuth = !!localStorage.getItem('authToken');
    console.log("Is authenticated:", isAuth);
    return isAuth;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};
