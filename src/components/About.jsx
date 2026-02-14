import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="bg-white">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About PhishEye
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 border-2 border-primary-100"
                    >
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                PhishEye is a cybersecurity awareness tool designed to help users identify and understand
                                phishing threats before they become victims. Built with a focus on education and accessibility,
                                our platform provides clear, actionable insights into why links and messages might be dangerous.
                            </p>

                            <div className="bg-white rounded-lg p-6 border border-primary-200">
                                <h3 className="text-2xl font-bold text-primary-600 mb-4">Hackathon Project</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                        <p><span className="font-semibold">Event:</span> SUBATHON 26</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                        <p><span className="font-semibold">Team:</span> Runtime Coders</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
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
