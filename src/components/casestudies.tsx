"use client";

import { motion } from "framer-motion";
import { Brain, Brush, Code2, Rocket } from "lucide-react";
import Image from "next/image";

export default function WorkflowTimeline() {
    const steps = [
        {
            id: 1,
            title: "Discovery",
            desc:
                "Understand goals, users and constraints. Convert ideas into a clear, actionable plan.",
            icon: Brain,
        },
        {
            id: 2,
            title: "Design",
            desc:
                "Wireframes → high-fidelity UI in Figma. Focus on accessibility, consistency and delight.",
            icon: Brush,
        },
        {
            id: 3,
            title: "Development",
            desc:
                "Build fast, responsive, and maintainable UI with Next.js, Tailwind & TypeScript.",
            icon: Code2,
        },
        {
            id: 4,
            title: "Launch",
            desc:
                "Testing, CI/CD, analytics & optimization. Ship to Vercel with confidence.",
            icon: Rocket,
        },
    ];

    return (
        <section id="process" className="relative py-20 text-white">
            <div className="pointer-events-none absolute inset-0" />

            <div className="relative text-center mb-16">
                <h2 className="text-4xl md:text-5xl py-5 font-extrabold text-white">
                    My <span className="text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]">Workflow</span>
                </h2>
                <div className="w-32 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_18px_#22d3ee]" />
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    A clean, repeatable process—from discovery to launch—optimized for
                    quality and speed.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-6">
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full" />

                <ul className="space-y-14">
                    {steps.map((s, idx) => {
                        const Icon = s.icon;
                        const isRight = idx % 2 === 1;

                        return (
                            <motion.li
                                key={s.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative flex flex-col md:flex-row items-center gap-6 ${isRight ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Connector dot (desktop) */}
                                <div className="hidden md:flex items-center justify-center w-14 shrink-0">
                                    <div className="relative">
                                        <span className="absolute inset-0 blur-lg rounded-full" />
                                        <span className="block w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
                                    </div>
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                    className="group relative flex-1 rounded-2xl border border-gray-800 bg-gray-900/70 backdrop-blur-md p-6 shadow-lg hover:border-cyan-400 hover:shadow-[0_0_28px_#22d3ee] transition"
                                >

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5">
                                            <div className="relative">
                                                <span className="absolute -inset-2 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition" />
                                                <Icon className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_12px_#22d3ee]" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300">{s.title}</h3>
                                            <p className="mt-2 text-gray-400 leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>

                                    <div className={`absolute -top-3 ${isRight ? "left-4 md:left-auto md:right-4" : "right-4"}`}>
                                        <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full  text-cyan-300 border border-cyan-400/30">
                                            STEP {s.id}
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.li>
                        );
                    })}
                </ul>

                <div className=" mt-12 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            </div>
        </section>
    );
}
