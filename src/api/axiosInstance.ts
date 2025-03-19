import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://45.12.230.192:8081/',
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});
