
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';

export function SignIn() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      // Note: signIn functionality would normally be here
      // but it's not available in the current auth context
      // Navigation is handled by AuthProvider
    } catch (error) {
      console.error('Sign in failed:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <Button 
        onClick={handleSignIn} 
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Signing in...' : 'Sign In with Google'}
      </Button>
    </div>
  );
}
