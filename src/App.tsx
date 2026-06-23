import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
// import Manga from "./pages/Manga";
// import MangaDetail from "./pages/MangaDetail";
// import Characters from "./pages/Characters";
// import CharacterDetail from "./pages/CharacterDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/manga" element={<Manga />} />
                <Route path="/manga/:id" element={<MangaDetail />} />

                <Route path="/characters" element={<Characters />} />
                <Route path="/character/:id" element={<CharacterDetail />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
