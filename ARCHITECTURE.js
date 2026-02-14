/*
 * PhishEye Component Architecture
 * 
 * App (Main Container)
 * ├── Header Section
 * │   ├── Title: "PhishEye – Phishing Risk Checker"
 * │   └── Description: "Paste a suspicious link or message..."
 * │
 * ├── InputSection Component
 * │   ├── Textarea (large input field)
 * │   └── Submit Button ("Check Safety")
 * │
 * ├── Error Display (conditional)
 * │   └── Shows validation or API errors
 * │
 * ├── Loading Display (conditional)
 * │   └── Shows "Analyzing content..." message
 * │
 * ├── ResultDisplay Component (conditional)
 * │   ├── Risk Badge
 * │   │   ├── Risk Level (Safe/Suspicious/Risky)
 * │   │   └── Risk Score (0-100)
 * │   └── Reasons Section
 * │       ├── "Analysis Details" heading
 * │       └── Bullet list of reasons
 * │
 * └── Footer Section
 *     └── Disclaimer text
 * 
 * Services Layer
 * └── api.js
 *     ├── checkHealth() - Verify backend availability
 *     ├── analyzePhishing() - Main analysis function
 *     └── simulateAnalysis() - Fallback simulation
 * 
 * State Management (in App.jsx)
 * ├── result - Stores analysis results
 * ├── isLoading - Loading state flag
 * └── error - Error message state
 * 
 * Styling Architecture
 * ├── index.css - Global reset and base styles
 * ├── App.css - Main layout and container styles
 * ├── InputSection.css - Input form styles
 * └── ResultDisplay.css - Results display styles
 * 
 * Color System
 * ├── Background: #0a0e1a (deep navy)
 * ├── Primary: #00d9ff (cyan blue)
 * ├── Safe: #00ff88 (green)
 * ├── Suspicious: #ffd700 (yellow)
 * └── Risky: #ff4444 (red)
 */
