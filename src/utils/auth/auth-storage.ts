
import { AuthStorageData } from './auth-types';

export const setAuthStorage = async (data: AuthStorageData) => {
  console.log("Setting auth storage:", data);
  localStorage.setItem('authToken', data.token);
  localStorage.setItem('userEmail', data.email);
  localStorage.setItem('userId', data.userId);
  localStorage.setItem('authProvider', data.provider);
};

export const clearAuthStorage = () => {
  console.log("Clearing auth storage");
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userId');
  localStorage.removeItem('authProvider');
};

export const getAuthStorage = () => {
  const storage = {
    token: localStorage.getItem('authToken'),
    email: localStorage.getItem('userEmail'),
    userId: localStorage.getItem('userId'),
    provider: localStorage.getItem('authProvider')
  };
  console.log("Getting auth storage:", storage);
  return storage;
};

export const isAuthenticated = (): boolean => {
  const isAuth = !!localStorage.getItem('authToken');
  console.log("Is authenticated:", isAuth);
  return isAuth;
};
