import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Manga",
            path: "/manga",
        },
        {
            name: "Characters",
            path: "/characters",
        },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">HikariProject</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? "text-violet-400 font-medium" : "text-zinc-400 hover:text-white transition")}>
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/search" className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition">
                            <Search size={20} />
                        </Link>

                        <Link to="/manga" className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-medium">
                            Explore
                        </Link>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
                    <div className="flex flex-col p-6 gap-5">
                        {navLinks.map((link) => (
                            <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "text-violet-400 font-medium" : "text-zinc-400")}>
                                {link.name}
                            </NavLink>
                        ))}

                        <Link to="/search" className="flex items-center gap-2 text-zinc-400">
                            <Search size={18} />
                            Search
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
