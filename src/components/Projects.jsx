import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Cpu, Database, X, ZoomIn } from 'lucide-react';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            title: "WalkSense - Vision-Language AI System",
            description: "Safety-first navigation system with isolated perception layers. Decouples safety-critical obstacle detection from high-level scene reasoning to ensure deterministic alerts while providing rich environmental context.",
            architecture: "Safety-Isolated Dual-Stream Architecture: A 'Safety Layer' runs deterministic YOLO detection for immediate hazard alerts. Parallelly, a 'Reasoning Layer' samples frames for Qwen3-VLM to generate scene descriptions. A Fusion Engine & Decision Router orchestrate outputs via TTS.",
            features: [
                "Isolated Safety Layer (Rule-Based Logic)",
                "Dual-Stream Perception (YOLO + Qwen3-VLM)",
                "Context-Aware Orchestration & Fusion"
            ],
            techStack: ["PyTorch", "YOLO", "Qwen3-VLM", "Fusion Engine", "TTS/STT"],
            image: "/walksense_2.png",
            archImage: "/walksense_architecture.png",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Facial Recognition System (Edge AI)",
            description: "Identity verification system for workforce attendance using ArcFace embeddings. Deployed on Android with TensorFlow Lite for offline, real-time inference.",
            architecture: "On-Device Inference Pipeline: Face detection (RetinaFace) -> Alignment -> Feature Extraction (ArcFace MobileNet). Embeddings are matched against a local vector database encrypted on the device.",
            features: [
                "10,000+ Identity Scale",
                "Sub-500ms Verification Time",
                "Anti-Spoofing Liveness Check"
            ],
            techStack: ["TensorFlow Lite", "Android SDK", "SQLite", "Python"],
            image: "/fr_1.png",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Poultry Disease Severity Detection",
            description: "AI-enabled mobile app for assessing poultry disease severity using computer vision. Features preprocessing pipelines for real-world image variations.",
            architecture: "Mobile-First Computer Vision: Custom CNN allows for lightweight classification. Image preprocessing pipeline handles low-light and noisy field conditions before model inference.",
            features: [
                "Severity Scoring Algorithm",
                "Offline Logic Support",
                "Geo-tagged Reports"
            ],
            techStack: ["CV/ML", "FastAPI", "React Native", "PostgreSQL"],
            image: "/pd_1.png",
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <>
            <section id="projects" className="py-20 bg-white dark:bg-black relative transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                            >
                                <div className="aspect-[3/2] bg-gray-100 dark:bg-gray-800 relative flex items-center justify-center overflow-hidden">
                                    {project.image ? (
                                        <>
                                            {/* Blurred background fill */}
                                            <img
                                                src={project.image}
                                                alt=""
                                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 dark:opacity-30 scale-110"
                                            />
                                            {/* Sharp fitting foreground */}
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                                            />
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                            <Code size={48} className="text-gray-400 dark:text-gray-700 group-hover:text-purple-500 transition-colors" />
                                        </div>
                                    )}
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{project.title}</h3>
                                        <div className="flex gap-2">
                                            <a href={project.links.github} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                                                <Github size={20} className="text-gray-600 dark:text-gray-300" />
                                            </a>
                                            <a href={project.links.demo} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                                                <ExternalLink size={20} className="text-gray-600 dark:text-gray-300" />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mb-6 bg-gray-100 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <h4 className="flex items-center text-sm font-bold text-gray-900 dark:text-white mb-3">
                                            <Layers size={16} className="mr-2 text-blue-500" />
                                            System Architecture
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                            {project.architecture}
                                        </p>
                                        {project.archImage && (
                                            <button
                                                onClick={() => setSelectedImage(project.archImage)}
                                                className="w-full mt-2 flex items-center justify-center space-x-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                            >
                                                <ZoomIn size={16} />
                                                <span>View System Diagram</span>
                                            </button>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="flex items-center text-sm font-bold text-gray-900 dark:text-white mb-3">
                                            <Cpu size={16} className="mr-2 text-purple-500" />
                                            Key Features
                                        </h4>
                                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                                        {project.techStack.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-900/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="System Architecture"
                                className="w-full h-full object-contain max-h-[85vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;
