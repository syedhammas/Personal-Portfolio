"use client";
import { motion } from "framer-motion";
import { FaUserAlt, FaMapMarkerAlt, FaBriefcase, FaLaptopCode, FaDownload } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-28 px-6 md:px-16 flex justify-center items-center overflow-hidden bg-transparent"
        >

            {/* Glassmorphism Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl w-full relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-10 md:p-16"
            >
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center md:text-left"
                >
                    About Me
                </motion.h2>
                <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-12 mx-auto md:mx-0"></div>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-100/90 text-lg md:text-xl leading-relaxed mb-14 text-center md:text-left"
                >
                    Hi, I’m <span className="font-semibold text-cyan-400">Syed Hammas</span>, a passionate{" "}
                    <span className="font-semibold text-purple-400">Frontend Developer</span> based in Islamabad, Pakistan.
                    With <span className="text-cyan-300 font-medium">1 year of hands-on experience</span>, I build modern, responsive, and user-friendly web applications using{" "}
                    <span className="text-cyan-300 font-medium">React</span>, <span className="text-cyan-300 font-medium">Next.js</span>, and{" "}
                    <span className="text-cyan-300 font-medium">Tailwind CSS</span>.
                    I specialize in converting <span className="text-purple-400 font-medium">Figma designs</span> into pixel-perfect, production-ready websites. 🚀
                </motion.p>

                {/* Info Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "Name", value: "Syed Hammas", icon: <FaUserAlt /> },
                        { title: "Location", value: "Islamabad, PK", icon: <FaMapMarkerAlt /> },
                        { title: "Experience", value: "1 Year", icon: <FaBriefcase /> },
                        { title: "Role", value: "Frontend Dev", icon: <FaLaptopCode /> },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08, rotate: 3 }}
                            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col items-center gap-3 transition-all duration-50 hover:shadow-cyan-500/30"
                        >
                            <div className="text-cyan-400 text-3xl">{item.icon}</div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-gray-300 text-md">{item.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center md:text-left">
                        Skills
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Next.js",
                            "Node.js",
                            "Tailwind CSS",
                            "Figma to Code",
                        ].map((skill, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ scale: 1.20 }}
                                className="px-5 py-2 text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 rounded-full shadow-md hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col md:flex-row gap-6 mt-10 justify-center md:justify-start">
                    <a
                        href="/cv.pdf"
                        download
                        className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 text-lg px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition font-semibold shadow-lg"
                    >
                        <FaDownload /> Download CV
                    </a>
                    <a
                        href="#contact"
                        className="bg-cyan-400 text-white text-lg px-8 py-3 rounded-xl hover:from-cyan-800 font-semibold shadow-lg"
                    >
                        Hire Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
