import clsx from 'clsx';

type HeroBubbleProps = {
    children: React.ReactNode;
    className?: string;
};

export default function HeroBubble({ children, className }: HeroBubbleProps) {
    return (
        <div
            className={clsx(
                'items-center text-black justify-center w-4/5 mx-auto bg-gray-10 rounded-full aspect-square z-20 shadow-logo sm:flex-1',
                className
            )}
        >
            {children}
        </div>
    );
}
