import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';

export function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signIn();
      // Navigation is handled by AuthProvider
    } catch (error) {
      console.error('Sign in failed:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}