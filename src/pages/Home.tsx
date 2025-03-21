import hero from '../assets/images/home/home-hero.webp';
import mobileHero from '../assets/images/home/hero-mobile.webp';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { useScreenResize } from '../hooks/useScreenResize';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { City, defaultCity } from '../types/city';
import CityPickerModal from '../components/home/cityPickerModal/CityPickerModal';
import HeroSection from '../components/home/hero/HeroSection';
import HeroDescription from '../components/home/hero/HeroDescription';
import HeroGradientOverlay from '../components/home/hero/HeroGradientOverlay';
import HeroNavigationBar from '../components/home/hero/HeroNavigationBar';
import mobileBg from '../assets/images/home/home-bg-mobile.webp';
import desktopBg from '../assets/images/home/home-bg-md.webp';

import { stepCards } from '../data/stepCards';
import whispering from '../assets/images/home/whispering.webp';
import FindCarwashBtn from '../components/shared/FindCarwashBtn';
import clsx from 'clsx';
import HeroBtmWhiteArrow from '../components/home/hero/HeroBtmWhiteArrow';
import IntroCarousel from '../components/home/intro/IntroCarousel';

export default function Home() {
    const [showCityList, setShowCityList] = useState(false);
    const [currentCity, setCurrentCity] = useState<City>(defaultCity);
    const isHeroLarge = useScreenResize(1200);

    const bgImage = isHeroLarge ? hero : mobileHero;

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
            <section
                className="min-h-screen relative bg-cover bg-no-repeat bg-center section-padding mb-13 mm:pb-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <HeroGradientOverlay />
                <div className="relative z-20 mb-63 sm:mb-0 sm:pb-40 md:pb-10">
                    <HeroNavigationBar
                        onCitySelect={openCityList}
                        currentCity={currentCity.ru_name}
                    />
                    <HeroSection />
                </div>
                <HeroDescription className="sm:hidden text-black" />
                <HeroBtmWhiteArrow />
            </section>
            {createPortal(
                <CityPickerModal
                    show={showCityList}
                    close={closeCityList}
                    select={selectCity}
                    currentCityId={currentCity.id}
                />,
                document.getElementById('modals')!
            )}

            <section className="section-padding md:relative">
                <div className="py-7 text-balance text-end sm:text-center md:hidden sm:text-lg">
                    Проект объединяет тысячи автомоек по всей России, позволяя
                    пользователям находить ближайшие точки обслуживания,
                    сравнивать цены, читать отзывы и записываться на услуги в
                    пару кликов.
                </div>

                <div
                    className="h-[40vw] flex items-center justify-center bg-cover bg-no-repeat bg-center -mx-10 sm:bg-none! sm:h-auto sm:mx-0 md:mb-50"
                    style={{ backgroundImage: `url(${mobileBg})` }}
                >
                    <p className="text-center mt-8 text-3xl md:text-6xl sm:text-4xl text-black uppercase sm:text-white sm:w-72 sm:ml-90 md:w-auto md:mr-auto md:ml-0">
                        Как это работает?
                    </p>
                </div>

                <div className="relative overflow-visible md:static">
                    <div className="grid mx-auto my-8 sm:mb-22 gap-8 sm:gap-16 sm:grid-cols-2 md:grid-cols-4 justify-center sm:w-max md:w-full relative">
                        {stepCards.map((card, index) => (
                            <StepCard
                                key={card.id}
                                order={index + 1}
                                text={card.text}
                                shift={index === 3}
                            />
                        ))}
                        <ArrowDownIcon className="absolute text-white size-8 rotate-270 left-1/2 -translate-x-1/2 top-20 hidden sm:block md:hidden" />
                        <ArrowDownIcon className="absolute text-white size-8 rotate-90 left-1/2 -translate-x-1/2 top-78 hidden sm:block md:hidden" />
                        <ArrowDownIcon className="absolute text-white size-8 left-3/4 top-1/2 hidden sm:block md:hidden" />
                    </div>
                    <span className="absolute hidden sm:block -inset-40 -z-10 md:inset-0">
                        <img
                            src={desktopBg}
                            alt="ярко оранжевый узор"
                            aria-hidden="true"
                            className="w-full h-full object-cover object-center"
                        />
                    </span>
                </div>

                <div className="-mx-10 p-5 bg-[linear-gradient(180deg,_#F8BC01_0%,_#F00_100%)] relative sm:bg-none sm:mx-auto sm:w-4/5 mb-8.5 sm:mb-12 md:mb-15">
                    <div className="flex items-center justify-center gap-5 sm:gap-9 w-75 sm:w-auto mx-auto sm:text-2xl md:text-5xl sm:mb-12 md:mb-15">
                        <div className="w-14 sm:w-20 md:w-25 shrink-0">
                            <img src={whispering} alt="Шепот" />
                        </div>
                        <p>
                            CHISTO.DRIVE - это не просто сервис, это новый
                            стандарт ухода за автомобилем!
                        </p>
                    </div>

                    <FindCarwashBtn className="text-black absolute left-1/2 top-110 -translate-x-1/2 w-80! justify-between sm:static sm:ml-auto sm:translate-x-0 sm:text-2xl md:mr-auto" />
                </div>

                <IntroCarousel />
            </section>
        </>
    );
}

type StepCardProps = {
    order: number;
    text: string;
    shift?: boolean;
};

function StepCard({ order, text, shift }: StepCardProps) {
    return (
        <div
            className={clsx(
                'w-76.5 px-2 py-4 mx-auto rounded-4xl flex flex-col items-center justify-center bg-gray-10 text-center text-white shadow-step-card text-balance',
                shift && 'sm:row-start-2 md:row-start-auto'
            )}
        >
            <p className="mb-1 font-bold">Шаг {order}</p>
            <p>{text}</p>
        </div>
    );
}
