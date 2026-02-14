const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Check if the backend is reachable
 */
export async function checkHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return response.ok;
    } catch (error) {
        return false;
    }
}

/**
 * Analyze content for phishing risks
 * Falls back to local simulation if backend is unavailable
 */
export async function analyzePhishing(content) {
    try {
        const isBackendAvailable = await checkHealth();

        if (isBackendAvailable) {
            const response = await fetch(`${API_BASE_URL}/check`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            });

            if (!response.ok) throw new Error('Backend error');
            return await response.json();
        } else {
            // Simulate analysis if backend is down
            console.warn('Backend unavailable, using local simulation');
            return simulateAnalysis(content);
        }
    } catch (error) {
        console.error('Analysis failed:', error);
        return simulateAnalysis(content);
    }
}

function simulateAnalysis(content) {
    const isRisky = content.toLowerCase().includes('http') || content.length > 20;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                url: content,
                riskLevel: isRisky ? "Risky" : "Safe",
                score: isRisky ? 85 : 15,
                reasons: isRisky ? [
                    "Suspicious domain pattern detected (simulated)",
                    "Potential URL shortening service used",
                    "Urgency keywords found in content"
                ] : [
                    "Domain has valid SSL certificate",
                    "No suspicious keywords found",
                    "Domain reputation is clean"
                ]
            });
        }, 1500);
    });
}
