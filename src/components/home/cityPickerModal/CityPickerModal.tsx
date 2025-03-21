import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { useCities } from '../../../hooks/useCities';
import Header from './Header';
import SearchInput from './SearchInput';
import CityList from './CityList';
import { useCityContext } from '../../../hooks/useCityContext';

export default function CityPickerModal() {
    const { data: cities, isLoading, isError } = useCities();
    const [searchTerm, setSearchTerm] = useState('');
    const { currentCity, showCityList, selectCity, closeCityList } = useCityContext();

    return (
        <Transition show={showCityList}>
            <div
                onClick={closeCityList}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 transition duration-300 ease-in data-[closed]:opacity-0 backdrop-blur-sm"
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white max-w-127 w-full rounded-2xl p-4 text-black-20 h-149 overflow-y-auto"
                >
                    <Header onClose={closeCityList} />
                    <SearchInput value={searchTerm} onChange={setSearchTerm} />
                    <ul className="px-5 space-y-4">
                        <CityList
                            cities={cities}
                            searchTerm={searchTerm}
                            select={selectCity}
                            currentCityId={currentCity.id}
                            isLoading={isLoading}
                            isError={isError}
                        />
                    </ul>
                </div>
            </div>
        </Transition>
    );
}
