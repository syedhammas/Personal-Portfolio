"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Globe from "./globe";


export default function ContactSection8() {

    console.log(
        "Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        "Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        "Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );


    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

            )
            .then(
                () => {
                    setStatus("✅ Request sent successfully!");
                    form.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    setStatus("❌ Failed to send request. Try again.");
                }
            );
    };

    return (
        <section id="contact" className="relative text-white py-20 px-6">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-24 leading-tight text-center"
            >
                <span className="text-[#C0AA83]">Contact</span> US
            </motion.h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                {/* Left - Map & Contact Info */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 flex flex-col items-center md:items-center text-center"
                >
                    <div>
                        <Globe />
                        <h3 className="text-lg font-semibold text-[#C0AA83]">Find Me</h3>
                    </div>

                    <div className="space-y-4 text-sm">
                        <p className="flex items-center gap-3">
                            <Phone className="text-[#C0AA83]" size={18} /> +92 (370) 9531708
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="text-[#C0AA83]" size={18} /> SyedAaliyar786@gmail.com
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin className="text-[#C0AA83]" size={18} /> Islamabad, Pakistan
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
                    <h3 className="text-2xl font-semibold mb-4 text-[#C0AA83]">
                        Request a Consultation
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Full Name"
                            required
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0AA83]"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0AA83]"
                        />
                        <input
                            type="text"
                            name="user_phone"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0AA83]"
                        />
                        <input
                            type="text"
                            name="project_type"
                            placeholder="Project Type"
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0AA83]"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0AA83] min-h-[120px]"
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-[#C0AA83] text-black font-semibold py-3 rounded-lg hover:bg-[#C0AA83]/40 transition"
                        >
                            Submit Request
                        </motion.button>
                    </form>

                    {status && (
                        <p className="mt-2 text-sm text-center">{status}</p>
                    )}
                </motion.div>

                {/* Right - Info */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 text-sm text-gray-300"
                >
                    <h3 className="text-2xl font-semibold text-[#C0AA83]">
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
