import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                            About PhishEye
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 border-2 border-primary-100 dark:border-gray-700 shadow-sm dark:shadow-black/50 transition-colors duration-300"
                    >
                        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            <p>
                                PhishEye is a cybersecurity awareness tool designed to help users identify and understand
                                phishing threats before they become victims. Built with a focus on education and accessibility,
                                our platform provides clear, actionable insights into why links and messages might be dangerous.
                            </p>

                            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-primary-200 dark:border-gray-700 transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4 transition-colors duration-300">Hackathon Project</h3>
                                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                                        <p><span className="font-semibold">Event:</span> SUBATHON 26</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                                        <p><span className="font-semibold">Team:</span> Runtime Coders</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                                        <p><span className="font-semibold">Theme:</span> Cybersecurity</p>
                                    </div>
                                </div>
                            </div>

                            <p>
                                Our mission is to make cybersecurity knowledge accessible to everyone, regardless of their
                                technical background. By providing clear explanations and visual indicators, we empower users
                                to make informed decisions about their online safety.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
