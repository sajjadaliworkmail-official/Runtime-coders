/**
 * API Service for PhishEye Frontend
 * 
 * Handles communication with the backend API.
 * Includes fallback simulation if backend is unavailable.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Check if the backend is reachable
 * @returns {Promise<boolean>} True if backend is available
 */
export async function checkHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return response.ok;
    } catch (error) {
        console.warn('Backend health check failed:', error.message);
        return false;
    }
}

/**
 * Analyze content for phishing risks
 * Falls back to local simulation if backend is unavailable
 * 
 * @param {string} content - URL or message to analyze
 * @returns {Promise<Object>} Analysis result with riskLevel, score, and reasons
 */
export async function analyzePhishing(content) {
    try {
        const isBackendAvailable = await checkHealth();

        if (isBackendAvailable) {
            // Call real backend API
            const response = await fetch(`${API_BASE_URL}/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: content }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Backend error');
            }

            return await response.json();
        } else {
            // Backend unavailable - use local simulation
            console.warn('Backend unavailable, using local simulation');
            return simulateAnalysis(content);
        }
    } catch (error) {
        console.error('Analysis failed:', error);
        // Fallback to simulation on any error
        return simulateAnalysis(content);
    }
}

/**
 * Local simulation of phishing analysis
 * Used as fallback when backend is unavailable
 * 
 * @param {string} content - Content to analyze
 * @returns {Object} Simulated analysis result
 */
function simulateAnalysis(content) {
    const contentLower = content.toLowerCase();
    let score = 0;
    const reasons = [];

    // Simple simulation rules
    if (contentLower.includes('urgent') || contentLower.includes('verify') || contentLower.includes('act now')) {
        score += 30;
        reasons.push('Urgent language detected (simulated)');
    }

    if (contentLower.includes('bit.ly') || contentLower.includes('tinyurl')) {
        score += 30;
        reasons.push('URL shortener detected (simulated)');
    }

    if (contentLower.includes('password') || contentLower.includes('login') || contentLower.includes('credit card')) {
        score += 20;
        reasons.push('Requests sensitive information (simulated)');
    }

    if (content.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
        score += 35;
        reasons.push('IP-based URL detected (simulated)');
    }

    // Determine risk level
    let riskLevel = 'Safe';
    if (score >= 60) {
        riskLevel = 'Risky';
    } else if (score >= 30) {
        riskLevel = 'Suspicious';
    }

    // Add safe reasons if no risks found
    if (reasons.length === 0) {
        reasons.push('No obvious phishing indicators found (simulated)');
        reasons.push('Content appears legitimate (simulated check)');
    }

    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                riskLevel,
                score: Math.min(score, 100),
                reasons
            });
        }, 1000);
    });
}
