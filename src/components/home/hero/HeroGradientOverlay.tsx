import heroPattern from '../../../assets/images/home/hero-pattern.webp';

export default function HeroGradientOverlay() {
    return (
        <>
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,_rgba(11,11,11,1)_0%,_rgba(11,11,11,0.2)_30%,_rgba(255,255,255,0.1)_100%)] md:bg-none md:left-[76%] md:bg-black/80" />
            <span className='absolute hidden md:block inset-0 z-10 h-13' style={{backgroundImage: `url(${heroPattern})`}} />
            <span className='absolute left-0 right-0 top-full sm:bottom-0 sm:top-auto z-10 h-13' style={{backgroundImage: `url(${heroPattern})`}} />

        </>
    );
}
