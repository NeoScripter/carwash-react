import { useState } from 'react';
import CarwashCard from './CarwashCard';
import { carwashData } from '../../../data/carwashData';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const CARDWIDTHS = {
    SMALL: 152 + 8,
    MEDIUM: 194 + 16,
    LARGE: 300 + 32,
}

const getOffset = () => {
    if (screen.width < 768) {
        return CARDWIDTHS.SMALL;
    } else if (screen.width < 1440) {
        return CARDWIDTHS.MEDIUM;
    } else {
        return CARDWIDTHS.LARGE;
    }
}

export default function IntroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    const totalSlides = carwashData.length;

    function increment() {
        setCurrentSlide(prev => {
            const isNotLast = (prev < totalSlides);
            
            if (isNotLast) {
                setShouldAnimate(true);
                return prev + 1;
            } else {
                setShouldAnimate(false);
                return 0;
            }
        });
    }

    function decrement() {
        setCurrentSlide(prev => {
            const isNotFirst = (prev > 0);
            
            if (isNotFirst) {
                setShouldAnimate(true);
                return prev - 1;
            } else {
                setShouldAnimate(false);
                return totalSlides - 1;
            }
        });
    }

    return (
        <div className="overflow-x-clip -mx-10 md:-mx-28 relative">
            <div className={clsx("flex items-center gap-2 sm:gap-4 md:gap-8", shouldAnimate && "transition-transform duration-500 ease-in-out")} style={{ transform: `translateX(-${getOffset() * currentSlide}px)` }}>
                {carwashData.map((carwash) => (
                    <CarwashCard
                        key={carwash.id}
                        imgPath={carwash.imgPath}
                        rating={carwash.rating}
                        name={carwash.name}
                        address={carwash.address}
                    />
                ))}
            </div>

            <div className="absolute flex items-center justify-between left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none px-3 sm:px-10 md:px-30">
                <SliderBtn onClick={decrement}>
                    <ArrowDownIcon className="rotate-90" />
                </SliderBtn>
                <SliderBtn onClick={increment}>
                    <ArrowDownIcon className="rotate-270" />
                </SliderBtn>
            </div>
        </div>
    );
}

type SliderBtnProps = {
    children: React.ReactNode;
    onClick: () => void;
};

function SliderBtn({ children, onClick }: SliderBtnProps) {
    return (
        <button onClick={onClick} className="pointer-events-auto sm:text-xl md:text-3xl cursor-pointer size-9 sm:size-15 md:size-29 aspect-square rounded-full bg-gray-10 p-1 sm:p-2 md:p-4 shadow-carousel-btn">
            {children}
        </button>
    );
}
