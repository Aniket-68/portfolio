import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, FileText, Download } from 'lucide-react';


const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-stretch justify-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="h-full bg-white/50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                                        <a href="mailto:aniketchauhan0608@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">aniketchauhan0608@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                                        <p className="text-gray-900 dark:text-white font-medium">Navi Mumbai, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-pink-100 dark:bg-pink-500/10 rounded-lg text-pink-600 dark:text-pink-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Phone</p>
                                        <p href="tel:+918169882434" className="text-gray-900 dark:text-white font-medium">+91 8169882434</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Resume Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform flex flex-col justify-between">
                            <div>
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Resume</h3>
                                        <p className="text-blue-100 text-sm">Detailed breakdown of my experience and skills.</p>
                                    </div>
                                    <div className="p-3 bg-white/20 rounded-lg text-white">
                                        <FileText size={24} />
                                    </div>
                                </div>
                            </div>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors"
                            >
                                <Download size={20} />
                                <span>Download CV</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
