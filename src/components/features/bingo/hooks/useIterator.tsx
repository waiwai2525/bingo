import {useState} from "react";


export const useIterator = (length: number) => {
    const [index, setIndex] = useState<number>(0);

    const next = () => {
        if (index + 1 > length - 1) return;

        setIndex((origin) => origin + 1);
    }

    return {index, next};
}
