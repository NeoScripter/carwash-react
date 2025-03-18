import { Outlet, ScrollRestoration } from 'react-router';

export function RootLayout() {
    return (
        <>
            <ScrollRestoration />
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}
