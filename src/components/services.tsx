"use client";

import { Code2, Figma, LayoutDashboard } from "lucide-react";

export default function Services() {

    const services = [
        {
            icon: <Code2 className="w-10 h-10 text-cyan-400" />,
            title: "Web Development",
            desc: "Building fast, responsive, and scalable websites using Next.js, React, and Tailwind CSS with modern best practices.",
        },
        {
            icon: <Figma className="w-10 h-10 text-cyan-400" />,
            title: "Figma Design to Code",
            desc: "Converting Figma designs into pixel-perfect, responsive, and functional websites with clean and optimized code.",
        },
        {
            icon: <LayoutDashboard className="w-10 h-10 text-cyan-400" />,
            title: "UI/UX Design",
            desc: "Designing intuitive and user-friendly interfaces that enhance user experience and bring ideas to life with creativity.",
        },
    ];


    return (
        <section className="py-24 px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-12">
                Our <span className="text-cyan-400">Services</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                I specialize in creating modern and responsive digital solutions.
                From turning Figma designs into real websites, to crafting seamless
                UI/UX experiences and building scalable web applications — I deliver
                clean, optimized, and user-focused results.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-3 py-16 gap-12 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative text-white p-8 rounded-xl shadow-lg overflow-hidden group   transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)]"
                    >
                        {/* 🔹 Animated Gradient Border */}
                        <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-transparent to-cyan-400 animate-border-rotate">
                            <div className="h-full w-full rounded-xl"></div>
                        </div>

                        {/* Card Content */}
                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-300 mb-6">{service.desc}</p>
                            <button className="px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
