
import React, { lazy } from 'react';

// Use named imports to avoid confusion
export const Settings = lazy(() => import('../components/Settings'));
export const Chat = lazy(() => import('../components/Chat'));
// Note: We're not exporting Dashboard from here anymore since it's a direct import
