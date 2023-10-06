import {useState} from "react";

import {Picked} from "../bingo.type.ts";


export const usePicker = () => {
    const [picked, setPicked] = useState<Picked>();

    const pick = () => {
        const number = Math.floor(Math.random() * (75 + 1 - 1)) + 1;
        setPicked({number: number})
    }

    return {picked, pick};
}
