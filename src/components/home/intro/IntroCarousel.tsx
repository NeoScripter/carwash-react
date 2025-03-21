import { useState } from 'react';
import CarwashCard from './CarwashCard';
/* import { carwashData } from '../../../data/carwashData'; */
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useCarwashes } from '../../../hooks/useCarwashes';
import { useCityContext } from '../../../hooks/useCityContext';

type FetchedCarwash = {
    id: number;
    name: string;
    location: string;
    url: string;
}

const CARDWIDTHS = {
    SMALL: 152 + 8,
    MEDIUM: 194 + 16,
    LARGE: 300 + 32,
};

const getOffset = () => {
    if (screen.width < 768) {
        return CARDWIDTHS.SMALL;
    } else if (screen.width < 1440) {
        return CARDWIDTHS.MEDIUM;
    } else {
        return CARDWIDTHS.LARGE;
    }
};

const getEdgeSlide = (totalSlides: number) => {
    const offset = getOffset();

    const maxSlidesOnPage = Math.ceil(screen.width / offset);

    return totalSlides - maxSlidesOnPage;
};

export default function IntroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(true);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const { currentCity } = useCityContext();
    const {
        data: carwashes,
        isLoading,
        isError,
    } = useCarwashes(currentCity.name);

    if (isLoading) return <div>Загружаем данные по автомойкам</div>;
    if (isError || !carwashes) return <div>Произошла ошибка, попробуйте позже</div>;

    const totalSlides = carwashes?.length || 0;
    const swipeThreshold = 50;

    function increment() {
        setCurrentSlide((prev) => {
            const isNotLast = prev < getEdgeSlide(totalSlides);

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
        setCurrentSlide((prev) => {
            const isNotFirst = prev > 0;

            if (isNotFirst) {
                setShouldAnimate(true);
                return prev - 1;
            } else {
                setShouldAnimate(false);
                return getEdgeSlide(totalSlides);
            }
        });
    }

    function handleTouchStart(e: React.TouchEvent) {
        setTouchStartX(e.touches[0].clientX);
    }

    function handleTouchEnd(e: React.TouchEvent) {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;

        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                increment();
            } else {
                decrement();
            }
        }

        setTouchStartX(null);
    }

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="overflow-x-clip -mx-10 md:-mx-28 relative"
        >
            <div
                className={clsx(
                    'flex items-center gap-2 sm:gap-4 md:gap-8',
                    shouldAnimate &&
                        'transition-transform duration-500 ease-in-out'
                )}
                style={{
                    transform: `translateX(-${getOffset() * currentSlide}px)`,
                }}
            >
                {carwashes.map((carwash: FetchedCarwash) => (
                    <CarwashCard
                        key={carwash.id}
                        imgPath={carwash.url}
                        rating={4}
                        name={carwash.name}
                        address={carwash.location}
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
        <button
            onClick={onClick}
            className="pointer-events-auto sm:text-xl md:text-3xl cursor-pointer size-9 sm:size-15 md:size-29 aspect-square rounded-full bg-gray-10 p-1 sm:p-2 md:p-4 shadow-carousel-btn"
        >
            {children}
        </button>
    );
}
