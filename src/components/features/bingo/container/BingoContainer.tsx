import {usePep} from "../hooks/usePep.tsx"
import {useIterator} from "../hooks/useIterator.tsx";
import {BingoPresenter} from "../presenter/BingoPresenter.tsx";


// TODO 抽選の履歴を保存する


export const BingoContainer = () => {
    const peps = usePep();
    const {index, next} = useIterator(75);

    const onPick = () => next();

    return <BingoPresenter pep={peps[index]} onPick={onPick}/>
}
