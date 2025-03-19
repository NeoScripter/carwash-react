import HeroBubble from './HeroBubble';

export default function HeroIntroText() {
    return (
        <HeroBubble className="hidden md:flex md:absolute md:h-full md:-left-1/2 md:translate-x-[47%] md:w-auto md:p-10">
            <p className="w-75 ml-auto">
                CHISTO.DRIVE - это инновационный сервис, чтобы сделать процесс
                поиска и записи на автомойку максимально простым, быстрым и
                удобным.
            </p>
        </HeroBubble>
    );
}
