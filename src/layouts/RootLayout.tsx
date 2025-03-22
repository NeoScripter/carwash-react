import { Outlet, ScrollRestoration } from 'react-router';
import { CityProvider } from '../providers/CityProvider';
import { createPortal } from 'react-dom';
import CityPickerModal from '../components/home/cityPickerModal/CityPickerModal';
import FooterLink from '../components/shared/FooterLink';
import telegram from '../assets/images/shared/Telegram.webp';
import vk from '../assets/images/shared/VK.webp';
import footerPattern from '../assets/images/home/home-btm-md.webp';



export function RootLayout() {
    return (
        <CityProvider>
            <ScrollRestoration />
            <div className="mx-auto max-w-[1728px]">
                <Outlet />
            </div>

            <footer className='px-7 py-5 md:px-22 md:py-40 relative'>
                <nav className='mb-10'>
                    <ul className='flex flex-col items-center gap-5 md:gap-12 sm:flex-row sm:flex-wrap sm:justify-center text-xs sm:text-sm md:text-base'>
                        <li>
                            <FooterLink path='/'>Правила сервиса</FooterLink>
                        </li>
                        <li>
                            <FooterLink path='/'>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</FooterLink>
                        </li>
                        <li>
                            <FooterLink path='/'>О СЕРВИСЕ</FooterLink>
                        </li>
                    </ul>
                </nav>

                <span className='absolute hidden md:block inset-0 bottom-20 -z-10'>
                    <img src={footerPattern} alt="" className='w-full h-full' />
                </span>
                
                <nav className='mb-4 sm:mb-6 md:mb-10'>
                    <ul className='flex items-center justify-center gap-11'>
                        <li>
                            <a href="" className='size-8 block md:size-12'>
                                <img src={telegram} alt="telegram icon" />
                            </a>
                        </li>
                        <li>
                            <a href="" className='size-8 block md:size-12'>
                                <img src={vk} alt="vk icon" />
                            </a>
                        </li>
                    </ul>
                </nav>

                <p className='text-center text-sm sm:text-base'>© 2025 CHISTO.DRIVE</p>
            </footer>

            {createPortal(
                <CityPickerModal />,
                document.getElementById('modals')!
            )}
        </CityProvider>
    );
}
