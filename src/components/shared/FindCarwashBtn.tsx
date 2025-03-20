import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Link } from 'react-router';

type FindCarwashBtnProps = {
    className?: string;
};
export default function FindCarwashBtn({ className }: FindCarwashBtnProps) {
    return (
        <Link
            to="/"
            className={clsx("btn-primary bg-yellow-50 border-yellow-20", className)}
        >
            Мойка рядом
            <MagnifyingGlassIcon className="size-4.5 shrink-0" />
        </Link>
    );
}
