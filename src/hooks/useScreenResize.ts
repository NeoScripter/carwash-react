import { useRef, useState } from 'react';
import useEventListener from './useEventListener';

export function useScreenResize(size: number) {
    const [isLarge, setIsLarge] = useState(() => window.innerWidth > size);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEventListener('resize', () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setIsLarge(window.innerWidth > size);
        }, 100);
    });

    return isLarge;
}
