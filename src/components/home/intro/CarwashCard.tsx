import { MapPinIcon, StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { CarwashCardType } from '../../../types/carwashCard';
import { useState } from 'react';
import { PulseLoader } from 'react-spinners';

type CarwashCardProps = Omit<CarwashCardType, 'id'>;

export default function CarwashCard({
    imgPath,
    rating,
    name,
    address,
}: CarwashCardProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="rounded-(--card-radius) flex flex-col p-(--card-padding) [--card-padding:--spacing(3)] sm:[--card-padding:--spacing(4)] [--card-radius:var(--radius-4xl)] gap-2 md:gap-4 border border-gray-400 bg-gray-10/50 w-38 sm:w-48.5 md:w-75 shrink-0 text-xs sm:text-sm md:text-xl text-white text-center backdrop-blur-sm">
            <div className="overflow-clip relative aspect-square rounded-[calc(var(--card-radius)-var(--card-padding))]">
                <img
                    onLoad={() => setIsLoading(false)}
                    src={imgPath}
                    alt="Изображение автомойки"
                    className={clsx("object-center object-cover w-full h-full", isLoading && 'opacity-0')}
                />
                {isLoading && (
                    <div className="inset-0 absolute z-10 bg-gray-10/50 flex items-center justify-center">
                       <PulseLoader color='#111' />
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center">
                {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                        key={index}
                        className={clsx(
                            'w-4 sm:w-5 md:w-8',
                            index + 1 > rating ? 'text-black' : 'text-white'
                        )}
                    />
                ))}
            </div>
            <div>
                <p className="mb-1 uppercase min-h-[2.8em]">{name}</p>
                <p className="flex items-center justify-center gap-1 min-h-[2.5em]">
                    <MapPinIcon className="size-3 sm:size-4 md:size-6" />
                    {address && address.length > 15
                        ? `${address.slice(0, 15)}...`
                        : address}
                </p>
            </div>
        </div>
    );
}
