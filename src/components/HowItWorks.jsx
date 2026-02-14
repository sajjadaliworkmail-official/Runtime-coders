import { motion } from 'framer-motion';

function HowItWorks() {
    const steps = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
            title: "Enter Link or Message",
            description: "Paste any suspicious URL or message text into the input field for instant analysis.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            title: "System Analyzes Patterns",
            description: "Our rule-based engine checks for phishing indicators including domain patterns, urgency language, and known threats.",
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Risk Explanation Shown",
            description: "Receive a clear risk assessment with detailed, human-readable explanations of why content was flagged.",
        },
    ];

    return (
        <section id="how-it-works" className="bg-gray-50 dark:bg-gray-950 py-20 overflow-hidden transition-colors duration-300">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        How PhishEye Works
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                        Three simple steps to protect yourself from phishing attacks
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Visual Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 dark:from-primary-900 dark:via-primary-700 dark:to-primary-900 z-0 transition-colors duration-300"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative z-10 text-center group"
                        >
                            <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl dark:shadow-black/60 border-4 border-primary-50 dark:border-primary-900/50 relative transition-colors duration-300">
                                <div className="absolute inset-0 bg-primary-600 dark:bg-primary-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-10"></div>
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow font-bold text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-gray-600 transition-colors duration-300">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed px-4 transition-colors duration-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
