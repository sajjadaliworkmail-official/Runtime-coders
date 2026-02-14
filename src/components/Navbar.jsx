import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary-600' : 'text-white'}`}>
                            PhishEye
                        </span>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Features', 'Dashboard', 'How It Works', 'About'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                        <button
                            onClick={() => scrollToSection('cta')}
                            className="btn-primary"
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
