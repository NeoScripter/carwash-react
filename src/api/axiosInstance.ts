import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chistodrive-wash.online:8081/',
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});
