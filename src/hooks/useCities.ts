import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../api/citiesApi';


export const useCities = () => {
    return useQuery({
        queryKey: ['cities'],
        queryFn: fetchCities,
        staleTime: 1000 * 60 * 5, 
        refetchOnWindowFocus: false,
    });
};
