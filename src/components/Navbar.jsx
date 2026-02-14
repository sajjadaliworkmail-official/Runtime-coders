import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary-600 dark:text-primary-400' : 'text-white'}`}>
                            PhishEye
                        </span>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Features', 'Dashboard', 'How It Works', 'About'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                                className={`font-medium transition-colors duration-300 hover:text-primary-500 dark:hover:text-primary-400 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button & Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors duration-300 ${scrolled
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    : 'bg-white/10 backdrop-blur-sm text-yellow-300 hover:bg-white/20'
                                }`}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => scrollToSection('cta')}
                            className="btn-primary hidden sm:block"
                        >
                            Scan Link
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
