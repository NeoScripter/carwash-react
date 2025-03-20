import {
    GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router';
import FindCarwashBtn from '../../shared/FindCarwashBtn';

type HeroNavigationBarProps = {
    onCitySelect: () => void;
    currentCity: string;
};

export default function HeroNavigationBar({
    onCitySelect,
    currentCity,
}: HeroNavigationBarProps) {
    return (
        <header className="py-12 md:pt-20 md:pb-12 text-gray-50">
            <nav>
                <div className="flex items-center justify-around sm:justify-between">
                    <button
                        onClick={onCitySelect}
                        className="btn-primary bg-gray-30 border-gray-20"
                    >
                        <GlobeEuropeAfricaIcon className="size-4.5 shrink-0" />

                        {currentCity}
                    </button>
                    <FindCarwashBtn className='absolute -bottom-15 sm:static' />
                    <Link
                        to="/login"
                        className="btn-primary bg-gray-30 border-gray-20"
                    >
                        Войти
                    </Link>
                </div>
            </nav>
        </header>
    );
}
