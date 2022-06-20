import { useState } from "react";
import { useDebouncedEffect } from './useDebouncedEffect'


export const useLocalStorageState = (key, defaultValue = '') => {
    const [state, setState] = useState(
        () => window.localStorage.getItem(key) ??  defaultValue 
    )

    useDebouncedEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state], 500)

    return [state, setState]
}