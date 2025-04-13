
/**
 * Utility functions for interacting with Azure Static Web App's built-in database
 */

interface UserData {
  id?: string;
  email: string;
  name?: string;
  createdAt: number;
  lastLogin?: number;
  questionnaire?: Record<string, any>;
}

/**
 * Saves user data to Azure Static Web App's built-in database
 */
export const saveUserToAzureDB = async (userData: UserData): Promise<boolean> => {
  try {
    // Use the Azure Static Web Apps built-in Data API
    const response = await fetch('/data-api/rest/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error saving user to Azure DB:', errorData);
      return false;
    }

    const result = await response.json();
    console.log('User saved to Azure DB successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to save user to Azure DB:', error);
    return false;
  }
};

/**
 * Gets user data from Azure Static Web App's built-in database
 */
export const getUserFromAzureDB = async (userId: string): Promise<UserData | null> => {
  try {
    const response = await fetch(`/data-api/rest/users/${userId}`);
    
    if (!response.ok) {
      console.error('Error fetching user from Azure DB:', response.statusText);
      return null;
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user from Azure DB:', error);
    return null;
  }
};
