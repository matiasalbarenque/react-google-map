import { APIProvider } from '@vis.gl/react-google-maps';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

import './index.css';
import { ENV } from '@/constants';

import { router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey={ENV.GOOGLE_MAPS_API_KEY ?? ''}>
      <RouterProvider router={router} />
    </APIProvider>
  </StrictMode>,
);
