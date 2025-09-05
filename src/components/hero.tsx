"use client";

import Image from "next/image";
import { SlidingLogoMarquee } from "./sliding-logo";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Hero() {

    const techIcons = [
        {
            id: "react",
            content: (
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-blue-500 text-4xl lg:text-5xl"
                >
                    <FaReact />
                </motion.div>
            ),
        },
        {
            id: "js",
            content: (
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="text-yellow-400 text-4xl lg:text-5xl"
                >
                    <SiJavascript />
                </motion.div>
            ),
        },
        {
            id: "next",
            content: (
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="text-white text-4xl lg:text-5xl"
                >
                    <SiNextdotjs />
                </motion.div>
            ),
        },
        {
            id: "tailwind",
            content: (
                <motion.div
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="text-blue-500 text-4xl lg:text-5xl"
                >
                    <SiTailwindcss />
                </motion.div>
            ),
        },
        {
            id: "node",
            content: (
                <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="text-green-500 text-4xl lg:text-5xl"
                >
                    <FaNodeJs />
                </motion.div>
            ),
        },
    ];

    return (
        <>
            <section className="w-full flex items-center pt-32 px-4 md:pt-20 md:px-8 lg:px-20">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse pt-16 lg:flex-row items-center justify-between gap-12 lg:gap-16">

                        {/* Left Side: Text */}
                        <div className="flex-1 flex flex-col py-10 items-start justify-center max-w-2xl lg:pr-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white"
                            >
                                Hello, I'm <br />
                                <span className="bg-[#C0AA83] shadow-[#C0AA83] text-transparent bg-clip-text ">
                                    Syed Aaliyar
                                </span>
                            </motion.h1>

                            {/* Sub-heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-white"
                            >
                                Front-End Developer | React & Next.js Enthusiast
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.4 }}
                                className="text-base md:text-lg lg:text-xl text-white leading-7 md:leading-8 mb-8 lg:mb-10"
                            >
                                I create <span className="text-white font-medium">modern, responsive, and scalable web apps</span> using cutting-edge technologies like{' '}
                                <span className="text-white">JavaScript</span>,{' '}
                                <span className="text-white">React</span>,{' '}
                                <span className="text-white">Next.js</span>, and{' '}
                                <span className="text-white">Tailwind CSS</span>.
                                With <span className="font-medium text-white">1 year of hands-on experience</span>, I specialize in transforming Figma designs into pixel-perfect, production-ready solutions.
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.6 }}
                                className="flex flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-10"
                            >
                                <a
                                    href="#projects"
                                    className="px-6 lg:px-8 py-3 rounded-full bg-[#C0AA83] text-black font-semibold hover:scale-105 transition shadow-lg hover:shadow-[#D4A373]"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 lg:px-8 py-3 rounded-full text-white border-2 border-[#C0AA83] font-semibold hover:bg-[#C0AA83] hover:text-black transition shadow-lg"
                                >
                                    Let's Connect
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Side: Profile Image */}
                        <div className="flex-1 flex justify-center lg:justify-end items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative"
                            >
                                {/* Golden Glow */}
                                {/* <div className="absolute inset-0 rounded-full bg-[#C0AA83] blur-2xl opacity-30 scale-110 animate-pulse"></div> */}

                                {/* Profile Image */}
                                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-[#C0AA83]/60 shadow-2xl shadow-[#C0AA83]">
                                    <img
                                        src="/hammas.jpg"
                                        alt="Syed Hammas"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Floating Tech Icons */}
            <div className="flex justify-center md:py-20 items-center">
                <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 pointer-events-none">
                    <SlidingLogoMarquee items={techIcons} showControls={false} />
                </div>
            </div>


        </>
    );
}
