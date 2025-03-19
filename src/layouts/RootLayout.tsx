import { Outlet, ScrollRestoration } from 'react-router';

export function RootLayout() {
    return (
        <>
            <ScrollRestoration />
            <div className='mx-auto max-w-[1728px]'>
                <Outlet />
            </div>
        </>
    );
}
