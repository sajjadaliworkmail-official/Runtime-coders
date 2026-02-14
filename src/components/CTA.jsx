import { motion } from 'framer-motion';
import { useState } from 'react';
import ScanResultModal from './ScanResultModal';
import { analyzePhishing } from '../services/api';

function CTA() {
    const [inputValue, setInputValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [scanResult, setScanResult] = useState(null);

    const handleScan = async () => {
        if (!inputValue.trim()) return;

        setIsModalOpen(true);
        setIsLoading(true);

        try {
            const result = await analyzePhishing(inputValue);
            setScanResult(result);
        } catch (error) {
            console.error('Scan error:', error);
            // Fallback result in case of total failure
            setScanResult({
                url: inputValue,
                riskLevel: 'Safe',
                score: 0,
                reasons: ['Analysis failed, please try again.']
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="cta" className="bg-gradient-to-br from-gray-50 to-white relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Check Before You Click
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Paste any suspicious link or message below to see how PhishEye analyzes and explains potential threats
                    </p>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-100">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Paste a URL or message here..."
                                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none text-lg transition-colors"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') handleScan();
                                }}
                            />
                            <button
                                onClick={handleScan}
                                disabled={isLoading || !inputValue.trim()}
                                className="btn-primary text-lg px-8 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Scanning...' : 'Scan Now'}
                            </button>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <svg
                                className="w-5 h-5 text-primary-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                            <span>Your data is analyzed locally and never stored</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 text-gray-600"
                    >
                        <p className="text-sm">
                            This is a rule-based risk indicator tool. Results are educational and should not replace professional security assessment.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <ScanResultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                result={scanResult}
                isLoading={isLoading}
            />
        </section>
    );
}

export default CTA;
