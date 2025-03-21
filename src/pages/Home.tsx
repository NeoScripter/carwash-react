import hero from '../assets/images/home/home-hero.webp';
import mobileHero from '../assets/images/home/hero-mobile.webp';
import { useScreenResize } from '../hooks/useScreenResize';
import HeroSection from '../components/home/hero/HeroSection';
import HeroDescription from '../components/home/hero/HeroDescription';
import HeroGradientOverlay from '../components/home/hero/HeroGradientOverlay';
import HeroNavigationBar from '../components/home/hero/HeroNavigationBar';
import FindCarwashBtn from '../components/shared/FindCarwashBtn';
import HeroBtmWhiteArrow from '../components/home/hero/HeroBtmWhiteArrow';
import IntroCarousel from '../components/home/intro/IntroCarousel';
import IntroHeader from '../components/home/intro/IntroHeader';
import IntroSteps from '../components/home/intro/IntroSteps';
import IntroMotto from '../components/home/intro/IntroMotto';

export default function Home() {
    const isHeroLarge = useScreenResize(1200);

    const bgImage = isHeroLarge ? hero : mobileHero;

    return (
        <>
            <section
                className="min-h-screen relative bg-cover bg-no-repeat bg-center section-padding mb-13 mm:pb-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <HeroGradientOverlay />
                <div className="relative z-20 mb-63 sm:mb-0 sm:pb-40 md:pb-10">
                    <HeroNavigationBar />
                    <HeroSection />
                </div>
                <HeroDescription className="sm:hidden text-black" />
                <HeroBtmWhiteArrow />
            </section>

            <section className="section-padding md:relative mb-5">
                <IntroHeader />

                <IntroSteps />

                <div className="-mx-10 p-5 bg-[linear-gradient(180deg,_#F8BC01_0%,_#F00_100%)] relative sm:bg-none sm:mx-auto sm:w-4/5 mb-8.5 sm:mb-12 md:mb-15">
                    <IntroMotto />

                    <FindCarwashBtn className="text-black absolute left-1/2 top-110 -translate-x-1/2 w-80! justify-between sm:static sm:ml-auto sm:translate-x-0 sm:text-2xl md:mr-auto" />
                </div>

                <IntroCarousel />
            </section>
        </>
    );
}
