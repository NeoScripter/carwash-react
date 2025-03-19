import { Transition } from '@headlessui/react';
import { City } from '../../../types/city';
import { useState } from 'react';
import { useCities } from '../../../hooks/useCities';
import Header from './Header';
import SearchInput from './SearchInput';
import CityList from './CityList';

type CityPickerModalProps = {
    show: boolean;
    close: () => void;
    select: (city: City) => void;
    currentCityId: number;
};

export default function CityPickerModal({
    show,
    close,
    select,
    currentCityId,
}: CityPickerModalProps) {
    const { data: cities, isLoading, isError } = useCities();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Transition show={show}>
            <div
                onClick={close}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 transition duration-300 ease-in data-[closed]:opacity-0 backdrop-blur-sm"
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white max-w-127 w-full rounded-2xl p-4 text-black-20 h-149 overflow-y-auto"
                >
                    <Header onClose={close} />
                    <SearchInput value={searchTerm} onChange={setSearchTerm} />
                    <ul className="px-5 space-y-4">
                        <CityList
                            cities={cities}
                            searchTerm={searchTerm}
                            select={select}
                            currentCityId={currentCityId}
                            isLoading={isLoading}
                            isError={isError}
                        />
                    </ul>
                </div>
            </div>
        </Transition>
    );
}
