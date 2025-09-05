"use client";

import { Code2, Figma, LayoutDashboard } from "lucide-react";

export default function Services() {

    const services = [
        {
            icon: <Code2 className="w-10 h-10 text-[#C0AA83]" />,
            title: "Web Development",
            desc: "Building fast, responsive, and scalable websites using Next.js, React, and Tailwind CSS with modern best practices.",
        },
        {
            icon: <Figma className="w-10 h-10 text-[#C0AA83]" />,
            title: "Figma Design to Code",
            desc: "Converting Figma designs into pixel-perfect, responsive, and functional websites with clean and optimized code.",
        },
        {
            icon: <LayoutDashboard className="w-10 h-10 text-[#C0AA83]" />,
            title: "UI/UX Design",
            desc: "Designing intuitive and user-friendly interfaces that enhance user experience and bring ideas to life with creativity.",
        },
    ];


    return (
        <section
            id="services"
            className="py-24 px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-12">
                Our <span className="text-[#C0AA83]">Services </span>
                <div className="w-42 h-1 bg-[#C0AA83] mt-4 rounded-full shadow-[0_0_20px_#C0AA83] mx-auto"></div>

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
                        className="relative border border-[#C0AA83] text-white p-8 rounded-xl overflow-hidden group shadow-[0_0_20px_4px_rgba(192,170,131,0.8)] 
        transition-all duration-500 ease-out hover:shadow-[0_0_30px_8px_rgba(192,170,131,1)] hover:-translate-y-2 hover:scale-[1.03] animate-fadeInScale"
                    >


                        {/* Card Content */}
                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-300 mb-6">{service.desc}</p>
                            <button className="px-6 py-2 rounded-full border-2 border-[#C0AA83] text-[#C0AA83] hover:bg-[#C0AA83] hover:text-gray-900 transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
