import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
// import Manga from "./pages/Manga";
// import MangaDetail from "./pages/MangaDetail";
// import Characters from "./pages/Characters";
// import CharacterDetail from "./pages/CharacterDetail";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-zinc-950 text-white">
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* Manga */}
                        {/* <Route path="/manga" element={<Manga />} />
                        <Route path="/manga/:id" element={<MangaDetail />} /> */}

                        {/* Characters */}
                        {/* <Route path="/characters" element={<Characters />} />
                        <Route path="/character/:id" element={<CharacterDetail />} /> */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
