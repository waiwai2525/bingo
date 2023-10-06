import {usePicker} from "../hooks/usePicker.ts";
import {BingoPresenter} from "../presenter/BingoPresenter.tsx";


// TODO 番号に["B","I","N","G","O"]を付与する
// TODO 抽選の重複をなくす
// TODO 抽選の履歴を保存する


export const BingoContainer = () => {
    const {picked, pick} = usePicker();

    const onPick = () => pick();

    return <BingoPresenter picked={picked} onPick={onPick}/>
}
