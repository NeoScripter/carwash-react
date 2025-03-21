import { MapPinIcon, StarIcon } from '@heroicons/react/24/solid';
import type { CarwashCardType } from '../../../types/carwashCard';
import clsx from 'clsx';

type CarwashCardProps = Omit<CarwashCardType, 'id'>;

export default function CarwashCard({
    imgPath,
    rating,
    name,
    address,
}: CarwashCardProps) {
    return (
        <div className="rounded-(--card-radius) flex flex-col p-(--card-padding) [--card-padding:--spacing(3)] sm:[--card-padding:--spacing(4)] [--card-radius:var(--radius-4xl)] gap-2 md:gap-4 border border-gray-400 bg-gray-10/50 w-38 sm:w-48.5 md:w-75 shrink-0 text-xs sm:text-sm md:text-xl text-white text-center">
            <div className="overflow-clip aspect-square rounded-[calc(var(--card-radius)-var(--card-padding))]">
                <img
                    src={imgPath}
                    alt="Изображение автомойки"
                    className="object-center object-cover w-full h-full"
                />
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
                    {address && address.length > 20 ? `${address.slice(0, 20)}...` : address}
                </p>
            </div>
        </div>
    );
}
