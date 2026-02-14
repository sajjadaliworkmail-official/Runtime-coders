/**
 * Mock API Response Examples for PhishEye Backend
 * 
 * These examples show the expected JSON response format
 * that the frontend expects from the backend API.
 */

// Example 1: Safe URL
const safeResponse = {
    riskLevel: "Safe",
    score: 15,
    reasons: [
        "Domain has valid HTTPS certificate",
        "No suspicious keywords detected",
        "Domain age is over 2 years",
        "No URL shortener detected"
    ]
};

// Example 2: Suspicious Message
const suspiciousResponse = {
    riskLevel: "Suspicious",
    score: 55,
    reasons: [
        "Urgent language detected (e.g., 'act now', 'limited time')",
        "Requests personal information",
        "Contains unusual characters in domain name",
        "Domain registered recently (less than 6 months)"
    ]
};

// Example 3: Risky/Phishing URL
const riskyResponse = {
    riskLevel: "Risky",
    score: 85,
    reasons: [
        "URL shortener usage detected",
        "Domain mimics a well-known brand (typosquatting)",
        "Multiple redirects detected",
        "Suspicious domain pattern",
        "Contains threatening language",
        "Requests immediate action with urgency"
    ]
};

// Example Backend Implementation (Node.js/Express)
/*
app.post('/api/check', (req, res) => {
  const { content } = req.body;
  
  // Your phishing detection logic here
  const result = analyzeContent(content);
  
  res.json({
    riskLevel: result.riskLevel,  // "Safe", "Suspicious", or "Risky"
    score: result.score,           // 0-100
    reasons: result.reasons        // Array of strings
  });
});
*/

module.exports = {
    safeResponse,
    suspiciousResponse,
    riskyResponse
};
