import { useReducer } from 'react';
import CarwashCard from './CarwashCard';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { useCarwashes } from '../../../hooks/useCarwashes';
import { useCityContext } from '../../../hooks/useCityContext';

export type FetchedCarwash = {
    id: number;
    name: string;
    location: string;
    url: string;
};

const CARDWIDTHS = {
    SMALL: 152 + 8,
    MEDIUM: 194 + 16,
    LARGE: 300 + 32,
};

const getOffset = () => {
    if (screen.width < 768) return CARDWIDTHS.SMALL;
    if (screen.width < 1440) return CARDWIDTHS.MEDIUM;
    return CARDWIDTHS.LARGE;
};

const getEdgeSlide = (totalSlides: number) => {
    const offset = getOffset();
    const maxSlidesOnPage = Math.floor(screen.width / offset);
    return totalSlides - maxSlidesOnPage;
};

type CarouselState = {
    currentSlide: number;
    touchStartX: number | null;
};

type Action =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }
    | { type: 'TOUCH_START'; payload: number }
    | { type: 'TOUCH_END'; payload: number }
    | { type: 'RESET_TOUCH' };

const reducer = (state: CarouselState, action: Action): CarouselState => {
    switch (action.type) {
        case 'INCREMENT': {
            const edge = getEdgeSlide(action.payload);
            return {
                ...state,
                currentSlide:
                    state.currentSlide < edge ? state.currentSlide + 1 : 0,
            };
        }
        case 'DECREMENT': {
            const edge = getEdgeSlide(action.payload);
            return {
                ...state,
                currentSlide:
                    state.currentSlide > 0 ? state.currentSlide - 1 : edge,
            };
        }
        case 'TOUCH_START':
            return { ...state, touchStartX: action.payload };
        case 'TOUCH_END': {
            const swipeThreshold = 50;
            const diffX = (state.touchStartX ?? 0) - action.payload;
            const edge = getEdgeSlide(action.payload);

            if (Math.abs(diffX) > swipeThreshold) {
                return diffX > 0
                    ? {
                          ...state,
                          currentSlide:
                              state.currentSlide < edge
                                  ? state.currentSlide + 1
                                  : 0,
                          touchStartX: null,
                      }
                    : {
                          ...state,
                          currentSlide:
                              state.currentSlide > 0
                                  ? state.currentSlide - 1
                                  : edge,
                          touchStartX: null,
                      };
            }

            return { ...state, touchStartX: null };
        }
        case 'RESET_TOUCH':
            return { ...state, touchStartX: null };
        default:
            return state;
    }
};

export default function IntroCarousel() {
    const { currentCity } = useCityContext();
    const {
        data: carwashes,
        isLoading,
        isError,
    } = useCarwashes(currentCity.name);

    const [state, dispatch] = useReducer(reducer, {
        currentSlide: 4,
        touchStartX: null,
    });

    if (isLoading) return <div>Загружаем данные по автомойкам...</div>;
    if (isError || !carwashes)
        return <div>Произошла ошибка, попробуйте позже</div>;

    const totalSlides = carwashes.length;

    return (
        <div
            onTouchStart={(e) =>
                dispatch({ type: 'TOUCH_START', payload: e.touches[0].clientX })
            }
            onTouchEnd={(e) =>
                dispatch({
                    type: 'TOUCH_END',
                    payload: e.changedTouches[0].clientX,
                })
            }
            className="overflow-x-clip -mx-10 md:-mx-28 relative"
        >
            <div
                className="flex items-center gap-2 sm:gap-4 md:gap-8 transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${
                        getOffset() * state.currentSlide
                    }px)`,
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
                <SliderBtn
                    onClick={() =>
                        dispatch({ type: 'DECREMENT', payload: totalSlides })
                    }
                >
                    <ArrowDownIcon className="rotate-90" />
                </SliderBtn>
                <SliderBtn
                    onClick={() =>
                        dispatch({ type: 'INCREMENT', payload: totalSlides })
                    }
                >
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
            className="pointer-events-auto sm:text-xl md:text-3xl cursor-pointer size-9 sm:size-15 md:size-29 aspect-square rounded-full bg-gray-10 p-1 sm:p-2 md:p-4 shadow-carousel-btn backdrop-blur-sm"
        >
            {children}
        </button>
    );
}
