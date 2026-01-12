import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import GitHubActivity from './components/GitHubActivity';
import ResearchAchievements from './components/ResearchAchievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <ThemeProvider>
            <div className="bg-gray-50 dark:bg-black min-h-screen text-gray-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <GitHubActivity />
                <Experience />
                <ResearchAchievements />
                <Contact />

                <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 py-8 text-center text-gray-500 text-sm transition-colors duration-300">
                    <p>© {new Date().getFullYear()} Aniket Chauhan. All rights reserved.</p>
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
