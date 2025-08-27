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
                    className="text-cyan-400 text-4xl lg:text-5xl"
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
                    className="text-gray-300 text-4xl lg:text-5xl"
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
                    className="text-cyan-400 text-4xl lg:text-5xl"
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
                    className="text-green-400 text-4xl lg:text-5xl"
                >
                    <FaNodeJs />
                </motion.div>
            ),
        },
    ];

    return (
        <>
            <section className="w-full flex items-center pt-32 px-4 md:pt-48 md:px-8 lg:px-20 bg-transparent">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse pt-16 lg:flex-row items-center justify-between gap-12 lg:gap-16">

                        {/* Left Side: Text Content */}
                        <div className="flex-1 flex flex-col py-10 items-start justify-center max-w-2xl lg:pr-8">
                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-xl leading-tight text-white"
                            >
                                Hi, I'm <br /><span className="text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]">Syed Hammas</span>
                            </motion.h1>

                            {/* Sub-heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-200"
                            >
                                Front-End Developer | React & Next.js Enthusiast
                            </motion.h2>

                            {/* Bio */}
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.4 }}
                                className="text-base md:text-lg lg:text-xl text-gray-300 leading-7 md:leading-8 mb-8 lg:mb-10"
                            >
                                I create <span className="text-cyan-400 font-medium">modern, responsive, and scalable web apps</span> using cutting-edge technologies like{' '}
                                <span className="text-cyan-400">JavaScript</span>,{' '}
                                <span className="text-cyan-400">React</span>,{' '}
                                <span className="text-cyan-400">Next.js</span>, and{' '}
                                <span className="text-cyan-400">Tailwind CSS</span>.
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
                                    className="px-6 lg:px-8 py-3 rounded-full bg-cyan-400 text-black text-base lg:text-lg font-semibold hover:bg-cyan-300 transition duration-300 shadow-lg hover:shadow-cyan-400/25"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 lg:px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 text-base lg:text-lg font-semibold hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg"
                                >
                                    Let's Connect
                                </a>
                            </motion.div>

                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                                className="flex gap-6 text-3xl lg:text-4xl text-gray-400 mb-8 lg:mb-10"
                            >
                                <a href="https://github.com/syedhammas/" target="_blank" className="hover:text-cyan-400 transition duration-300">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/" target="_blank" className="hover:text-cyan-400 transition duration-300">
                                    <FaLinkedin />
                                </a>
                                <a href="https://https://x.com/SyedHammas15955/" target="_blank" className="hover:text-cyan-400 transition duration-300">
                                    <FaTwitter />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Side: Profile Image */}
                        <div className="flex-1 flex justify-center lg:justify-end items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="relative"
                            >
                                {/* Glowing Background Circle */}
                                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-30 scale-110 animate-pulse"></div>

                                {/* Main Image Container */}
                                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/20">
                                    {/* Profile Image */}
                                    <img
                                        src="/hammas.jpg"
                                        alt="Syed Hammas"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
                                </div>

                                {/* Floating Tech Icons around the image */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {/* Top Right */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                            y: { duration: 3, repeat: Infinity }
                                        }}
                                        className="absolute -top-4 -right-4 text-cyan-400 text-3xl lg:text-4xl"
                                    >
                                        <FaReact />
                                    </motion.div>

                                    {/* Bottom Left */}
                                    <motion.div
                                        animate={{
                                            rotate: [360, 0],
                                            y: [0, 10, 0]
                                        }}
                                        transition={{
                                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                            y: { duration: 4, repeat: Infinity }
                                        }}
                                        className="absolute -bottom-4 -left-4 text-yellow-400 text-3xl lg:text-4xl"
                                    >
                                        <SiJavascript />
                                    </motion.div>

                                    {/* Top Left */}
                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                            x: [0, 5, 0]
                                        }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        className="absolute -top-6 -left-6 text-gray-300 text-3xl lg:text-4xl"
                                    >
                                        <SiNextdotjs />
                                    </motion.div>

                                    {/* Bottom Right */}
                                    <motion.div
                                        animate={{
                                            y: [0, 12, 0],
                                            x: [0, -5, 0]
                                        }}
                                        transition={{ duration: 6, repeat: Infinity }}
                                        className="absolute -bottom-6 -right-6 text-green-400 text-3xl lg:text-4xl"
                                    >
                                        <FaNodeJs />
                                    </motion.div>
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
