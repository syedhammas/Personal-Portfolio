"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaBootstrap,
    FaFigma,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiJavascript,
    SiNextdotjs,
    SiTypescript,
    SiGit,
    SiRedux,
    SiDocker,
    SiNodedotjs,
    SiMongodb,
    SiJquery,
} from "react-icons/si";



export default function Skills() {

    const GROUP_SIZE = 3;
    const INTERVAL_MS = 4000;

    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "Figma", icon: <FaFigma className="text-blue-600" /> },
        { name: "npm", icon: <div className="text-red-500 font-bold text-4xl">npm</div> },
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },

    ];

    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setStartIndex((prev) => (prev + GROUP_SIZE) % skills.length);
        }, INTERVAL_MS);
        return () => clearInterval(id);
    }, [skills.length]);


    const isActive = (i: number) => {
        const diff = (i - startIndex + skills.length) % skills.length;
        return diff >= 0 && diff < GROUP_SIZE;
    };


    return (
        <section
            id="skills"
            className="relative py-20 md:py-30 px-6 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">

                {/* Left Side Content */}
                <div className="relative z-10 sm:w-full md:w-[65%]">

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight ml-8"
                    >
                        Skills &<br />
                        <span className="text-[#C0AA83]">
                            Experience
                        </span>
                        <div className="w-42 h-1 bg-[#C0AA83] mt-4 rounded-full shadow-[0_0_20px_#C0AA83]"></div>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-300 text-lg leading-relaxed mb-6 ml-8"
                    >
                        Expert in front-end development including technologies like{" "}
                        <span className="text-[#C0AA83]">HTML5</span>,{" "}
                        <span className="text-[#C0AA83]">CSS3</span>,{" "}
                        <span className="text-[#C0AA83]">JavaScript</span>,{" "}
                        <span className="text-[#C0AA83]">jQuery</span>,{" "}
                        <span className="text-[#C0AA83]">React</span>,{" "}
                        <span className="text-[#C0AA83]">Redux</span>,{" "}
                        <span className="text-[#C0AA83]">Node</span>,{" "}
                        <span className="text-[#C0AA83]">TypeScript</span>,{" "}
                        <span className="text-[#C0AA83]">Bootstrap</span>,{" "}
                        <span className="text-[#C0AA83]">Git</span>, etc.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-gray-300 text-lg leading-relaxed mb-8 ml-8"
                    >
                        I'm not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-300 text-lg mb-8 ml-8"
                    >
                        Visit my{" "}
                        <a href="https://linkedin.com" className="text-[#C0AA83] hover:underline">
                            LinkedIn
                        </a>{" "}
                        profile for more details. Also you can checkout my resume on this{" "}
                        <a href="/resume" className="text-[#C0AA83] hover:underline">
                            link
                        </a>
                        .
                    </motion.p>
                </div>

                {/* Right Side - Floating Skills */}
                <div className="hidden md:block relative w-full h-[550px]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8 + index * 0.15,
                                type: "spring",
                                stiffness: 120,
                                damping: 8,
                            }}
                            whileHover={{ scale: 1.3, rotate: 10, transition: { duration: 0.3 } }}
                            className={`absolute pointer-events-auto mt-4 group cursor-pointer transform-gpu ${skill}
                             ${index === 0 ? 'top-6 left-55' : ''}
                              ${index === 1 ? 'top-24 left-35' : ''}
                              ${index === 2 ? 'top-4 right-20' : ''}
                              ${index === 3 ? 'top-40 right-10' : ''}
                              ${index === 4 ? 'top-48 left-52' : ''}
                              ${index === 5 ? 'bottom-48 right-28' : ''}
                              ${index === 6 ? 'bottom-40 right-6' : ''}
                              ${index === 7 ? 'bottom-38 left-65' : ''}
                              ${index === 8 ? 'top-16 left-74' : ''}
                              ${index === 9 ? 'bottom-16 left-78' : ''}
                              ${index === 10 ? 'top-40 right-36' : ''}
                              ${index === 11 ? 'top-12 right-52' : ''}
                              ${index === 12 ? 'bottom-12 right-16' : ''}
                              ${index === 13 ? 'bottom-60 left-34' : ''}  
                              ${index === 14 ? 'bottom-24 right-52' : ''}  
                              ${index === 15 ? 'top-62 right-72' : ''}
                              `}>

                            <div className="relative flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {isActive(index) ? (
                                        <motion.div
                                            key={`icon-${index}-${startIndex}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            {skill.icon}
                                        </motion.div>
                                    ) : (
                                        <motion.span
                                            key={`text-${index}-${startIndex}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-[#C0AA83] text-[12px] md:text-sm lg:text-lg font-semibold block drop-shadow-lg"
                                        >
                                            {skill.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 bg-[#C0AA83]/20 blur-xl transition-opacity duration-300 -z-10"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
}