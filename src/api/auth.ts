import { axiosInstance } from './axiosInstance';

type LoginCredentials = {
    telephone: string;
    password: string;
};

export const loginUser = async ({ telephone, password }: LoginCredentials) => {
    const params = new URLSearchParams();
    params.append('telephone', telephone);
    params.append('password', password);

    const response = await axiosInstance.post('api/jwt/login', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return response.data;
};
