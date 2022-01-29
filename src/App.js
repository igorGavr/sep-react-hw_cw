import {Route, Routes, Navigate} from "react-router-dom";

import {Layout} from "./components";
import {Characters, Episodes} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'episodes?page=1'} />}/>
                <Route path={'episodes'} element={<Episodes/>}/>
                <Route path={'episodes/:id/characters'} element={<Characters/>}/>
            </Route>

        </Routes>
    );
};

export default App;
