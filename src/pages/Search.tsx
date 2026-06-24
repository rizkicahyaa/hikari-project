import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Manga {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
    score: number;
}

interface Character {
    mal_id: number;
    name: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

export default function Search() {
    const [query, setQuery] = useState("");

    const [mangaResults, setMangaResults] = useState<Manga[]>([]);
    const [characterResults, setCharacterResults] = useState<Character[]>([]);

    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            setLoading(true);

            const [mangaRes, characterRes] = await Promise.all([fetch(`https://api.jikan.moe/v4/manga?q=${query}&limit=8`), fetch(`https://api.jikan.moe/v4/characters?q=${query}&limit=15`)]);

            const mangaData = await mangaRes.json();
            const characterData = await characterRes.json();

            const blockedGenres = ["Hentai", "Erotica"];

            const safeManga = (mangaData.data || []).filter((manga: any) => !manga.genres?.some((genre: any) => blockedGenres.includes(genre.name)));

            setMangaResults(safeManga);
            setCharacterResults(characterData.data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-4xl font-bold mb-8">Search</h1>

                <div className="flex gap-3 mb-10">
                    <input type="text" placeholder="Search manga or character..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-violet-500" />

                    <button onClick={handleSearch} className="px-5 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl transition">
                        <SearchIcon size={20} />
                    </button>
                </div>

                {loading && <p className="text-zinc-400">Searching...</p>}

                {mangaResults.length > 0 && (
                    <section className="mb-14">
                        <h2 className="text-2xl font-semibold mb-5">Manga Results</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {mangaResults.map((manga) => (
                                <Link key={manga.mal_id} to={`/manga/${manga.mal_id}`} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-500 transition">
                                    <img src={manga.images.jpg.image_url} alt={manga.title} className="w-full h-72 object-cover" />

                                    <div className="p-3">
                                        <h3 className="font-medium line-clamp-2">{manga.title}</h3>

                                        <p className="text-yellow-400 text-sm mt-2">⭐ {manga.score ?? "N/A"}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {characterResults.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-semibold mb-5">Character Results</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {characterResults.map((character) => (
                                <Link key={character.mal_id} to={`/character/${character.mal_id}`} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-500 transition">
                                    <img src={character.images.jpg.image_url} alt={character.name} className="w-full h-72 object-cover" />

                                    <div className="p-3">
                                        <h3 className="font-medium">{character.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {!loading && mangaResults.length === 0 && characterResults.length === 0 && <div className="text-center py-20 text-zinc-500">Search for your favorite manga or anime character.</div>}
            </div>
        </div>
    );
}
