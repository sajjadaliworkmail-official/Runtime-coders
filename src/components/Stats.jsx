import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Stats() {
    const [counts, setCounts] = useState({
        analyzed: 0,
        threats: 0,
        awareness: 0,
    });

    const finalCounts = {
        analyzed: 10000,
        threats: 7500,
        awareness: 95,
    };

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                analyzed: Math.floor(finalCounts.analyzed * progress),
                threats: Math.floor(finalCounts.threats * progress),
                awareness: Math.floor(finalCounts.awareness * progress),
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setCounts(finalCounts);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            value: counts.analyzed.toLocaleString(),
            suffix: "+",
            label: "Links Analyzed",
        },
        {
            value: counts.threats.toLocaleString(),
            suffix: "+",
            label: "Threats Detected",
        },
        {
            value: counts.awareness,
            suffix: "%",
            label: "Awareness Improved",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-6xl md:text-7xl font-bold mb-4">
                                {stat.value}
                                <span className="text-primary-200">{stat.suffix}</span>
                            </div>
                            <div className="text-xl md:text-2xl text-primary-100 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
