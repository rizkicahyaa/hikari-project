import { BookOpen, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
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
                <h2 className="text-3xl font-bold mb-10">Why HikariProject?</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <BookOpen className="text-violet-400 mb-4" size={40} />
                        <h3 className="font-semibold text-xl mb-2">Huge Manga Database</h3>
                        <p className="text-zinc-400">Browse thousands of manga with detailed information, ratings, genres, and recommendations.</p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <Users className="text-cyan-400 mb-4" size={40} />
                        <h3 className="font-semibold text-xl mb-2">Character Encyclopedia</h3>
                        <p className="text-zinc-400">Explore anime characters, appearances, voice actors, and their stories.</p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <Star className="text-yellow-400 mb-4" size={40} />
                        <h3 className="font-semibold text-xl mb-2">Top Rankings</h3>
                        <p className="text-zinc-400">Discover the highest rated manga and most popular anime characters.</p>
                    </div>
                </div>
            </section>

            {/* <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Trending Manga</h2>

                    <Link to="/manga" className="text-violet-400 hover:text-violet-300">
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                            <div className="h-72 bg-zinc-800 animate-pulse" />

                            <div className="p-4">
                                <div className="h-4 bg-zinc-800 rounded animate-pulse mb-2" />
                                <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border border-zinc-800 rounded-3xl p-10">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-5xl font-bold text-violet-400">10K+</h3>
                            <p className="text-zinc-400 mt-2">Manga Database</p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-cyan-400">5K+</h3>
                            <p className="text-zinc-400 mt-2">Anime Characters</p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-pink-400">∞</h3>
                            <p className="text-zinc-400 mt-2">Recommendations</p>
                        </div>
                    </div>
                </div>
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
