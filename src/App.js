import {Route, Routes, Navigate} from "react-router-dom";

import {Layout} from "./components";
import {Characters, Episodes} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episodes/1'}/>}/>
                <Route path={'episodes/:page'} element={<Episodes/>}/>
                <Route path={'episodes/:id/characters'} element={<Characters/>}/>
            </Route>

        </Routes>
    );
};

export default App;
