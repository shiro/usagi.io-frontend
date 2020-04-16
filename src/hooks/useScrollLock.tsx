import {useEffect} from "react";

export const useLockBodyScroll = (locked: boolean) => {
    useEffect(() => {
        document.body.style.overflow = locked ? 'hidden' : 'visible'
        return () => {document.body.style.overflow = 'visible';};
    }, [locked])
};