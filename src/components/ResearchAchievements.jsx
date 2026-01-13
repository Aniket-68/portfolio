import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink, FileText, Trophy, Star, Calendar, Users } from 'lucide-react';

const ResearchAchievements = () => {
    const researchPapers = [
        {
            title: "Intelligent Traffic Lights using LI-Fi Technology",
            authors: ["Omkar N Chorge", "Aniket A Chauhan", "Riddhi Chaudhari", "Dr. Kishor T Patil"],
            journal: "JETIR - Journal of Emerging Technologies and Innovative Research",
            volume: "Volume 8 Issue 5",
            date: "May 2021",
            issn: "2349-5162",
            impactFactor: "7.95",
            paperId: "JETIR2105670",
            doi: "10.1729/Journal.27038",
            downloads: "1310+",
            pdfUrl: "https://www.jetir.org/papers/JETIR2105670.pdf",
            viewUrl: "https://www.jetir.org/view?paper=JETIR2105670",
            abstract: "Research on intelligent traffic management system using Light Fidelity (LI-Fi) technology for efficient traffic signal control and communication.",
            tags: ["IoT", "LI-Fi", "Traffic Management", "Smart Cities"]
        }
    ];

    const achievements = [
        {
            icon: BookOpen,
            title: "Published Research Paper",
            description: "Published in UGC Approved Journal (CARE List Journal No. 63975)",
            color: "text-blue-500",
            bgColor: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            icon: Trophy,
            title: "Impact Factor 7.95",
            description: "High-impact publication calculated by Google Scholar and Semantic Scholar",
            color: "text-yellow-500",
            bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
        },
        {
            icon: Star,
            title: "1310+ Downloads",
            description: "Research paper downloaded by scholars worldwide",
            color: "text-purple-500",
            bgColor: "bg-purple-100 dark:bg-purple-900/30"
        },
        {
            icon: Award,
            title: "Peer-Reviewed Publication",
            description: "Published in International Scholarly Open Access Journal",
            color: "text-green-500",
            bgColor: "bg-green-100 dark:bg-green-900/30"
        }
    ];

    return (
        <section id="research" className="py-20 bg-gray-50 dark:bg-black relative transition-colors duration-300">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Award className="text-gray-900 dark:text-white mr-3 shrink-0" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">Research & Achievements</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none"
                        >
                            <div className={`${achievement.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                                <achievement.icon className={achievement.color} size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Research Papers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <FileText className="mr-3 text-blue-500" size={24} />
                        Published Research Papers
                    </h3>
                </motion.div>

                {/* Research Paper Cards */}
                <div className="space-y-6">
                    {researchPapers.map((paper, index) => (
                        <motion.div
                            key={paper.paperId}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Paper Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                        <BookOpen className="text-white" size={40} />
                                    </div>
                                </div>

                                {/* Paper Details */}
                                <div className="flex-1">
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        {paper.title}
                                    </h4>

                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center">
                                            <Users size={16} className="mr-2 shrink-0" />
                                            <span>{paper.authors.length} Authors</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{paper.date}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Star size={16} className="mr-2 text-yellow-500" />
                                            <span>Impact Factor: {paper.impactFactor}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FileText size={16} className="mr-2" />
                                            <span>{paper.downloads} Downloads</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        {paper.abstract}
                                    </p>

                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            <strong>Published in:</strong> {paper.journal}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            <strong>Volume:</strong> {paper.volume} | <strong>ISSN:</strong> {paper.issn}
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 break-words">
                                            <strong>Authors:</strong> {paper.authors.join(", ")}
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 break-all">
                                            <strong>DOI:</strong> {paper.doi}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {paper.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={paper.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                        >
                                            <FileText className="mr-2" size={16} />
                                            Download PDF
                                            <ExternalLink className="ml-2" size={14} />
                                        </a>
                                        <a
                                            href={paper.viewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <BookOpen className="mr-2" size={16} />
                                            View Publication
                                            <ExternalLink className="ml-2" size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchAchievements;
