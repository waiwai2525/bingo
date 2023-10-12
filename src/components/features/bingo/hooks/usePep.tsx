import {useEffect, useState} from "react";

import {Pep} from "../bingo.type.ts";


const pepNumberToIdent = (number: number): string => {
    if (number <= 15) return "B";
    if (number <= 30) return "I";
    if (number <= 45) return "N";
    if (number <= 60) return "G";
    return "O";
}



const createPep = (number: number): Pep => {
    return {
        number: number,
        ident: pepNumberToIdent(number)
    }
}



export const usePep = () => {
    const [peps, setPeps] = useState<Pep[]>([]);

    useEffect(() => {
        const numbers = [...Array(75)].map((_, index) => index + 1);
        numbers.sort(() => 0.5 - Math.random());

        setPeps(numbers.map((number) => createPep(number)));
    }, [])

    return peps;
}
