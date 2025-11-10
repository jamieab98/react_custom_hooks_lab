import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [inputData, setInputData] = useState(() => {
        const storedValue = localStorage.getItem(key);
        try {
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        } catch {
            return storedValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, inputData);
    }, [key, inputData])

    return [inputData, setInputData];
}
