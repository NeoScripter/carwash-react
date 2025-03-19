import { Link } from 'react-router';
import {
    GlobeEuropeAfricaIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import hero from '../assets/images/home/home-hero.webp';
import mobileHero from '../assets/images/home/hero-mobile.webp';
import logo from '../assets/images/home/logo.webp';
import blackArrow from '../assets/images/home/black-arrow.svg';
import whiteArrow from '../assets/images/home/white-arrow.svg';
import clsx from 'clsx';
import { useScreenResize } from '../hooks/useScreenResize';
import { useCities } from '../hooks/useCities';
import { createPortal } from 'react-dom';
import { Input, Transition } from '@headlessui/react';
import { useState } from 'react';
import { City, defaultCity } from '../types/city';

export default function Home() {
    const [showCityList, setShowCityList] = useState(false);
    const [currentCity, setCurrentCity] = useState<City>(defaultCity);
    const isLarge = useScreenResize();

    const bgImage = isLarge ? hero : mobileHero;

    function openCityList() {
        setShowCityList(true);
    }

    function closeCityList() {
        setShowCityList(false);
    }

    function selectCity(city: City) {
        setCurrentCity(city);
    }

    return (
        <>
            <div
                className="min-h-screen relative bg-cover bg-no-repeat bg-center px-10 md:px-28"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <HomePageOverlay />

                <div className="relative z-20 mb-63 sm:mb-0 sm:pb-40 md:pb-10">
                    <HomePageHeader open={openCityList} currentCity={currentCity.ru_name}  />

                    <HeroLayout />
                </div>

                <HeroTextSection className="sm:hidden text-black-20" />

                <div className="hidden md:block md:pb-10">
                    <img
                        src={whiteArrow}
                        alt="white arrow"
                        className="hidden md:block md:mx-auto"
                    />
                </div>
            </div>

            {createPortal(
                <SelectCityModal show={showCityList} close={closeCityList} select={selectCity} />,
                document.getElementById('modals')!
            )}
        </>
    );
}

type SelectCityModalProps = {
    show: boolean;
    close: () => void;
    select: (city: City) => void;
};

function SelectCityModal({ show, close, select }: SelectCityModalProps) {
    const { data: cities, isLoading, isError } = useCities();

   /*  if (isLoading) return <p className="text-white">Loading cities...</p>;
    if (isError) return <p className="text-white">Failed to fetch cities.</p>; */

    return (
        <Transition show={show}>
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 transition duration-300 ease-in data-[closed]:opacity-0'
            style={{ backdropFilter: 'blur(10px)' }}
        >
            <div className="bg-white max-w-127 w-full rounded-2xl p-4 text-black-20 h-149 overflow-y-clip">
                <header className="flex items-start mb-3">
                    <p className="text-xl font-bold text-center ml-auto">
                        Выберите город
                    </p>
                    <button onClick={close} className="ml-auto cursor-pointer text-xl relative">
                        &times;
                        <span className="absolute inset-0 size-8 -translate-x-1/2"></span>
                    </button>
                </header>

                <div className="relative focus-within:border-double focus-within:border-3 hover:shadow-xl w-full border border-black-20 py-2 px-4 rounded-md flex items-center justify-between shadow-sm gap-2 mb-3">
                    <Input
                        type="search"
                        placeholder="Ваш город"
                        className="-mb-1 flex-1 shadow-none outline-none"
                    />
                    <MagnifyingGlassIcon className="size-6" />
                </div>

                <ul className="px-5 space-y-4">
                    {cities?.map(
                        (city: {
                            id: number;
                            name: string;
                            ru_name: string;
                        }) => (
                            <li key={city.id} onClick={() => select(city)}>{city.ru_name}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
        </Transition>
    );
}

function HomePageOverlay() {
    return (
        <div
            className="absolute inset-0 z-10"
            style={{
                backgroundImage:
                    'linear-gradient(180deg, rgba(11,11,11) 0%, rgba(11,11,11,0.2) 30%, rgba(255,255,255,0.1) 100%)',
            }}
        ></div>
    );
}

type HomePageHeaderProps = {
    open: () => void;
    currentCity: string;
};

function HomePageHeader({ open, currentCity }: HomePageHeaderProps) {
    return (
        <header className="py-12 md:pt-30 md:pb-12 text-gray-50">
            <nav>
                <ul className="flex items-center justify-around sm:justify-between">
                    <li className="btn-primary bg-gray-30 border-gray-20 cursor-pointer">
                        <GlobeEuropeAfricaIcon className="size-4.5 shrink-0" />
                        <button
                            onClick={open}
                            className="uppercase cursor-pointer -mb-1"
                        >
                            {currentCity}
                        </button>
                    </li>
                    <li className="btn-primary bg-yellow-50 border-yellow-20 absolute -bottom-15 sm:static cursor-pointer">
                        <Link to="/" className="uppercase cursor-pointer -mb-1">
                            Мойка рядом
                        </Link>
                        <MagnifyingGlassIcon className="size-4.5 shrink-0" />
                    </li>
                    <li className="btn-primary bg-gray-30 border-gray-20 cursor-pointer">
                        <Link
                            to="/login"
                            className="uppercase cursor-pointer -mb-1"
                        >
                            Войти
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

type HeroTextSectionProps = {
    className?: string;
};

function HeroTextSection({ className }: HeroTextSectionProps) {
    return (
        <div
            className={clsx(
                'mx-10 text-balance pb-10 text-xl flex items-center',
                className
            )}
        >
            <p>
                CHISTO.DRIVE - это инновационный сервис, чтобы сделать процесс
                поиска и записи на автомойку максимально простым, быстрым и
                удобным.
            </p>
            <div className="shrink-0 sm:flex sm:justify-center sm:mt-10">
                <img src={blackArrow} alt="black arrow" className="sm:hidden" />
                <img
                    src={whiteArrow}
                    alt="white arrow"
                    className="hidden sm:block sm:object-bottom sm:h-20 object-cover sm:ml-20"
                />
            </div>
        </div>
    );
}

function HeroLayout() {
    return (
        <div className="sm:flex sm:items-center sm:gap-10 md:relative md:-mx-28 overflow-x-clip md:text-2xl">
            <HomePageCircle className="hidden md:flex md:absolute md:h-full md:-left-1/2 md:translate-x-[47%] md:w-auto md:p-10">
                <p className="w-75 ml-auto">
                    CHISTO.DRIVE - это инновационный сервис, чтобы сделать
                    процесс поиска и записи на автомойку максимально простым,
                    быстрым и удобным.
                </p>
            </HomePageCircle>

            <HomePageCircle className="flex md:max-w-1/2">
                <img
                    src={logo}
                    alt="Chisto.drive"
                    className="object-center object-contain w-4/5 mx-auto"
                />
            </HomePageCircle>

            <HomePageCircle className="hidden md:flex md:absolute md:h-full md:-right-1/2 md:-translate-x-[47%] md:w-auto md:p-10 text-end">
                <p className="w-75 mr-auto">
                    Проект объединяет тысячи автомоек по всей России, позволяя
                    пользователям находить ближайшие точки обслуживания,
                    сравнивать цены, читать отзывы и записываться на услуги в
                    пару кликов.
                </p>
            </HomePageCircle>

            <HeroTextSection className="hidden sm:block text-white sm:flex-1 sm:text-end md:hidden" />
        </div>
    );
}

type HomePageCircleProps = {
    children: React.ReactNode;
    className?: string;
};

function HomePageCircle({ children, className }: HomePageCircleProps) {
    return (
        <div
            className={clsx(
                'items-center justify-center w-4/5 mx-auto bg-gray-10 rounded-full aspect-square z-20 shadow-logo sm:flex-1',
                className
            )}
        >
            {children}
        </div>
    );
}
