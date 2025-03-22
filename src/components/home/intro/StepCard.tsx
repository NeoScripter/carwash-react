import clsx from 'clsx';

type StepCardProps = {
    order: number;
    text: string;
    shift?: boolean;
};

export default function StepCard({ order, text, shift }: StepCardProps) {
    return (
        <div
            className={clsx(
                'w-76.5 px-2 py-4 mx-auto rounded-4xl flex flex-col items-center justify-center bg-gray-10 text-center text-white shadow-step-card text-balance backdrop-blur-sm',
                shift && 'sm:row-start-2 md:row-start-auto'
            )}
        >
            <p className="mb-1 font-bold">Шаг {order}</p>
            <p>{text}</p>
        </div>
    );
}
