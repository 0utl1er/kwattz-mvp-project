
// Define the supported OAuth providers
export type OAuthProvider = 'google' | 'apple';

// Function to initiate OAuth login
export const initiateOAuthLogin = (provider: OAuthProvider) => {
  // In a real application, you would redirect to your backend OAuth endpoint
  // or use a service like Firebase, Auth0, etc.
  
  let authUrl = '';
  
  if (provider === 'google') {
    // Replace with your actual Google OAuth URL in production
    authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=profile email';
    
    console.log(`Initiating Google OAuth login. In a real app, would redirect to: ${authUrl}`);
    // Mock the OAuth flow for demonstration
    mockOAuthFlow('google');
  } else if (provider === 'apple') {
    // Replace with your actual Apple OAuth URL in production
    authUrl = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=name email';
    
    console.log(`Initiating Apple OAuth login. In a real app, would redirect to: ${authUrl}`);
    // Mock the OAuth flow for demonstration
    mockOAuthFlow('apple');
  }
  
  // In production, you would redirect to the authUrl
  // window.location.href = authUrl;
};

// Mock OAuth flow for demonstration purposes
const mockOAuthFlow = (provider: OAuthProvider) => {
  // Simulate a successful OAuth response after 1 second
  setTimeout(() => {
    const userEmail = provider === 'google' 
      ? 'user@gmail.com' 
      : 'user@icloud.com';
      
    console.log(`Mock ${provider} OAuth login successful for ${userEmail}`);
    
    // Store auth token in localStorage (in real app, handle this securely)
    localStorage.setItem('authToken', `mock-token-${provider}-${Date.now()}`);
    localStorage.setItem('userEmail', userEmail);
    
    // Redirect to questionnaire
    window.location.href = '/questionnaire';
  }, 1000);
};
