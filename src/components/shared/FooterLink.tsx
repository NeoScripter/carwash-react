import { Link } from 'react-router';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

type FooterLinkProps = {
    children: React.ReactNode;
    path: string;
};

export default function FooterLink({ children, path }: FooterLinkProps) {
    return <Link to={path} className='flex items-center justify-between uppercase w-75 sm:w-auto sm:gap-3 rounded-full border border-white bg-gray-10/30 py-[0.25em] px-[1.25em] transition-colors duration-300 ease-in-out hover:opacity-90'>
        <span className='mt-1'>{children}</span>
        <ArrowUpRightIcon className='size-6 text-white' />
    </Link>;
}
