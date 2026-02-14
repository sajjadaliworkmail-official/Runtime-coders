import { motion } from 'framer-motion';

function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "User Enters Link or Message",
            description: "Paste any suspicious URL or message text into the input field for instant analysis.",
        },
        {
            number: "02",
            title: "System Analyzes Patterns",
            description: "Our rule-based engine checks for phishing indicators including domain patterns, urgency language, and known threats.",
        },
        {
            number: "03",
            title: "Risk Explanation Shown",
            description: "Receive a clear risk assessment with detailed, human-readable explanations of why content was flagged.",
        },
    ];

    return (
        <section id="how-it-works" className="bg-white">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How PhishEye Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Three simple steps to protect yourself from phishing attacks
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary-200 -z-10"></div>
                            )}

                            <div className="text-center">
                                {/* Step Number Circle */}
                                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <span className="text-4xl font-bold text-white">{step.number}</span>
                                </div>

                                {/* Step Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
