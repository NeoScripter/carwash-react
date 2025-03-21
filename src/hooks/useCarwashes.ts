import { useQuery } from '@tanstack/react-query';
import { fetchCarwashes } from '../api/carwashesApi';


export const useCarwashes = (city: string) => {
    return useQuery({
        queryKey: ['carwashes', city],
        queryFn: () => fetchCarwashes(city),
        staleTime: 1000 * 60 * 5, 
        refetchOnWindowFocus: false,
    });
};
