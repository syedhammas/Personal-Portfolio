"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer3() {
    return (
        <footer className="relative text-white py-12 overflow-hidden">
            {/* Neon Border Top */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#C0AA83] via-white to-[#C0AA83] shadow-[0_0_20px_#C0AA83]"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Brand */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-extrabold text-[#C0AA83] drop-shadow-[0_0_25px_#C0AA83]"
                    style={{ fontFamily: '"Perfecto Calligraphy", cursive' }}
                >
                    Syed Aaliyar
                </motion.h1>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex space-x-8 text-gray-400 font-medium"
                >
                    {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
                        (link, i) => (
                            <a
                                key={i}
                                href={`#${link.toLowerCase()}`}
                                className="relative group"
                            >
                                <span className="transition text-gray-300 group-hover:text-[#C0AA83]">
                                    {link}
                                </span>
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C0AA83] group-hover:w-full transition-all duration-500"></span>
                            </a>
                        )
                    )}
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex space-x-5"
                >
                    {[
                        { icon: <FaFacebookF />, link: "#" },
                        { icon: <FaTwitter />, link: "#" },
                        { icon: <FaLinkedinIn />, link: "#" },
                        { icon: <FaGithub />, link: "#" },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.link}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C0AA83]/50 text-[#C0AA83] hover:bg-[#C0AA83] hover:text-black transition shadow-[0_0_10px_#C0AA83]"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Copy */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center text-gray-500 text-sm mt-10"
            >
                © {new Date().getFullYear()}{" "}
                <span className="text-[#C0AA83] font-extrabold">Syed Aaliyar</span>. All
                Rights Reserved.
            </motion.div>
        </footer>
    );
}

