import { useState, createContext } from 'react';
import { City, defaultCity } from '../types/city';

type CityContextType = {
    showCityList: boolean;
    currentCity: City;
    openCityList: () => void;
    closeCityList: () => void;
    selectCity: (city: City) => void;

};

export const CityContext = createContext<CityContextType | null>(null);

export function CityProvider({ children }: { children: React.ReactNode }) {
    const [showCityList, setShowCityList] = useState(false);
    const [currentCity, setCurrentCity] = useState<City>(defaultCity);

    function openCityList() {
        setShowCityList(true);
    }

    function closeCityList() {
        setShowCityList(false);
    }

    function selectCity(city: City) {
        setCurrentCity(city);
    }

    return <CityContext.Provider value={{showCityList, currentCity, openCityList, closeCityList, selectCity}}>{children}</CityContext.Provider>;
}
