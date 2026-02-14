import { motion } from 'framer-motion';

function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Background with dynamic gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-primary-900 dark:via-primary-800 dark:to-primary-950 transition-colors duration-300">
                {/* Overlay only visible in dark mode or adjusted for light */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent dark:from-black/50 dark:to-transparent"></div>

                {/* Animated background pattern opacity adjustment */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        color: 'inherit'
                    }}></div>
                </div>
            </div>

            <div className="section-container relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 drop-shadow-sm dark:drop-shadow-lg transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Detect Phishing Before It Steals Your Data
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-8 leading-relaxed transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            PhishEye analyzes suspicious links and messages in real-time, providing clear risk assessments
                            and educational explanations to help you stay safe online.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.button
                                onClick={() => scrollToSection('cta')}
                                className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Try Demo
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection('dashboard')}
                                className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-primary-600 text-primary-600 dark:border-white dark:text-white hover:bg-white hover:text-primary-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Dashboard
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl dark:shadow-black/50 p-6 border border-gray-200 dark:border-gray-700 hover:shadow-primary-500/20 hover:shadow-3xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Scan</h3>
                                <span className="badge-risky">High Risk</span>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors duration-300">
                                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Scanned URL</p>
                                    <p className="text-sm font-mono text-gray-900 dark:text-white break-all">
                                        https://bit.ly/urgent-verify-account-now
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Risk Indicators:</p>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-risky rounded-full mt-1.5"></div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">URL shortener detected</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-risky rounded-full mt-1.5"></div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Urgent language pattern</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-risky rounded-full mt-1.5"></div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Suspicious domain pattern</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
