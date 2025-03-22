import { Link } from 'react-router';
import BgPattern from './BgPattern';

type FormLayoutProps = {
    children: React.ReactNode;
    isLogin: boolean;
};

export default function FormLayout({ children, isLogin }: FormLayoutProps) {
    return (
        <section className="text-white relative py-13 md:py-25 px-8 overflow-clip">
            <Link
                to="/"
                className="text-center block uppercase text-yellow-50 text-4xl font-logo mb-13 md:mb-20 sm:text-5xl md:text-8xl"
            >
                chisto.drive
            </Link>

            <BgPattern />

            <div className="backdrop-blur-sm py-8 px-5 sm:px-11 sm:py-15 bg-gray-10/80 shadow-carousel-btn rounded-3xl w-90 sm:w-118 mx-auto">
                <p className="text-center uppercase text-4xl mb-8 sm:mb-10">
                    {isLogin ? 'Вход' : 'РЕГИСТРАЦИЯ'}
                </p>
                {children}

                <p className="text-center mb-17 sm:text-xl">
                    {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'} <br />{' '}
                    <Link
                        to={isLogin ? '/signup' : '/login'}
                        className="underline underline-offset-4 transition-colors duration-200 ease hover:text-gray-200"
                    >
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </Link>
                </p>

                <p className="text-center text-xs sm:text-base">
                    © 2025 CHISTO.DRIVE
                </p>
            </div>
        </section>
    );
}
