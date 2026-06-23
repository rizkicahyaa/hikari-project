import { useEffect, useState } from "react";
import { getTopCharacters } from "../api/jikan";

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getTopCharacters().then(setCharacters);
    }, []);

    return (
        <div className="container max-w-7xl mx-auto px-6 py-15">
            <h1 className="text-3xl font-bold mb-5">Top Characters</h1>

            <div className="grid md:grid-cols-4 gap-4 text-center">
                {characters.map((char: any) => (
                    <div key={char.mal_id} className="bg-zinc-900 rounded-lg overflow-hidden">
                        <img src={char.images.jpg.image_url} alt={char.name} className="m-auto object-cover h-80" />

                        <div className="p-3">
                            <h2>{char.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;
