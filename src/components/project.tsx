// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//     {
//         title: "Eagle-FC-Website",
//         desc: "A modern website for a fictional football club. Built with Next.js and Tailwind CSS, deployed on Vercel.",
//         image: "/eagle.png",
//         tags: ["Next.js", "Tailwind CSS", "Vercel"],
//     },
//     {
//         title: "GamePro Host",
//         desc: "An online platform offering game hosting services, player statistics, and community features. Fully responsive and deployed via Vercel.",
//         image: "/game-pro.png",
//         tags: ["React", "Tailwind CSS", "Vercel"],
//     },
//     {
//         title: "Comerzio",
//         desc: "A commerce-focused app for showcasing and managing products. Built using React and Node.js, hosted on Fly.io.",
//         image: "/eagle.png",
//         tags: ["React", "Node.js", "Fly.io"],
//     },
//     {
//         title: "Nutritionist",
//         desc: "Personalized nutrition coaching platform with user dashboard and appointment booking.",
//         image: "/eagle.png",
//         tags: ["Next.js", "Tailwind CSS"],
//     },
//     {
//         title: "Portfolio Website",
//         desc: "Personal portfolio website to showcase projects and skills. Built with Next.js and Tailwind CSS.",
//         image: "/eagle.png",
//         tags: ["Next.js", "Tailwind CSS"],
//     },
//     {
//         title: "Digital Solutions",
//         desc: "Landing page for digital solutions and SaaS products. Responsive and modern UI.",
//         image: "/eagle.png",
//         tags: ["React", "Tailwind CSS"],
//     },
// ];

// export default function Project() {
//     return (
//         <section className="relative py-28 px-6 md:px-16 flex justify-center items-center overflow-hidden bg-transparent">
//             {/* Decorative Blobs */}
//             <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-400/30 rounded-full filter blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
//             <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/30 rounded-full filter blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-100/60 via-white/0 to-white/0 rounded-full blur-2xl opacity-40 pointer-events-none"></div>

//             <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="max-w-6xl w-full relative z-10 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-0 md:p-0"
//             >
//                 <div className="px-6 md:px-16 pt-10">
//                     <motion.h2
//                         initial={{ opacity: 0, y: -30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7 }}
//                         className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center md:text-left"
//                     >
//                         Featured Projects
//                     </motion.h2>
//                     <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-12 mx-auto md:mx-0"></div>
//                     <p className="text-gray-100/90 text-lg md:text-xl leading-relaxed mb-14 text-center md:text-left">
//                         Explore some of my recent work and personal projects
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-16">
//                     {projects.map((project, idx) => (
//                         <motion.div
//                             key={idx}
//                             whileHover={{ scale: 1.04, rotate: 1 }}
//                             className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg flex flex-col transition-all duration-200 hover:shadow-cyan-500/30"
//                         >
//                             <div className="w-full h-48 bg-gray-800">
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="object-cover w-full h-full"
//                                 />
//                             </div>
//                             <div className="p-6 flex-1 flex flex-col">
//                                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                                 <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>
//                                 <div className="flex flex-wrap gap-2 mt-auto">
//                                     {project.tags.map((tag, i) => (
//                                         <span
//                                             key={i}
//                                             className="bg-white/10 border border-cyan-400 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </motion.div>
//         </section>
//     );
// }