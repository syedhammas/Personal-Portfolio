"use client";

import { motion } from "framer-motion";
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
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, position: "top-32 left-32" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, position: "top-80 left-80" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, position: "top-20 right-96" },
        { name: "React", icon: <FaReact className="text-cyan-500" />, position: "top-96 left-20" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, position: "top-40 right-40" },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, position: "bottom-80 right-32" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, position: "bottom-32 right-80" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, position: "bottom-60 left-60" },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, position: "top-60 left-96" },
        { name: "Redux", icon: <SiRedux className="text-purple-500" />, position: "bottom-40 left-32" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, position: "top-16 right-32" },
        { name: "jQuery", icon: <SiJquery className="text-blue-400" />, position: "top-12 right-80" },
        { name: "Git", icon: <SiGit className="text-orange-500" />, position: "bottom-20 right-60" },
        { name: "Figma", icon: <FaFigma className="text-blue-600" />, position: "bottom-96 right-20" },
        { name: "npm", icon: <div className="text-red-500 font-bold text-4xl">npm</div>, position: "bottom-16 left-80" },
        { name: "Docker", icon: <SiDocker className="text-blue-500" />, position: "bottom-40 left-32" },

    ];

    return (
        <section className="relative py-20 md:py-30 px-6 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between  gap-12">

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
                        <span className="text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]">Experience</span>
                        <div className="w-42 h-1 bg-cyan-400 mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
                    </motion.h2>


                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-300 text-lg leading-relaxed mb-6 ml-8"
                    >
                        Expert in front-end development including technologies like{" "}
                        <span className="text-cyan-400">HTML5</span>,{" "}
                        <span className="text-cyan-400">CSS3</span>,{" "}
                        <span className="text-cyan-400">JavaScript</span>,{" "}
                        <span className="text-cyan-400">jQuery</span>,{" "}
                        <span className="text-cyan-400">React</span>,{" "}
                        <span className="text-cyan-400">Redux</span>,{" "}
                        <span className="text-cyan-400">Node</span>,{" "}
                        <span className="text-cyan-400">TypeScript</span>,{" "}
                        <span className="text-cyan-400">Bootstrap</span>,{" "}
                        <span className="text-cyan-400">Git</span>, etc.
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
                        <a href="https://linkedin.com" className="text-cyan-400 hover:underline">
                            LinkedIn
                        </a>{" "}
                        profile for more details. Also you can checkout my resume on this{" "}
                        <a href="/resume" className="text-cyan-400 hover:underline">
                            link
                        </a>
                        .
                    </motion.p>
                </div>

                {/* Right Side - Floating Skills */}
                {/* Desktop Layout (absolute positioned) */}
                <div className="hidden md:block relative w-full h-[550px]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8 + (index * 0.15),
                                type: "spring",
                                stiffness: 120,
                                damping: 8
                            }}
                            whileHover={{
                                scale: 1.3,
                                rotate: 10,
                                transition: { duration: 0.3 }
                            }}
                            className={` absolute  pointer-events-auto group cursor-pointer transform-gpu translate-x-20 
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
                              `} >

                            {/* Skill Name (Default State) */}
                            <div className="relative">
                                <motion.span
                                    className="text-cyan-400 text-[12px] md:text-sm lg:text-lg font-semibold block group-hover:opacity-0 transition-opacity duration-300 drop-shadow-lg"
                                    whileHover={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.8)" }}
                                >
                                    {skill.name}
                                </motion.span>

                                {/* Icon (Hover State) */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl md:text-4xl lg:text-5xl"
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    {skill.icon}
                                </motion.div>

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 bg-cyan-400/20 blur-xl transition-opacity duration-300 -z-10"></div>
                            </div>

                            {/* Continuous Floating Animation */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    x: [0, 3, 0, -3, 0],
                                    rotate: [0, 2, 0, -2, 0]
                                }}
                                transition={{
                                    duration: 4 + (index * 0.3),
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                }}
                                className="absolute inset-0"
                            />

                            {/* Particle effect on hover */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                whileHover={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 1, 0],
                                    transition: { duration: 0.6 }
                                }}
                            >
                                <div className="w-2 h-2 bg-cyan-400 rounded-full absolute -top-2 -right-2 opacity-70"></div>
                                <div className="w-1 h-1 bg-cyan-300 rounded-full absolute -bottom-1 -left-1 opacity-60"></div>
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full absolute top-1/2 -right-3 opacity-50"></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Layout (grid view) */}
                <div className="grid grid-cols-3 gap-19 md:hidden justify-center items-center">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center group cursor-pointer"
                        >
                            <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                            <span className="mt-2 text-sm text-cyan-400">{skill.name}</span>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}