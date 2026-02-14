import { motion } from 'framer-motion';

function DashboardPreview() {
    const scanResults = [
        {
            url: "https://secure-paypal-verify.com/login",
            riskLevel: "Risky",
            reason: "Domain mimics PayPal, requests credentials",
            timestamp: "2 mins ago",
        },
        {
            url: "https://bit.ly/urgent-action-required",
            riskLevel: "Risky",
            reason: "URL shortener, urgent language detected",
            timestamp: "5 mins ago",
        },
        {
            url: "https://amazon.com/deals",
            riskLevel: "Safe",
            reason: "Legitimate domain, HTTPS verified",
            timestamp: "8 mins ago",
        },
        {
            url: "https://free-gift-claim-now.xyz",
            riskLevel: "Suspicious",
            reason: "New domain, suspicious TLD, urgency pattern",
            timestamp: "12 mins ago",
        },
        {
            url: "https://github.com/security-updates",
            riskLevel: "Safe",
            reason: "Verified domain, no suspicious patterns",
            timestamp: "15 mins ago",
        },
    ];

    const getBadgeClass = (level) => {
        if (level === "Safe") return "badge-safe";
        if (level === "Suspicious") return "badge-suspicious";
        return "badge-risky";
    };

    return (
        <section id="dashboard" className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        Scan Results Dashboard
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                        Real-time analysis with clear risk indicators and detailed explanations
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-black/50 overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
                >
                    {/* Table Header */}
                    <div className="bg-primary-600 dark:bg-primary-700 text-white px-6 py-4 transition-colors duration-300">
                        <div className="grid grid-cols-12 gap-4 font-semibold text-sm md:text-base">
                            <div className="col-span-4">URL</div>
                            <div className="col-span-2">Risk Level</div>
                            <div className="col-span-4">Reason</div>
                            <div className="col-span-2">Timestamp</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {scanResults.map((result, index) => {
                            // Determine background color based on risk level
                            const getRowBgClass = (level) => {
                                if (level === "Safe") return "bg-green-50 hover:bg-green-100 dark:bg-green-900/10 dark:hover:bg-green-900/20";
                                if (level === "Suspicious") return "bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/10 dark:hover:bg-yellow-900/20";
                                return "bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20";
                            };

                            // Get icon for risk level
                            const getRiskIcon = (level) => {
                                if (level === "Safe") {
                                    return (
                                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    );
                                } else if (level === "Suspicious") {
                                    return (
                                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    );
                                } else {
                                    return (
                                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    );
                                }
                            };

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`px-6 py-4 cursor-pointer transition-all duration-200 ${getRowBgClass(result.riskLevel)} border-l-4 ${result.riskLevel === "Safe" ? "border-green-500" :
                                        result.riskLevel === "Suspicious" ? "border-yellow-500" :
                                            "border-red-500"
                                        }`}
                                    whileHover={{ scale: 1.01, x: 4 }}
                                >
                                    <div className="grid grid-cols-12 gap-4 items-center">
                                        <div className="col-span-4">
                                            <p className="text-sm font-mono text-gray-900 dark:text-white truncate">
                                                {result.url}
                                            </p>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="flex items-center gap-2">
                                                {getRiskIcon(result.riskLevel)}
                                                <span className={`${getBadgeClass(result.riskLevel)} transition-colors duration-300`}>
                                                    {result.riskLevel}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium" title={result.reason}>
                                                {result.reason}
                                            </p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{result.timestamp}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default DashboardPreview;
