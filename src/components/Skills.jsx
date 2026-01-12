import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const primarySkills = [
        { category: "Generative AI & LLMs", items: ["RAG", "VLMs", "Fine-tuning", "Prompt Engineering", "LangChain", "Hugging Face"] },
        { category: "Computer Vision", items: ["YOLO", "OpenCV", "ArcFace", "Object Detection", "Image Segmentation"] },
        { category: "Core AI/ML", items: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Deep Learning"] }
    ];

    const secondarySkills = [
        { category: "Backend Engineering", items: ["Java", "Spring Boot", "FastAPI", "Python", "Microservices", "REST APIs"] },
        { category: "Data & Cloud", items: ["SQL", "MongoDB", "Kafka", "Elasticsearch", "AWS", "GCP"] },
        { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "CI/CD", "Git", "Prometheus", "Grafana"] }
    ];

    const renderSkillSection = (title, skills, delayOffset) => (
        <div className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pl-4 border-l-4 border-blue-500">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + delayOffset }}
                        className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none"
                    >
                        <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-20 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                {renderSkillSection("Primary Skills", primarySkills, 0)}
                {renderSkillSection("Secondary Skills", secondarySkills, 0.3)}
            </div>
        </section>
    );
};

export default Skills;
