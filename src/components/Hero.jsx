import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Network, Database, Code, Globe, Lock, Container, Zap, Workflow, Cloud } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gray-50 dark:bg-black transition-colors duration-300">
                {/* Modern Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >


                            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                AI Engineer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                    Applied GenAI & Backend Systems
                                </span>
                            </h1>

                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                                Hands-on experience in Generative AI, LLM fine-tuning, RAG, and Vision-Language systems.
                                Building scalable, production-ready AI solutions with real-world business impact.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                                >
                                    <span>View Projects</span>
                                    <ArrowRight size={20} />
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-full flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/20 transition-colors"
                                >
                                    Contact Me
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center lg:translate-x-12"
                        >
                            {/* Central Core (Brain) */}
                            <div className="relative z-20 w-32 h-32 flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                                <div className="bg-gray-900/90 dark:bg-gray-900/90 p-6 rounded-full border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-xl relative z-20">
                                    <Brain size={64} className="text-blue-400 drop-shadow-lg" />
                                </div>
                            </div>

                            {/* Inner Orbit - AI/Core (Clockwise) - Hidden on mobile */}
                            <motion.div
                                className="hidden md:block absolute inset-0 z-10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute inset-[18%] border border-gray-700/30 rounded-full"></div>
                                {[
                                    { icon: Code, color: "text-yellow-400", label: "Python" },
                                    { icon: Workflow, color: "text-green-400", label: "LangChain" },
                                    { icon: Database, color: "text-purple-400", label: "RAG" },
                                    { icon: Cpu, color: "text-blue-400", label: "LLMs" }
                                ].map((tech, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{ transform: `rotate(${i * 90}deg) translate(130px)` }}
                                    >
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                            className="flex flex-col items-center justify-center bg-gray-900/80 p-2 rounded-xl border border-gray-800 backdrop-blur-sm"
                                        >
                                            <tech.icon size={20} className={tech.color} />
                                            <span className="text-[10px] font-bold text-gray-300 mt-1 whitespace-nowrap">
                                                {tech.label}
                                            </span>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Outer Orbit - Infra/Backend (Counter-Clockwise) - Hidden on mobile */}
                            <motion.div
                                className="hidden md:block absolute inset-0 z-10"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute inset-0 border border-gray-800/30 rounded-full"></div>
                                {[
                                    { icon: Container, color: "text-blue-500", label: "Docker" },
                                    { icon: Cloud, color: "text-cyan-500", label: "Cloud" },
                                    { icon: Zap, color: "text-green-500", label: "Spring Boot" },
                                    { icon: Network, color: "text-indigo-400", label: "LangGraph" },
                                    { icon: Lock, color: "text-red-400", label: "Security" },
                                    { icon: Globe, color: "text-teal-400", label: "REST API" }
                                ].map((tech, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{ transform: `rotate(${i * 60}deg) translate(240px)` }}
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                            className="flex flex-col items-center justify-center bg-gray-900/80 p-2 rounded-xl border border-gray-800 backdrop-blur-sm"
                                        >
                                            <tech.icon size={20} className={tech.color} />
                                            <span className="text-[10px] font-bold text-gray-300 mt-1 whitespace-nowrap">
                                                {tech.label}
                                            </span>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
