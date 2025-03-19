import { City } from '../../../types/city';
import CityListItem from './CityListItem';

export default function CityList({
    cities,
    searchTerm,
    select,
    currentCityId,
    isLoading,
    isError,
}: {
    cities: City[] | undefined;
    searchTerm: string;
    select: (city: City) => void;
    currentCityId: number;
    isLoading: boolean;
    isError: boolean;
}) {
    if (isLoading) return <li>Загружаем названия городов...</li>;
    if (isError) return <li>Произошла ошибка, попробуйте позже</li>;

    const filtered =
        cities?.filter((city) =>
            city.ru_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];

    if (!filtered.length) return <li>По вашему запросу ничего не найдено</li>;

    return (
        <>
            {filtered.map((city) => (
                <CityListItem
                    key={city.id}
                    city={city}
                    select={select}
                    isCurrent={currentCityId === city.id}
                />
            ))}
        </>
    );
}
