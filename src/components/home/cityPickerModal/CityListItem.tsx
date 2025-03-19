import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { City } from '../../../types/city';
import clsx from 'clsx';

type CityListItemProps = {
    city: City;
    isCurrent?: boolean;
    select: (city: City) => void;
};

export default function CityListItem({ city, isCurrent = false, select }: CityListItemProps) {
    return (
        <li
            onClick={() => select(city)}
            className={clsx(
                'flex items-center justify-between cursor-pointer py-2 hover:underline',
                isCurrent && 'text-xl font-bold'
            )}
        >
            {city.ru_name}
            {isCurrent && <CheckCircleIcon className="shrink-0 size-8" />}
        </li>
    );
} 