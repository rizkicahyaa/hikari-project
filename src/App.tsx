import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Manga from "./pages/Manga";
// import MangaDetail from "./pages/MangaDetail";
import Characters from "./pages/Characters";
import Search from "./pages/Search";
// import CharacterDetail from "./pages/CharacterDetail";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-zinc-950 text-white">
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/manga" element={<Manga />} />
                        {/* <Route path="/manga/:id" element={<MangaDetail />} /> */}

                        <Route path="/characters" element={<Characters />} />
                        <Route path="/search" element={<Search />} />
                        {/* <Route path="/character/:id" element={<CharacterDetail />} /> */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
