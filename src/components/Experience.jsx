import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Senior Software Engineer",
            company: "Long Health",
            period: "02/2024 - 01/2025",
            description: [
                "Designed and implemented an LLM-powered Retrieval-Augmented Generation (RAG) system for healthcare guidelines and workflows.",
                "Built document ingestion and vector-based semantic search pipelines for grounded responses.",
                "Integrated GenAI services with FastAPI and Spring Boot, exposing AI insights to enterprise applications.",
                "Implemented real-time data pipelines using Kafka and Elasticsearch, reducing referral processing latency by ~40%."
            ]
        },
        {
            role: "Software Engineer",
            company: "Esmito Solutions",
            period: "08/2023 - 01/2024",
            description: [
                "Contributed to AI-enabled battery analytics systems for EV battery-swapping stations using telemetry data.",
                "Implemented battery health and eligibility logic (charge cycles, voltage, temperature) for safe battery release.",
                "Built real-time data ingestion and aggregation pipelines for battery and charging-station analytics.",
                "Designed an internal RAG system to query battery SOPs and station manuals."
            ]
        },
        {
            role: "Software Development Engineer (R & D)",
            company: "Ignisnova Robotics Pvt. Ltd.",
            period: "06/2021 - 07/2023",
            description: [
                "Designed an AI-driven analytics platform for crop monitoring and disease surveillance.",
                "Implemented computer-vision-based disease detection and severity classification.",
                "Developed risk scoring logic to identify early crop stress and potential disease outbreaks.",
                "Generated ML-assisted recommendations for irrigation, fertilization, and pesticide usage, improving planning efficiency by ~80%.",
                "Deployed scalable backend services on cloud infrastructure (GCP)."
            ]
        }
    ];

    const education = [
        {
            degree: "MTech in Artificial Intelligence & Machine Learning",
            school: "BITS Pilani",
            period: "05/2024 - Present"
        },
        {
            degree: "BE in Computer Engineering",
            school: "SIGCE (Navi Mumbai)",
            period: "01/2017 - 06/2021"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-black relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Work Experience */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-gray-800 hover:border-purple-500 transition-colors"
                            >
                                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-black"></span>

                                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center text-gray-400 text-sm mt-1 sm:mt-0">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="flex items-center text-blue-400 mb-4 font-medium">
                                    <Briefcase size={16} className="mr-2" />
                                    {exp.company}
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-400">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education Divider */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="border-t border-gray-200 dark:border-gray-800 my-12"
                    ></motion.div>

                    {/* Education */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                            <GraduationCap className="mr-3 text-purple-500" />
                            Education
                        </h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900/30 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors shadow-sm dark:shadow-none"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
                                        <Calendar size={14} className="mr-2" />
                                        {edu.period}
                                    </span>
                                </div>
                                <div className="text-blue-400 font-medium">
                                    {edu.school}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
