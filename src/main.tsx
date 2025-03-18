import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/fonts/fonts.css';
import './assets/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './router.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={createBrowserRouter(routes)} />
    </StrictMode>
);
