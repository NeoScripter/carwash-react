import hero from '../assets/images/home/home-hero.webp';
import mobileHero from '../assets/images/home/hero-mobile.webp';
import whiteArrow from '../assets/images/home/white-arrow.svg';
import { useScreenResize } from '../hooks/useScreenResize';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { City, defaultCity } from '../types/city';
import CityPickerModal from '../components/home/cityPickerModal/CityPickerModal';
import HeroSection from '../components/home/hero/HeroSection';
import HeroDescription from '../components/home/hero/HeroDescription';
import HeroGradientOverlay from '../components/home/hero/HeroGradientOverlay';
import HeroNavigationBar from '../components/home/hero/HeroNavigationBar';

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

    const renderWhiteArrow = () => (
        <div className="hidden md:block md:pb-10">
            <img
                src={whiteArrow}
                alt="white arrow"
                className="hidden md:block md:mx-auto"
            />
        </div>
    );

    return (
        <>
            <section
                className="min-h-screen relative bg-cover bg-no-repeat bg-center section-padding"
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
                {renderWhiteArrow()}
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

            <section className='section-padding'>

            </section>
        </>
    );
}
