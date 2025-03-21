import { useContext } from "react";
import { CityContext } from "../providers/CityProvider";

export function useCityContext() {
    const cityContext = useContext(CityContext);

    if (cityContext == null) {
        throw new Error('Must be within provider');
    }

    return cityContext;
}