import { motion } from 'framer-motion';

function ProblemStatement() {
    const problems = [
        {
            title: "Users Fall for Fake Links",
            description: "Millions of people click on phishing links daily, leading to data breaches and financial loss.",
        },
        {
            title: "No Clear Explanation Tools",
            description: "Existing solutions don't explain why a link is dangerous, leaving users vulnerable to future attacks.",
        },
        {
            title: "Beginners Lack Awareness",
            description: "Most internet users don't have the technical knowledge to identify sophisticated phishing attempts.",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-20 transition-colors duration-300">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        The Problem We're Solving
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                        Phishing attacks are becoming more sophisticated, yet users lack accessible tools to protect themselves.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg dark:shadow-black/50 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                                <svg
                                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{problem.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProblemStatement;
