import { Outlet, ScrollRestoration } from 'react-router';
import { CityProvider } from '../providers/CityProvider';
import { createPortal } from 'react-dom';
import CityPickerModal from '../components/home/cityPickerModal/CityPickerModal';

export function RootLayout() {
    return (
        <CityProvider>
            <ScrollRestoration />
            <div className="mx-auto max-w-[1728px]">
                <Outlet />
            </div>

            {createPortal(
                <CityPickerModal />,
                document.getElementById('modals')!
            )}
        </CityProvider>
    );
}
