
#!/bin/bash

# This script fixes the missing comma in package.json
# Run this script with: bash fix-package-json.sh

# Check if package.json exists
if [ ! -f package.json ]; then
  echo "Error: package.json not found"
  exit 1
fi

# Create a backup
cp package.json package.json.bak

# Fix the missing comma around line 49
sed -i 's/"date-fns": "\^3.6.0"/"date-fns": "\^3.6.0",/g' package.json

echo "package.json has been fixed. A backup was saved as package.json.bak"
echo "Please check the file to ensure it's valid JSON, then run 'npm install'"
