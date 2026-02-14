import { motion } from 'framer-motion';

function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="section-container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Detect Phishing Before It Steals Your Data
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            PhishEye analyzes suspicious links and messages in real-time, providing clear risk assessments
                            and educational explanations to help you stay safe online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('cta')}
                                className="btn-primary text-lg"
                            >
                                Try Demo
                            </button>
                            <button
                                onClick={() => scrollToSection('dashboard')}
                                className="btn-secondary text-lg"
                            >
                                View Dashboard
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Content - Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Recent Scan</h3>
                                <span className="badge-risky">High Risk</span>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-500 mb-2">Scanned URL</p>
                                    <p className="text-sm font-mono text-gray-900 break-all">
                                        https://bit.ly/urgent-verify-account-now
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-gray-700">Risk Indicators:</p>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-risky rounded-full mt-1.5"></div>
                                            <p className="text-sm text-gray-600">URL shortener detected</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-risky rounded-full mt-1.5"></div>
                                            <p className="text-sm text-gray-600">Urgent language pattern</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-risky rounded-full mt-1.5"></div>
                                            <p className="text-sm text-gray-600">Suspicious domain pattern</p>
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
