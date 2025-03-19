import { Link } from 'react-router';
import {
    GlobeEuropeAfricaIcon,
    MagnifyingGlassIcon,
    CheckCircleIcon,
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
                    <HomePageHeader
                        open={openCityList}
                        currentCity={currentCity.ru_name}
                    />

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
                <SelectCityModal
                    show={showCityList}
                    close={closeCityList}
                    select={selectCity}
                    currentCityId={currentCity.id}
                />,
                document.getElementById('modals')!
            )}
        </>
    );
}

type SelectCityModalProps = {
    show: boolean;
    close: () => void;
    select: (city: City) => void;
    currentCityId: number;
};

function SelectCityModal({
    show,
    close,
    select,
    currentCityId,
}: SelectCityModalProps) {
    const { data: cities, isLoading, isError } = useCities();

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredCities =
        cities?.filter((city: City) =>
            city.ru_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];

    const renderCities = () => {
        if (isLoading) return <li>Загружаем названия городов...</li>;
        if (isError) return <li>Произошла ошибка, попробуйте позже</li>;
        if (!filteredCities.length)
            return <li>По вашему запросу ничего не найдено</li>;

        return filteredCities.map((city: City) => (
            <CityListItem
                key={city.id}
                city={city}
                select={select}
                isCurrent={currentCityId === city.id}
            />
        ));
    };

    return (
        <Transition show={show}>
            <div
                onClick={close}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 transition duration-300 ease-in data-[closed]:opacity-0"
                style={{ backdropFilter: 'blur(10px)' }}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white max-w-127 w-full rounded-2xl p-4 text-black-20 h-149 overflow-y-auto"
                >
                    <header className="flex items-start mb-3">
                        <p className="text-xl font-bold text-center ml-auto">
                            Выберите город
                        </p>
                        <button
                            onClick={close}
                            className="ml-auto cursor-pointer text-xl relative"
                        >
                            &times;
                            <span className="absolute inset-0 size-8 -translate-x-1/2"></span>
                        </button>
                    </header>

                    <div className="relative focus-within:border-double focus-within:border-3 hover:shadow-xl w-full border border-black-20 py-2 px-4 rounded-md flex items-center justify-between shadow-sm gap-2 mb-6">
                        <Input
                            type="search"
                            placeholder="Ваш город"
                            className="-mb-1 flex-1 shadow-none outline-none"
                            value={searchTerm}
                            onChange={handleInputChange}
                            autoFocus
                        />
                        <MagnifyingGlassIcon className="size-6" />
                    </div>

                    <ul className="px-5">{renderCities()}</ul>
                </div>
            </div>
        </Transition>
    );
}

type CityListItemProps = {
    city: City;
    isCurrent?: boolean;
    select: (city: City) => void;
};

function CityListItem({ city, isCurrent = false, select }: CityListItemProps) {
    return (
        <li
            onClick={() => select(city)}
            className={clsx(
                'flex items-center justify-between cursor-pointer py-2 hover:underline',
                isCurrent && 'text-xl font-bold'
            )}
        >
            {city.ru_name}
            {isCurrent && <CheckCircleIcon className="shrink-0 size-8" />}
        </li>
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
                <div className="flex items-center justify-around sm:justify-between">
                    <button
                        onClick={open}
                        className="btn-primary bg-gray-30 border-gray-20"
                    >
                        <GlobeEuropeAfricaIcon className="size-4.5 shrink-0" />

                        {currentCity}
                    </button>
                    <Link
                        to="/"
                        className="btn-primary bg-yellow-50 border-yellow-20 absolute -bottom-15 sm:static"
                    >
                        Мойка рядом
                        <MagnifyingGlassIcon className="size-4.5 shrink-0" />
                    </Link>
                    <Link
                        to="/login"
                        className="btn-primary bg-gray-30 border-gray-20"
                    >
                        Войти
                    </Link>
                </div>
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
                'items-center text-black-20 justify-center w-4/5 mx-auto bg-gray-10 rounded-full aspect-square z-20 shadow-logo sm:flex-1',
                className
            )}
        >
            {children}
        </div>
    );
}
