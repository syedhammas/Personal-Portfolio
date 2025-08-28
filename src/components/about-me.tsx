"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutMe() {

    const shortBio = "Hi, I'm Syed Aliyar, a passionate Front-End Developer based in Islamabad, Pakistan. With 1 year of hands-on experience, I build modern, responsive, and user-friendly web applications using React, Next.js, and Tailwind CSS.";

    const fullBio = "Hi, I'm Syed Aliyar, a passionate Front-End Developer based in Islamabad, Pakistan. With 1 year of hands-on experience, I build modern, responsive, and user-friendly web applications using React, Next.js, and Tailwind CSS. I specialize in converting Figma designs into pixel-perfect, production-ready websites. My expertise includes creating scalable applications with modern JavaScript frameworks, implementing responsive designs, and optimizing user experiences. I'm dedicated to writing clean, maintainable code and staying updated with the latest web development trends and technologies.";

    const [currentLine, setCurrentLine] = useState(0);

    const codeLines = [
        "import React from 'react';",
        "import Skills from './components/Skills';",
        "import Projects from './components/Projects';",
        "",
        "const AboutMe = () => (",
        "  <div className=\"container\">",
        "    <h1>Syed Aliyar</h1>",
        "    <h2>Frontend Developer</h2>",
        "    <Skills />",
        "    <Projects />",
        "  </div>",
        ");",
        "",
        "export default AboutMe;"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentLine(prev => (prev < codeLines.length - 1 ? prev + 1 : 0));
        }, 800);

        return () => clearInterval(timer);
    }, []);

    return (

        <section
            id="about"
            className="relative py-12 md:py-42 px-6 md:px-16 flex justify-center items-center overflow-hidden bg-transparent"
        >
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

                    {/* left Side: Content */}
                    <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_25px_#22d3ee] font-extrabold mb-4 text-white text-center lg:text-left">
                                About <span className="text-cyan-400">Me</span>
                            </h2>
                            <div className="w-32 h-1 bg-cyan-400 mt-4 rounded-full shadow-[0_0_18px_#22d3ee]" />
                        </motion.div>

                        {/* Role */}
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 text-center lg:text-left"
                        >
                            ▶ Front-End Developer
                        </motion.h3>

                        {/* Bio Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 lg:text-left"
                        >
                            {fullBio || shortBio}
                        </motion.p>

                        {/*  Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-row sm:flex-row gap-4 items-center lg:items-start w-full lg:w-auto"
                        >
                            <a
                                href="/about"
                                className="px-8 py-3 rounded-full bg-cyan-400 text-black text-base font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
                            >
                                View Full About
                            </a>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6 mt-10 w-full max-w-md"
                        >
                            <div className="text-center lg:text-left">
                                <h4 className="text-2xl font-bold text-cyan-400">1+</h4>
                                <p className="text-gray-300 text-sm">Years Experience</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h4 className="text-2xl font-bold text-cyan-400">10+</h4>
                                <p className="text-gray-300 text-sm">Projects Completed</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Code Editor Mockup */}

                    <div className="relative w-full h-full max-w-md lg:max-w-lg xl:max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800"
                        >
                            {/* Editor Header */}
                            <div className="flex items-center px-4 py-3 bg-cyan-400 border-b border-gray-700">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-white"></div>
                                    <div className="w-3 h-3 rounded-full bg-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-cyan-900"></div>
                                </div>
                                <div className="ml-4 text-lg text-black">about-me</div>
                            </div>

                            {/* Code Content */}
                            <div className="p-4 font-mono text-sm md:text-base">
                                {codeLines.map((line, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: index <= currentLine ? 1 : 0,
                                            x: index <= currentLine ? 0 : -10,
                                            backgroundColor: index === currentLine ? 'rgba(6, 182, 212, 0.1)' : 'transparent'
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="flex py-1 px-2 rounded"
                                    >
                                        {/* Line Numbers */}
                                        <span className="text-gray-600 select-none mr-4 w-6 text-right">
                                            {index + 1}
                                        </span>

                                        {/* Syntax Highlighted Code */}
                                        <span
                                            className={
                                                line.includes('import') ? 'text-cyan-400' :
                                                    line.includes('const') || line.includes('export') ? 'text-cyan-400' :
                                                        line.includes('<') ? 'text-cyan-400' :
                                                            line.includes('Syed Aliyar') || line.includes('Frontend Developer') ? 'text-cyan-400' :
                                                                'text-gray-300'
                                            }
                                        >
                                            {line}
                                        </span>

                                        {/* Blinking Cursor */}
                                        {index === currentLine && (
                                            <motion.span
                                                animate={{ opacity: [1, 0] }}
                                                transition={{ duration: 0.7, repeat: Infinity }}
                                                className="ml-1 bg-cyan-400 w-2 h-5 inline-block"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>


                            {/* Editor Footer */}
                            <div className="px-4 py-2 bg-cyan-400 border-t border-gray-700 text-xs text-gray-500 flex justify-between">
                                <div className="flex items-center text-black text-lg">
                                    <span className="mr-2">main</span>
                                    <span>UTF-8</span>
                                </div>
                                <div className="text-black text-lg">React.js</div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-4 -right-4 bg-cyan-800 text-gray-900 font-bold text-xs px-3 py-1 rounded-lg shadow-lg"
                        >
                            React
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="absolute -top-4 -left-4 bg-cyan-800 text-gray-900 font-bold text-xs px-3 py-1 rounded-lg shadow-lg"
                        >
                            Next.js
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
