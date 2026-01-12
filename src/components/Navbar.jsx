import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'GitHub', href: '#github' },
        { name: 'Research', href: '#research' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Aniket Chauhan
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.div
                        className="flex items-center space-x-4 ml-4 border-l border-gray-300 dark:border-gray-700 pl-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button
                            onClick={toggleTheme}
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a href="https://github.com/aniket-68" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/aniket-chauhan-110b8727" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="mailto:aniketchauhan0608@gmail.com" className="hidden sm:block text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"><Mail size={20} /></a>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="text-gray-600 dark:text-gray-300"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <a href="https://github.com/aniket-68" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/aniket-chauhan-110b8727" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"><Linkedin size={24} /></a>
                                <a href="mailto:aniketchauhan0608@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"><Mail size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
