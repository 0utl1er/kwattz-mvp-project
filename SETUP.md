
# Project Setup Instructions

## Fixing Package.json

The package.json file has a syntax error (missing comma between dependencies). To fix it:

1. Run the provided script:
   ```bash
   bash fix-package-json.sh
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Environment Variables

For Firebase authentication to work properly, you need to set up the following environment variables:

1. Create a `.env` file in the project root with:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

## Building the Project

Once dependencies and environment variables are set up:

```bash
npm run build
```

## Deploy to Azure

- The GitHub workflow is configured for deploying to Azure Static Web Apps.
- Make sure to set up the necessary secrets in your GitHub repository settings.
