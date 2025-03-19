import { RootLayout } from './layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';

export const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },        
            { path: 'login', element: <Login /> },    
        ],
    },
];
