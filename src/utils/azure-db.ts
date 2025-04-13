
/**
 * Utility functions for interacting with Azure Static Web App's built-in database
 */

interface UserData {
  id?: string;
  email: string;
  name?: string;
  createdAt: number;
  lastLogin?: number;
  firebaseUid?: string; // Added Firebase UID field
  provider?: string;    // Added auth provider tracking
  questionnaire?: Record<string, any>;
}

/**
 * Saves user data to Azure Static Web App's built-in database
 */
export const saveUserToAzureDB = async (userData: UserData): Promise<boolean> => {
  try {
    // Check if user already exists in Azure DB by email
    const existingUser = await getUserByEmailFromAzureDB(userData.email);
    
    if (existingUser) {
      // If user exists, update their record with the new login time and any new data
      const updatedData = {
        ...existingUser,
        lastLogin: Date.now(),
        ...userData, // This will overwrite existing fields with new data
      };
      
      // Update existing user
      const updateResponse = await fetch(`/data-api/rest/users/${existingUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      
      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        console.error('Error updating user in Azure DB:', errorData);
        return false;
      }
      
      console.log('User updated in Azure DB successfully');
      return true;
    }
    
    // If user doesn't exist, create a new record
    const createResponse = await fetch('/data-api/rest/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!createResponse.ok) {
      const errorData = await createResponse.json();
      console.error('Error saving user to Azure DB:', errorData);
      return false;
    }

    const result = await createResponse.json();
    console.log('User saved to Azure DB successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to save user to Azure DB:', error);
    return false;
  }
};

/**
 * Gets user data from Azure Static Web App's built-in database by user ID
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

/**
 * Gets user data from Azure Static Web App's built-in database by Firebase UID
 */
export const getUserByFirebaseUidFromAzureDB = async (firebaseUid: string): Promise<UserData | null> => {
  try {
    // Use a query parameter to filter by firebaseUid
    const response = await fetch(`/data-api/rest/users?$filter=firebaseUid eq '${firebaseUid}'`);
    
    if (!response.ok) {
      console.error('Error fetching user by Firebase UID:', response.statusText);
      return null;
    }

    const data = await response.json();
    // Return the first user that matches the Firebase UID
    return data.value && data.value.length > 0 ? data.value[0] : null;
  } catch (error) {
    console.error('Failed to fetch user by Firebase UID:', error);
    return null;
  }
};

/**
 * Gets user data from Azure Static Web App's built-in database by email
 */
export const getUserByEmailFromAzureDB = async (email: string): Promise<UserData | null> => {
  try {
    // Use a query parameter to filter by email
    const response = await fetch(`/data-api/rest/users?$filter=email eq '${email}'`);
    
    if (!response.ok) {
      console.error('Error fetching user by email:', response.statusText);
      return null;
    }

    const data = await response.json();
    // Return the first user that matches the email
    return data.value && data.value.length > 0 ? data.value[0] : null;
  } catch (error) {
    console.error('Failed to fetch user by email:', error);
    return null;
  }
};

/**
 * Updates user data in Azure Static Web App's built-in database
 */
export const updateUserInAzureDB = async (userId: string, userData: Partial<UserData>): Promise<boolean> => {
  try {
    const response = await fetch(`/data-api/rest/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      console.error('Error updating user in Azure DB:', response.statusText);
      return false;
    }

    console.log('User updated in Azure DB successfully');
    return true;
  } catch (error) {
    console.error('Failed to update user in Azure DB:', error);
    return false;
  }
};

/**
 * Saves questionnaire answers for a user
 */
export const saveQuestionnaireToAzureDB = async (userId: string, questionnaireData: Record<string, any>): Promise<boolean> => {
  try {
    const user = await getUserFromAzureDB(userId);
    
    if (!user) {
      console.error('User not found in Azure DB');
      return false;
    }
    
    return await updateUserInAzureDB(userId, {
      questionnaire: questionnaireData
    });
  } catch (error) {
    console.error('Failed to save questionnaire to Azure DB:', error);
    return false;
  }
};
