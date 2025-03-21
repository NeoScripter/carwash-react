import {
    GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router';
import FindCarwashBtn from '../../shared/FindCarwashBtn';
import { useCityContext } from '../../../hooks/useCityContext';


export default function HeroNavigationBar() {
    const { openCityList, currentCity } = useCityContext();
    return (
        <header className="py-12 md:pt-20 md:pb-12 text-gray-50">
            <nav>
                <div className="flex items-center justify-around sm:justify-between">
                    <button
                        onClick={openCityList}
                        className="btn-primary bg-gray-30 border-gray-20"
                    >
                        <GlobeEuropeAfricaIcon className="size-4.5 shrink-0" />

                        {currentCity.ru_name}
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
