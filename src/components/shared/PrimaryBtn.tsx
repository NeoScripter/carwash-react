import { Button } from '@headlessui/react';

type PrimaryBtnProps = {
    children: React.ReactNode;
    onClick?: () => void;
};
export default function PrimaryBtn({ children, onClick = () => {} }: PrimaryBtnProps) {
    return (
        <Button onClick={onClick} className="flex items-center py-2.5 px-4 rounded-full transition-colors duration-300 hover:opacity-90 uppercase cursor-pointer w-full bg-yellow-500 justify-center mb-7 sm:text-xl">
            {children}
        </Button>
    );
}
