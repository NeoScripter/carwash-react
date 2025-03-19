import HeroBrandLogo from './HeroBrandLogo';
import HeroDescription from './HeroDescription';
import HeroFeaturesText from './HeroFeaturesText';
import HeroIntroText from './HeroIntroText';

export default function HeroSection() {
    return (
        <div className="sm:flex sm:items-center sm:gap-10 md:relative md:-mx-28 overflow-x-clip md:text-2xl">
            <HeroIntroText />
            <HeroBrandLogo />
            <HeroFeaturesText />
            <HeroDescription className="hidden sm:block text-white sm:flex-1 sm:text-end md:hidden" />
        </div>
    );
}
