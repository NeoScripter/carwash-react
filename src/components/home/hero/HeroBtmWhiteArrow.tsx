import whiteArrow from '../../../assets/images/home/white-arrow.svg';

export default function HeroBtmWhiteArrow() {
    return (
        <div className="hidden md:block md:pb-20">
            <img
                src={whiteArrow}
                alt="white arrow"
                className="hidden md:block md:mx-auto"
            />
        </div>
    );
}
