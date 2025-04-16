
import { AuthStorageData } from './auth-types';

export const setAuthStorage = async (data: AuthStorageData) => {
  localStorage.setItem('authToken', data.token);
  localStorage.setItem('userEmail', data.email);
  localStorage.setItem('userId', data.userId);
  localStorage.setItem('authProvider', data.provider);
};

export const clearAuthStorage = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userId');
  localStorage.removeItem('authProvider');
};

export const getAuthStorage = () => ({
  token: localStorage.getItem('authToken'),
  email: localStorage.getItem('userEmail'),
  userId: localStorage.getItem('userId'),
  provider: localStorage.getItem('authProvider')
});

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};
