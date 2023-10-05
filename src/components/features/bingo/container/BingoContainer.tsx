import {useState} from "react";

import {BingoPresenter} from "../presenter/BingoPresenter.tsx";


// TODO 抽選を外部ロジックにする
// TODO 番号に["B","I","N","G","O"]を付与する
// TODO 抽選の重複をなくす
// TODO 抽選の履歴を保存する


export const BingoContainer = () => {
    const [currentNumber, setCurrentNumber] = useState<number>();

    const pick = (): void => {
        const number = Math.floor(Math.random() * (75 + 1 - 1)) + 1
        setCurrentNumber(number)
    }

    return <BingoPresenter currentNumber={currentNumber} onPick={pick}/>
}
