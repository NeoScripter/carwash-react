import whispering from '../../../assets/images/home/whispering.webp';

export default function IntroMotto() {
    return (<div className="flex items-center justify-center gap-5 sm:gap-9 w-75 sm:w-auto mx-auto sm:text-2xl md:text-5xl sm:mb-12 md:mb-15">
        <div className="w-14 sm:w-20 md:w-25 shrink-0">
            <img src={whispering} alt="Шепот" />
        </div>
        <p>
            CHISTO.DRIVE - это не просто сервис, это новый
            стандарт ухода за автомобилем!
        </p>
    </div>)
}