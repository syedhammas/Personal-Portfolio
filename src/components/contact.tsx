"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection8() {
    return (
        <section
            id="contact"
            className="relative text-white py-20 px-6">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-24 leading-tight text-center"
            >
                <span className="text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]">Contact</span> US
                <div className="w-42 h-1 bg-cyan-400 mt-4 rounded-full shadow-[0_0_20px_#22d3ee] mx-auto"></div>
            </motion.h2>


            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

                {/* Left - Map & Contact Info */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="w-full h-56 rounded-lg overflow-hidden relative">
                        {/* Dummy map */}
                        <img
                            src="/map.webp"
                            alt="Map"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <MapPin className="text-cyan-400 w-10 h-10 drop-shadow-lg" />
                        </div>
                    </div>

                    <div className="space-y-4 text-sm">
                        <p className="flex items-center gap-3">
                            <Phone className="text-cyan-400" size={18} /> +92 (370) 9531708
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="text-cyan-400" size={18} /> SyedAliyar786@gmail.com
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin className="text-cyan-400" size={18} /> Islamabad, Pakistan
                        </p>
                    </div>
                </motion.div>

                {/* Middle - Form */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    className="space-y-4"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                        Request a Consultation
                    </h3>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="text"
                        placeholder="Project Type"
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 transition"
                    >
                        Submit Request
                    </motion.button>
                </motion.div>

                {/* Right - Info */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 text-sm text-gray-300"
                >
                    <h3 className="text-2xl font-semibold text-cyan-400">
                        Things to Know
                    </h3>

                    <div>
                        <h4 className="text-white font-semibold">Pricing & Timeline</h4>
                        <p>
                            We request budgets that allow for custom, detailed work on all
                            projects. Your project’s complexity and our queue determine the
                            price and the timeline.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold">Preferred Project Type</h4>
                        <p>
                            We’re small on purpose, which makes us particular about the
                            projects we take. We value trust, long-term partnerships.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold">Get Started</h4>
                        <p>
                            Get in touch and we’ll send a questionnaire to determine if we’re
                            the right fit for each other. Assuming we are, we’ll provide a
                            ballpark estimate and go from there.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
