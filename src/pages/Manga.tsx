import { useEffect, useState } from "react";
import { getTopManga } from "../api/jikan";

function Manga() {
    const [manga, setManga] = useState([]);

    useEffect(() => {
        getTopManga().then(setManga);
    }, []);

    return (
        <div className="container max-w-7xl mx-auto px-6 py-15">
            <h1 className="text-3xl font-bold mb-5">Top Manga</h1>

            <div className="grid md:grid-cols-4 gap-4">
                {manga.map((item: any) => (
                    <div key={item.mal_id} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-violet-500 transition">
                        <img src={item.images.jpg.large_image_url} alt={item.title} className="w-full h-100 object-cover" />

                        <div className="p-4">
                            <h2 className="font-semibold line-clamp-2 min-h-[48px]">{item.title}</h2>

                            <div className="flex items-center justify-between mt-3">
                                <span className="text-yellow-400 font-medium">⭐ {item.score ?? "N/A"}</span>

                                <span className="text-sm text-zinc-400">Rank #{item.rank}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Manga;
