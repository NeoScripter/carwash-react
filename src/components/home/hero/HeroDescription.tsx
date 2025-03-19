import clsx from 'clsx';
import blackArrow from '../../../assets/images/home/black-arrow.svg';
import whiteArrow from '../../../assets/images/home/white-arrow.svg';

type HeroDescriptionProps = {
    className?: string;
};

export default function HeroDescription({ className }: HeroDescriptionProps) {
    return (
        <div
            className={clsx(
                'mx-10 text-balance pb-10 text-xl flex items-center',
                className
            )}
        >
            <p>
                CHISTO.DRIVE - это инновационный сервис, чтобы сделать процесс
                поиска и записи на автомойку максимально простым, быстрым и
                удобным.
            </p>
            <div className="shrink-0 sm:flex sm:justify-center sm:mt-10">
                <img src={blackArrow} alt="black arrow" className="sm:hidden" />
                <img
                    src={whiteArrow}
                    alt="white arrow"
                    className="hidden sm:block sm:object-bottom sm:h-20 object-cover sm:ml-20"
                />
            </div>
        </div>
    );
}
