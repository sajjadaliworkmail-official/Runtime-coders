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
        <section id="dashboard" className="bg-gray-50">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Scan Results Dashboard
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real-time analysis with clear risk indicators and detailed explanations
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    {/* Table Header */}
                    <div className="bg-primary-600 text-white px-6 py-4">
                        <div className="grid grid-cols-12 gap-4 font-semibold">
                            <div className="col-span-4">URL</div>
                            <div className="col-span-2">Risk Level</div>
                            <div className="col-span-4">Reason</div>
                            <div className="col-span-2">Timestamp</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-200">
                        {scanResults.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ backgroundColor: '#f9fafb' }}
                                className="px-6 py-4 cursor-pointer transition-colors"
                            >
                                <div className="grid grid-cols-12 gap-4 items-center">
                                    <div className="col-span-4">
                                        <p className="text-sm font-mono text-gray-900 truncate">
                                            {result.url}
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <span className={getBadgeClass(result.riskLevel)}>
                                            {result.riskLevel}
                                        </span>
                                    </div>
                                    <div className="col-span-4">
                                        <p className="text-sm text-gray-600">{result.reason}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm text-gray-500">{result.timestamp}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default DashboardPreview;
