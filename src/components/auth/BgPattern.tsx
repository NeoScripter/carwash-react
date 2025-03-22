import smRedPattern from '../../assets/images/shared/sm-red-pattern.webp';
import mdRedPattern from '../../assets/images/shared/md-red-pattern.webp';

export default function BgPattern() {
    return (
        <span className="absolute inset-0 -z-10">
            <img src={smRedPattern} alt="Red pattern" className="md:hidden" />
            <img
                src={mdRedPattern}
                alt="Red pattern"
                className="hidden md:block bg-cover h-full w-full object-left"
            />
        </span>
    );
}
