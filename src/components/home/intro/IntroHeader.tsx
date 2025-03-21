import mobileBg from '../../../assets/images/home/home-bg-mobile.webp';

export default function IntroHeader() {
    return (
        <>
            <div className="py-7 text-balance text-end sm:text-center md:hidden sm:text-lg">
                Проект объединяет тысячи автомоек по всей России, позволяя
                пользователям находить ближайшие точки обслуживания, сравнивать
                цены, читать отзывы и записываться на услуги в пару кликов.
            </div>

            <div
                className="h-[40vw] flex items-center justify-center bg-cover bg-no-repeat bg-center -mx-10 sm:bg-none! sm:h-auto sm:mx-0 md:mb-50"
                style={{ backgroundImage: `url(${mobileBg})` }}
            >
                <p className="text-center mt-8 text-3xl md:text-6xl sm:text-4xl text-black uppercase sm:text-white sm:w-72 sm:ml-90 md:w-auto md:mr-auto md:ml-0">
                    Как это работает?
                </p>
            </div>
        </>
    );
}
