import { RootLayout } from './layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';

export const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },        // Route: /
            { path: 'posts', element: <Login /> },     // Route: /posts
        ],
    },
];
