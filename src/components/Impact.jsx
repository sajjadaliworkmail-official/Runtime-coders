import { motion } from 'framer-motion';

function Impact() {
    const useCases = [
        {
            title: "Students",
            description: "Learn to identify phishing attempts while staying safe online during research and communication.",
        },
        {
            title: "Beginners",
            description: "Build cybersecurity awareness without needing technical expertise or training.",
        },
        {
            title: "General Internet Users",
            description: "Protect personal data and financial information from sophisticated phishing attacks.",
        },
        {
            title: "Educational Institutions",
            description: "Teach cybersecurity fundamentals with a practical, hands-on tool for students.",
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Who Benefits from PhishEye?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Making cybersecurity accessible to everyone, from students to professionals
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 text-primary-600">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Impact;
