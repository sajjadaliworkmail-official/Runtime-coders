/**
 * Phishing Analysis Logic
 * 
 * Analyze content for phishing indicators using heuristic rules.
 */

const SUSPICIOUS_DOMAINS = [
    'bit.ly', 'tinyurl.com', 'goo.gl', // URL shorteners
    'dropbox-update', 'paypal-secure', 'bank-login', // Typosquatting examples
    'free-gift', 'urgent-action', 'verify-now'
];

const URGENCY_KEYWORDS = [
    'urgent', 'immediate', 'act now', 'limited time', 'verify account',
    'suspended', 'unauthorized', 'click here', 'confirm password'
];

export function analyzeContent(content) {
    const risks = [];
    let score = 0;
    const contentLower = content.toLowerCase();

    // 1. Check for URL Shorteners
    if (SUSPICIOUS_DOMAINS.some(domain => contentLower.includes(domain))) {
        risks.push("URL shortener or suspicious domain pattern detected");
        score += 40;
    }

    // 2. Check for Urgency Keywords
    if (URGENCY_KEYWORDS.some(keyword => contentLower.includes(keyword))) {
        risks.push("Urgent language detected (e.g., 'act now', 'verify account')");
        score += 30;
    }

    // 3. Check for Credentials Requests
    if (contentLower.includes('password') || contentLower.includes('credit card') || contentLower.includes('login')) {
        risks.push("Requests sensitive credential information");
        score += 20;
    }

    // 4. Determine Risk Level
    let riskLevel = 'Safe';
    if (score >= 70) riskLevel = 'Risky';
    else if (score >= 30) riskLevel = 'Suspicious';

    // Fallback reason if minimal risk but score > 0
    if (score > 0 && risks.length === 0) {
        risks.push("Generic suspicious patterns detected");
    } else if (score === 0) {
        risks.push("No obvious phishing indicators found");
        risks.push("Domain appears legitimate (simulated check)");
    }

    return {
        url: content,
        riskLevel,
        score: Math.min(score, 100), // Cap at 100
        reasons: risks
    };
}
