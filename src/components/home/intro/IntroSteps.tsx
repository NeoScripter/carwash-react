import StepCard from './StepCard';
import { stepCards } from '../../../data/stepCards';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import desktopBg from '../../../assets/images/home/home-bg-md.webp';

const StepArrows = () => (
    <>
        <ArrowDownIcon className="absolute text-white size-8 rotate-270 left-1/2 -translate-x-1/2 top-20 hidden sm:block md:hidden" />
        <ArrowDownIcon className="absolute text-white size-8 rotate-90 left-1/2 -translate-x-1/2 top-78 hidden sm:block md:hidden" />
        <ArrowDownIcon className="absolute text-white size-8 left-3/4 top-1/2 hidden sm:block md:hidden" />
    </>
);

const BgPattern = () => (
    <span className="absolute hidden sm:block -inset-40 -z-10 md:inset-0">
        <img
            src={desktopBg}
            alt="ярко оранжевый узор"
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
        />
    </span>
);

export default function IntroSteps() {
    return (
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
                <StepArrows />
            </div>
            <BgPattern />
        </div>
    );
}
