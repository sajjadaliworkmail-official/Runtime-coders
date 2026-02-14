/**
 * Phishing Detection Utility
 * 
 * Enhanced rule-based phishing detection system for educational purposes.
 * identifying Safe, Suspicious, and Risky inputs based on specific heuristics.
 */

// 1. Phishing Keywords (Urgency, Credentials, Fear)
const URGENCY_KEYWORDS = [
    'urgent', 'immediately', 'act now', '24 hours', 'suspended', 'restricted',
    'unauthorized', 'blocked', 'locked', 'verify', 'confirm', 'update', 'expired'
];

const CREDENTIAL_KEYWORDS = [
    'password', 'login', 'username', 'credit card', 'social security', 'ssn',
    'bank account', 'routing number', 'pin code', 'cvv', 'wallet key', 'seed phrase'
];

// 2. URL Shorteners
const URL_SHORTENERS = [
    'bit.ly', 'tinyurl.com', 'goo.gl', 'ow.ly', 't.co', 'is.gd', 'buff.ly',
    'adf.ly', 'bit.do', 'mcaf.ee', 'su.pr', 'v.gd'
];

// 3. Known Phishing/Suspicious Domains (Static Blocklist for Education)
const SUSPICIOUS_DOMAINS = [
    'go0gle.com', 'g0ogle.com', 'paypa1.com', 'm1crosoft.com',
    'faceb0ok.com', 'amaz0n.com', 'apple-id-support.com',
    'secure-account-verify.com', 'login-update-security.com'
];

// 4. Legitimate Domains (Allowlist to reduce false positives)
const SAFE_DOMAINS = [
    'google.com', 'facebook.com', 'amazon.com', 'apple.com', 'microsoft.com',
    'paypal.com', 'netflix.com', 'github.com', 'linkedin.com', 'wikipedia.org'
];

/**
 * Main phishing detection function
 * 
 * @param {string} text - The input (URL or text) to analyze
 * @returns {Object} Analysis result with detailed risk assessment
 */
export function detectPhishingRisks(text) {
    const results = {
        inputType: 'text',
        riskLevel: 'Safe',
        score: 0,
        reasons: [],
        triggeredRules: [],
        timestamp: new Date().toISOString()
    };

    if (!text) return results;

    const lowerText = text.toLowerCase();

    // Detect Input Type (URL vs Text)
    // Simple regex to check if it looks like a URL
    const urlPattern = /^(http|https|ftp|www)|\.[a-z]{2,}(\/|$)/i;
    results.inputType = urlPattern.test(text) ? 'url' : 'text';

    let score = 0;
    const rules = [];
    const reasons = [];

    // --- RULE CHECKING ---

    // 1. Check for IP-Based URLs (High Risk)
    // Matches http://192.168.1.1 type patterns
    const ipUrlPattern = /(?:http|https):\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
    if (ipUrlPattern.test(text)) {
        score += 80; // Almost immediate risky
        rules.push('ip_based_url');
        reasons.push('Uses an IP address instead of a domain name (highly suspicious)');
    }

    // 2. Check for URL Shorteners (Medium Risk)
    const foundShortener = URL_SHORTENERS.find(domain => lowerText.includes(domain));
    if (foundShortener) {
        score += 45;
        rules.push('url_shortener');
        reasons.push(`Uses a URL shortener (${foundShortener}) which hides the destination`);
    }

    // 3. Check for Suspicious Domain Patterns / Typosquatting (High Risk)
    const foundSuspiciousDomain = SUSPICIOUS_DOMAINS.find(domain => lowerText.includes(domain));
    if (foundSuspiciousDomain) {
        score += 70;
        rules.push('suspicious_domain');
        reasons.push(`Detected known suspicious domain pattern: "${foundSuspiciousDomain}"`);
    }

    // 4. Check for Phishing/Urgency Keywords (Low-Medium Risk)
    const foundUrgency = URGENCY_KEYWORDS.filter(word => lowerText.includes(word));
    if (foundUrgency.length > 0) {
        const pointVal = 15;
        score += Math.min(foundUrgency.length * pointVal, 45); // Cap at 45
        rules.push('urgency_keywords');
        reasons.push(`Contains urgent/threatening language: ${foundUrgency.slice(0, 3).join(', ')}`);
    }

    // 5. Check for Credential Requests (Medium-High Risk)
    const foundCredentials = CREDENTIAL_KEYWORDS.filter(word => lowerText.includes(word));
    if (foundCredentials.length > 0) {
        const pointVal = 20;
        score += Math.min(foundCredentials.length * pointVal, 60); // Cap at 60
        rules.push('credential_request');
        reasons.push(`Requests sensitive credentials: ${foundCredentials.slice(0, 3).join(', ')}`);
    }

    // 6. Check for @ symbol in URL (Obfuscation)
    if (results.inputType === 'url' && text.includes('@')) {
        score += 40;
        rules.push('url_obfuscation');
        reasons.push('Contains "@" symbol which can be used to redirect to malicious sites');
    }

    // 7. Check for double extensions (e.g. invoice.pdf.exe)
    if (/\.[a-z]{3}\.[a-z]{3,4}$/i.test(text)) {
        score += 50;
        rules.push('double_extension');
        reasons.push('Suspicious file extension pattern detected (possible malware)');
    }

    // 8. Typosquatting Heuristic (Generic)
    // Check for "rn" looking like "m" (e.g., arnazon.com)
    if (results.inputType === 'url' && lowerText.includes('rn') && (lowerText.includes('arnazon') || lowerText.includes('rnicros'))) {
        score += 50;
        rules.push('typosquatting_visual');
        reasons.push('Visual typosquatting detected (e.g. "rn" mimicking "m")');
    }

    // --- SCORING & CLASSIFICATION ---

    // Bonus: Check for allowlist (Reduce score if domain is known safe)
    if (results.inputType === 'url') {
        const isSafe = SAFE_DOMAINS.some(domain => lowerText.includes(domain));
        if (isSafe && !text.includes('@')) { // Only reduce if NO obfuscation
            score = Math.max(0, score - 50); // Significant reduction
            reasons.push('Domain is recognized as a known legitimate service');
        }
    }

    // Normalize Score (0-100)
    results.score = Math.min(Math.max(score, 0), 100);

    // Determine Risk Level
    if (results.score >= 70) {
        results.riskLevel = 'Risky';
    } else if (results.score >= 30) {
        results.riskLevel = 'Suspicious';
    } else {
        results.riskLevel = 'Safe';
    }

    results.triggeredRules = rules;
    results.reasons = reasons;

    // Fallback if no rules triggered but text is very short/empty? 
    // Already handled by initial check.

    if (results.riskLevel === 'Safe' && reasons.length === 0) {
        results.reasons.push('No specific phishing indicators were found.');
    }

    return results;
}
