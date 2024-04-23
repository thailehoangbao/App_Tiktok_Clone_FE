import React, { useEffect, useState } from 'react';

function useDebounce(valueCurrent, delay) {
    const [valueDebounce, setValueDebounce] = useState(valueCurrent);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setValueDebounce(valueCurrent);
        }, delay);

        return () => clearTimeout(timerId)
    }, [valueCurrent]);

    return valueDebounce;
}
export default useDebounce;
