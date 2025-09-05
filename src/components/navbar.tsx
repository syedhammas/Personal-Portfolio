"use client";

import Link from "next/link";
import {
    FiHome,
    FiUser,
    FiCode,
    FiLayers,
    FiBriefcase,
    FiMail,
} from "react-icons/fi";

export default function Navbar() {
    const navLinks = [
        { name: "Home", path: "/", icon: <FiHome size={32} /> },
        { name: "About", path: "#about", icon: <FiUser size={32} /> },
        { name: "Skills", path: "#skills", icon: <FiCode size={32} /> },
        { name: "Projects", path: "#projects", icon: <FiLayers size={32} /> },
        { name: "Services", path: "#services", icon: <FiBriefcase size={32} /> },
        { name: "Contact", path: "#contact", icon: <FiMail size={32} /> },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
                <nav className="flex flex-col items-center space-y-20 px-4 py-6 border border-white/20 backdrop-blur-xl rounded-3xl shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="relative group text-white hover:text-[#C0AA83] transition-colors"
                        >
                            <div className="p-2 rounded-xl group-hover:bg-white/10 transition">
                                {link.icon}
                            </div>
                            <span className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%]">
                <nav className="flex justify-between items-center px-6 py-3 border border-white/20 backdrop-blur-xl rounded-2xl shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="relative group text-white hover:text-[#C0AA83] transition-colors"
                        >
                            <div className="p-2 rounded-xl group-hover:bg-white/10 transition">
                                {link.icon}
                            </div>
                            <span className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
