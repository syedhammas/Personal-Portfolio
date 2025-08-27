"use client";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto py-20 bg-black text-white">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    My <span className="text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]">Projects</span>
                </h2>
                <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                    A collection of my recent work showcasing creativity, modern UI, and performance.
                </p>
                <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_20px_#22d3ee]"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-12">
                {[1, 2, 3, 4, 5, 6].map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_30px_#22d3ee] transition duration-300"
                    >
                        {/* Project Image with Overlay */}
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={`https://picsum.photos/500/300?random=${i}`}
                                alt="Project"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                                <a
                                    href="#"
                                    className="px-4 py-2 text-sm font-semibold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-cyan-300 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-cyan-300">Project Title</h3>
                            <p className="text-gray-400 text-sm mt-2">
                                Short description about the project. Highlights features and stack.
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">React</span>
                                <span className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">Next.js</span>
                                <span className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">Tailwind</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4 mt-6">
                                <a href="#" className="px-4 py-2 text-sm font-semibold text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 transition shadow-md">
                                    Live Demo
                                </a>
                                <a href="#" className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
