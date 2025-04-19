import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from './firebaseConfig';

// Update user profile without questionnaire
export async function updateUserProfile(userId: string, data: UserProfile) {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, {
    ...data,
    updatedAt: serverTimestamp(),
  }, { merge: true });
}

// Add type safety
interface UserProfile {
  displayName?: string;
  email?: string;
  photoURL?: string;
  [key: string]: any;
}