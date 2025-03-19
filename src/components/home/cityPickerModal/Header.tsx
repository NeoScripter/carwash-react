type HeaderProps = {
    onClose: () => void;
};

export default function Header({ onClose }: HeaderProps) {
    return (
        <header className="flex items-start mb-3">
            <p className="text-xl font-bold text-center ml-auto">
                Выберите город
            </p>
            <button
                onClick={onClose}
                className="ml-auto cursor-pointer text-xl relative"
            >
                &times;
                <span className="absolute inset-0 size-8 -translate-x-1/2"></span>
            </button>
        </header>
    );
}
