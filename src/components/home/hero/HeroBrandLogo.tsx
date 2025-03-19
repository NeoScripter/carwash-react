import HeroBubble from './HeroBubble';
import logo from '../../../assets/images/home/logo.webp';

export default function HeroBrandLogo() {
    return (
        <HeroBubble className="flex md:max-w-1/2">
            <img
                src={logo}
                alt="Chisto.drive"
                className="object-center object-contain w-4/5 mx-auto"
            />
        </HeroBubble>
    );
}
