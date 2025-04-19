
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { auth } from './firebaseConfig';

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

export { auth };
