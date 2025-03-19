import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@headlessui/react';

type SearchInputProps = {
    value: string;
    onChange: (val: string) => void;
};
export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="relative focus-within:border-double focus-within:border-3 hover:shadow-xl w-full border border-black-20 py-2 px-4 rounded-md flex items-center justify-between shadow-sm gap-2 mb-6">
            <Input
                type="search"
                placeholder="Ваш город"
                className="-mb-1 flex-1 shadow-none outline-none"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
            <MagnifyingGlassIcon className="size-6" />
        </div>
    );
}
