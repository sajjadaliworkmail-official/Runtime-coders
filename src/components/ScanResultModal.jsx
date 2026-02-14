import { motion, AnimatePresence } from 'framer-motion';

function ScanResultModal({ isOpen, onClose, result, isLoading }) {
    // Determine colors based on risk level
    const getRiskColors = (level) => {
        switch (level) {
            case 'Safe':
                return {
                    bg: 'bg-green-50 dark:bg-green-900/10',
                    border: 'border-green-200 dark:border-green-700/30',
                    text: 'text-green-700 dark:text-green-400',
                    badge: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300'
                };
            case 'Suspicious':
                return {
                    bg: 'bg-yellow-50 dark:bg-yellow-900/10',
                    border: 'border-yellow-200 dark:border-yellow-700/30',
                    text: 'text-yellow-700 dark:text-yellow-400',
                    badge: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300'
                };
            case 'Risky':
                return {
                    bg: 'bg-red-50 dark:bg-red-900/10',
                    border: 'border-red-200 dark:border-red-700/30',
                    text: 'text-red-700 dark:text-red-400',
                    badge: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300'
                };
            default:
                return {
                    bg: 'bg-gray-50 dark:bg-gray-900/10',
                    border: 'border-gray-200 dark:border-gray-700/30',
                    text: 'text-gray-700 dark:text-gray-400',
                    badge: 'bg-gray-100 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300'
                };
        }
    };

    const colors = result ? getRiskColors(result.riskLevel) : {};

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-black/50 w-full max-w-2xl overflow-hidden z-10 transition-colors duration-300"
                    >
                        {!result && isLoading ? (
                            <div className="p-12 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 border-4 border-primary-100 dark:border-primary-900 border-t-primary-600 dark:border-t-primary-500 rounded-full animate-spin mb-6"></div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analyzing Content</h3>
                                <p className="text-gray-500 dark:text-gray-400">Scanning for phishing patterns and threats...</p>
                            </div>
                        ) : result ? (
                            <>
                                {/* Header */}
                                <div className={`p-6 border-b ${colors.border} ${colors.bg} flex justify-between items-start transition-colors duration-300`}>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Scan Results</h3>
                                            <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide ${colors.badge} transition-colors duration-300`}>
                                                {result.riskLevel}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm truncate max-w-md">{result.url}</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-8">
                                    {/* Score Section */}
                                    <div className="flex items-center gap-8 mb-8">
                                        <div className="flex-1">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Risk Score</span>
                                                <span className={`text-3xl font-bold ${colors.text} transition-colors duration-300`}>{result.score}/100</span>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${result.score}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className={`h-full ${result.riskLevel === 'Safe' ? 'bg-green-500' : result.riskLevel === 'Suspicious' ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Analysis Details */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            Analysis Report
                                        </h4>
                                        <ul className="space-y-3">
                                            {result.reasons.map((reason, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                                                >
                                                    {result.riskLevel === 'Safe' ? (
                                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                        </svg>
                                                    )}
                                                    <span className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{reason}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-3 transition-colors duration-300">
                                    <button
                                        onClick={onClose}
                                        className="px-4 py-2 text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-sm"
                                    >
                                        Scan Another Link
                                    </button>
                                </div>
                            </>
                        ) : null}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default ScanResultModal;
