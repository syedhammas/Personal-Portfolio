"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [hideNav, setHideNav] = useState(false);
    const [showFloating, setShowFloating] = useState(false);
    const lastScrollY = useRef(0);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 80) {
                if (currentScrollY > lastScrollY.current) {
                    setHideNav(true);
                    setShowFloating(true);
                } else {
                    setHideNav(false);
                    setShowFloating(false);
                }
            } else {
                setHideNav(false);
                setShowFloating(false);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        //  bg-gradient-to-br from-gray-900 via-black to-gray-800

        <div className="fixed left-1/2 transform -translate-x-1/2 z-50 w-full ">

            {/* Navbar */}
            <div className={`w-full z-50 transition-all duration-500 ${hideNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
                {/* Desktop Navbar - Full Width */}
                <nav className="hidden md:flex items-center justify-between bg-black w-full px-8 py-6 border-b border-white">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <h1 className="text-cyan-400 text-3xl font-extrabold tracking-wide"
                            style={{ fontFamily: '"Perfecto Calligraphy", cursive' }}>
                            Syed,Hammas
                        </h1>
                    </div>

                    {/* Navigation Links - Centered */}
                    <div className="flex-1 flex justify-end">
                        <div className="flex space-x-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="relative text-white font-medium text-lg group transition-all duration-300 hover:text-cyan-400"
                                >
                                    {link.name}
                                    <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Mobile Navbar */}
                <div className="md:hidden flex justify-between items-center py-3 px-4">
                    <h1 className="text-2xl font-bold text-white tracking-wide">
                        <span className="text-cyan-400">Syed,Hammas</span>
                    </h1>
                    <button
                        onClick={() => setOpen(!open)}
                        className="relative w-8 h-4 flex flex-col justify-between items-center md:hidden"
                        aria-label="Open menu"
                    >
                        <span
                            className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
                        ></span>
                        <span
                            className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
                        ></span>
                        <span
                            className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
                        ></span>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg flex flex-col items-center space-y-5 py-6 mt-2 md:hidden transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                        }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="text-white font-medium hover:text-cyan-300 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}