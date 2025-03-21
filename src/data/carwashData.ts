import { CarwashCardType } from '../types/carwashCard';
import placeholder from '../assets/images/home/placeholder.jpg';

export const carwashData: CarwashCardType[] = [
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 4,
        name: 'Clean Ride Express',
        address: 'ул. Лесная, 15',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 5,
        name: 'Crystal Carwash',
        address: 'ул. Тверская, 22',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 3,
        name: 'AutoFresh 24',
        address: 'ул. Советская, 8',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 2,
        name: 'Sparkle Garage',
        address: 'ул. Новая, 51',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 5,
        name: 'Deluxe Wash Pro',
        address: 'ул. Кирова, 9',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 4,
        name: 'Eco Auto Wash',
        address: 'ул. Мира, 33',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 3,
        name: 'TurboShine',
        address: 'ул. Гагарина, 12',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 4,
        name: 'Street Wash',
        address: 'ул. Центральная, 6',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 5,
        name: 'AquaJet Service',
        address: 'ул. Пушкина, 27',
    },
    {
        id: crypto.randomUUID(),
        imgPath: placeholder,
        rating: 2,
        name: 'City AutoClean',
        address: 'ул. Победы, 18',
    },
];
