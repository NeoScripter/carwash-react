import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/fonts/fonts.css';
import './assets/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './router.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={createBrowserRouter(routes)} />
        </QueryClientProvider>
    </StrictMode>
);
