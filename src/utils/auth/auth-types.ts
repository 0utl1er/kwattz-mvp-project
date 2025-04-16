
import { UserCredential } from 'firebase/auth';

export type OAuthProvider = 'google' | 'apple';

export interface UserData {
  id?: string;
  email: string;
  name?: string;
  firebaseUid?: string;
  createdAt: number;
  lastLogin?: number;
  provider?: string;
  questionnaire?: Record<string, any>;
}

export interface AuthStorageData {
  token: string;
  email: string;
  userId: string;
  provider: string;
}
