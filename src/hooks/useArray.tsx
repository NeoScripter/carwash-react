import { useState } from 'react';

export default function useArray<T>(defaultValue: T[] = []) {
    const [array, setArray] = useState<T[]>(defaultValue);

    function push(element: T) {
        setArray((a) => [...a, element]);
    }

    function filter(
        callback: (value: T, index: number, array: T[]) => boolean
    ) {
        setArray((a) => a.filter(callback));
    }

    function update(index: number, newElement: T) {
        setArray((a) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1),
        ]);
    }

    function remove(index: number) {
        setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
    }

    function clear() {
        setArray([]);
    }

    function rotateForward() {
        const first = array[0];
        remove(0);
        push(first);
    }

    function rotateBackward() {
        const last = array[array.length - 1];
        remove(array.length - 1);
        setArray([last, ...array]);
    }

    return { array, set: setArray, push, filter, update, remove, clear, rotateForward, rotateBackward };
}
