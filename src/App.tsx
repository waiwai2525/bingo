import {Route, Routes} from "react-router-dom";

import {Top} from "./components/pages/Top.tsx";


export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Top/>}/>
        </Routes>
    )
}
