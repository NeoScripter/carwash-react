import { Link } from 'react-router';
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid';
import Hero from '../assets/images/home/home-hero.webp';

export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-b from-black to-gray-30">
            <header className="py-12 text-gray-50">
                <nav>
                    <ul className='flex items-center justify-center gap-15'>
                        <li className="bg-gray-30 w-max flex items-center gap-2 py-1.5 px-4 rounded-full">
                            <GlobeEuropeAfricaIcon className="size-4.5 shrink-0" />
                            <button className="uppercase cursor-pointer -mb-1">
                                Главная
                            </button>
                        </li>
                        <li className="bg-gray-30 w-max flex items-center gap-2 py-1.5 px-4 rounded-full">
                            <Link to="/login" className="uppercase cursor-pointer -mb-1">Войти</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className='bg-cover bg-no-repeat bg-center h-100' style={{ backgroundImage: `url(${Hero})` }}>
               hello world
            </div>
        </div>
    );
}
