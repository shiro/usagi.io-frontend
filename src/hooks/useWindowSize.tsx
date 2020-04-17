import {useCallback, useEffect, useState} from "react";
import debounce from "lodash/debounce";

export const useWindowSize = () => {
    const isClient = typeof window === 'object';

    const getSize = useCallback(() => ({
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
    }), [isClient]);

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', debounce(handleResize, 100));

        return () => {window.removeEventListener('resize', handleResize);};
    }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};
