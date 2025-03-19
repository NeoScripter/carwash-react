import { axiosInstance } from './axiosInstance';

export const fetchCities = async () => {
    const { data } = await axiosInstance.get('/api/admin/cities');
    return data;
  };