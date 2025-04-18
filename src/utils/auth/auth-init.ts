
import { checkRedirectResult } from "./auth-providers";

// Initialize authentication on app start
export const initAuth = async () => {
  try {
    console.log("Initializing auth and checking for redirect result...");
    await checkRedirectResult();
    console.log("Auth initialization complete");
  } catch (error) {
    console.error("Error initializing auth:", error);
  }
};

// Call the function to check for redirect results
initAuth().catch(console.error);
