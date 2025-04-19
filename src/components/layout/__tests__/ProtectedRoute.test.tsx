
import { render, screen } from '@testing-library/react';
import { ProtectedRoute } from '../ProtectedRoute';
import { useAuth } from '@/contexts/auth';
import { MemoryRouter } from 'react-router-dom';
import { User } from 'firebase/auth';

// Mock the auth context
jest.mock('@/contexts/auth', () => ({
  useAuth: jest.fn()
}));

describe('ProtectedRoute', () => {
  beforeEach(() => {
    // Mock a more complete User object
    const mockUser = {
      uid: '123',
      email: 'test@example.com',
      displayName: 'Test User',
      photoURL: null,
      emailVerified: false,
      isAnonymous: false,
      metadata: {},
      providerData: [],
      refreshToken: '',
      tenantId: null,
      delete: jest.fn(),
      getIdToken: jest.fn(),
      getIdTokenResult: jest.fn(),
      reload: jest.fn(),
      toJSON: jest.fn(),
      phoneNumber: null,
      providerId: 'firebase'
    } as unknown as User;

    // Type assertion for mocked function
    (useAuth as jest.MockedFunction<typeof useAuth>).mockReturnValue({
      user: mockUser,
      loading: false,
      signIn: jest.fn(),
      logout: jest.fn()
    });
  });

  it('should render children when user is authenticated', () => {
    render(
      <MemoryRouter>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });
});
