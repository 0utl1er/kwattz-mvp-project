import { render, screen } from '@testing-library/react';
import { ProtectedRoute } from '../ProtectedRoute';
import { useAuth } from '@/contexts/auth';
import { MemoryRouter } from 'react-router-dom';

// Mock the auth context
jest.mock('@/contexts/auth', () => ({
  useAuth: jest.fn()
}));

describe('ProtectedRoute', () => {
  beforeEach(() => {
    // Type assertion for mocked function
    (useAuth as jest.MockedFunction<typeof useAuth>).mockReturnValue({
      user: { uid: '123' },
      loading: false
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