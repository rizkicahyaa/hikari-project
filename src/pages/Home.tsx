import { useEffect, useState } from "react";
import { BookOpen, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Manga {
    mal_id: number;
    title: string;
    score: number;
    images: {
        jpg: {
            large_image_url: string;
        };
    };
}

export default function Home() {
    const [trendingManga, setTrendingManga] = useState<Manga[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingManga = async () => {
            try {
                const res = await fetch("https://api.jikan.moe/v4/top/manga?limit=10");

                const data = await res.json();

                setTrendingManga(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingManga();
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-cyan-500/10 to-pink-500/20 blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 py-28">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm mb-6">Discover Manga & Anime Characters</span>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Explore Your Favorite Manga</h1>

                        <p className="text-zinc-400 text-lg mt-6 max-w-2xl">Find detailed information about thousands of manga, anime characters, rankings, recommendations, and discover your next favorite series.</p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link to="/manga" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl font-medium flex items-center gap-2 transition">
                                Explore Manga
                                <ArrowRight size={18} />
                            </Link>

                            <Link to="/characters" className="px-6 py-3 border border-zinc-700 hover:border-cyan-500 rounded-xl font-medium transition">
                                Explore Characters
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Trending Manga</h2>

                    <Link to="/manga" className="text-violet-400 hover:text-violet-300">
                        View All →
                    </Link>
                </div>

                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                                <div className="h-72 bg-zinc-800 animate-pulse" />

                                <div className="p-4">
                                    <div className="h-4 bg-zinc-800 rounded animate-pulse mb-2" />
                                    <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {trendingManga.map((manga) => (
                            <Link key={manga.mal_id} to={`/manga/${manga.mal_id}`} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-500 transition">
                                <div className="overflow-hidden">
                                    <img src={manga.images.jpg.large_image_url} alt={manga.title} className="w-full h-72 object-cover group-hover:scale-105 transition duration-300" />
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold line-clamp-2 min-h-[48px]">{manga.title}</h3>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-yellow-400 text-sm">⭐ {manga.score ?? "N/A"}</span>

                                        <span className="text-xs text-zinc-500">#{trendingManga.indexOf(manga) + 1}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Exploring?</h2>

                    <p className="text-zinc-400 mb-8">Search for your favorite manga and anime characters now.</p>

                    <Link to="/manga" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl transition">
                        Get Started
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
