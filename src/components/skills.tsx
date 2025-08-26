"use client";

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
    SiGithub,
    SiRedux,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
} from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    ];

    return (
        <section className="py-20 bg-transparent">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 mt-[150px]">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300"
                        >
                            <div className="text-6xl mb-3">{skill.icon}</div>
                            <p className="text-white text-lg group-hover:text-cyan-400 transition-colors">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
