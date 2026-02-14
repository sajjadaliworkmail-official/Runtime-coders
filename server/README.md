# PhishEye Backend API

A clean, beginner-friendly Node.js + Express.js backend for phishing detection and cybersecurity awareness.

## 🎯 Purpose

This backend provides a **rule-based phishing detection system** for educational purposes. It analyzes URLs and messages to identify common phishing patterns and provides clear explanations to help users understand cybersecurity risks.

**⚠️ Important**: This is an educational tool, not a comprehensive security solution. Always verify suspicious content through multiple sources.

## 📁 Project Structure

```
server/
├── index.js                    # Main server file (Express setup)
├── routes/
│   └── analyze.js             # API route definitions
├── controllers/
│   └── analyzeController.js   # Request handling logic
└── utils/
    └── phishingDetector.js    # Phishing detection rules
```

### Clean Architecture Benefits
- **Separation of Concerns**: Routes, controllers, and utilities are separated
- **Easy to Understand**: Each file has a single, clear responsibility
- **Easy to Extend**: Add new rules or endpoints without touching existing code
- **Beginner-Friendly**: Simple to explain and modify

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

Dependencies are already installed in the main project. If needed:
```bash
npm install express cors
```

### Running the Server

```bash
npm run server
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### 1. Health Check
**GET** `/api/health`

Check if the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "PhishEye API is running",
  "timestamp": "2026-02-14T12:54:21.000Z"
}
```

### 2. Analyze Content
**POST** `/api/analyze`

Analyze a URL or message for phishing indicators.

**Request Body:**
```json
{
  "text": "Click here to verify your account: http://bit.ly/urgent-verify"
}
```

**Response:**
```json
{
  "riskLevel": "Risky",
  "score": 85,
  "reasons": [
    "Urgent or suspicious language detected (e.g., \"verify\")",
    "URL shortener detected (bit.ly) - hides real destination",
    "Requests sensitive information (verify) - legitimate sites rarely ask via link"
  ]
}
```

**Risk Levels:**
- `Safe` (score < 30): No significant phishing indicators
- `Suspicious` (score 30-59): Some concerning patterns detected
- `Risky` (score ≥ 60): Multiple phishing indicators present

## 🔍 Detection Rules

The backend uses **10 rule-based checks**:

### 1. **Phishing Keywords** (+25 points)
Detects urgent/fear-based language:
- "urgent", "act now", "verify account", "suspended"
- "unauthorized access", "confirm password", etc.

### 2. **URL Shorteners** (+30 points)
Identifies shortened URLs that hide destinations:
- bit.ly, tinyurl.com, goo.gl, ow.ly, t.co, etc.

### 3. **IP-Based URLs** (+35 points)
Flags URLs using IP addresses instead of domains:
- `http://192.168.1.1` instead of `http://example.com`

### 4. **Suspicious Domain Patterns** (+30 points)
Detects typosquatting and fake domains:
- "paypal-secure", "amazon-update", "bank-login"
- Mimics legitimate brands with slight variations

### 5. **Credential Requests** (+20 points)
Identifies requests for sensitive information:
- "password", "credit card", "ssn", "cvv", "pin code"

### 6. **Excessive Special Characters** (+15 points)
Detects obfuscation attempts:
- Unusual ratio of special characters to text

### 7. **Mixed Case in URLs** (+10 points)
Flags unusual capitalization:
- `http://PayPal.com` vs normal `http://paypal.com`

### 8. **@ Symbol in URL** (+25 points)
Detects URL manipulation:
- `http://google.com@malicious.com` (actually goes to malicious.com)

### 9. **Excessive Subdomains** (+15 points)
Identifies overly complex domains:
- `secure.login.verify.paypal.fake.com`

### 10. **Suspicious File Extensions** (+40 points)
Flags potentially malicious files:
- .zip, .exe, .scr, .bat, .cmd

## 🛡️ Input Validation

The API includes comprehensive validation:

✅ **Required Field**: `text` must be provided  
✅ **Type Check**: `text` must be a string  
✅ **Length Limit**: Maximum 5000 characters  
✅ **Whitespace Check**: Cannot be empty or only spaces  

**Error Response Example:**
```json
{
  "error": "Validation error",
  "message": "Text field is required. Please provide a URL or message to analyze."
}
```

## 🎓 Code Walkthrough (Beginner-Friendly)

### How It Works (Step-by-Step)

1. **Client sends request** → POST to `/api/analyze` with text
2. **Route receives request** → `routes/analyze.js` forwards to controller
3. **Controller validates input** → Checks if text is valid
4. **Detector analyzes text** → Applies 10 phishing detection rules
5. **Each rule checks content** → Adds score + reason if pattern matches
6. **Calculate risk level** → Based on total score (Safe/Suspicious/Risky)
7. **Return result** → JSON with riskLevel, score, and reasons

### Example: Adding a New Rule

Want to add a rule to detect excessive exclamation marks? Here's how:

```javascript
// In server/utils/phishingDetector.js

// Count exclamation marks
const exclamationCount = (text.match(/!/g) || []).length;

if (exclamationCount > 3) {
    score += 10;
    reasons.push('Excessive exclamation marks - often used in scams');
}
```

That's it! The rule is now active.

## 🔧 Configuration

### Port Configuration
Default port is `5000`. Change via environment variable:

```bash
PORT=3000 npm run server
```

### CORS Configuration
Currently allows all origins. For production, restrict in `server/index.js`:

```javascript
app.use(cors({
    origin: 'http://localhost:5173' // Only allow your frontend
}));
```

## 📚 Technologies Used

- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **ES6 Modules** - Modern JavaScript imports

## ❌ What This Backend Does NOT Include

To keep it simple and beginner-friendly, we intentionally excluded:

- ❌ Authentication/Authorization
- ❌ Database connections
- ❌ Logging systems (Winston, Morgan)
- ❌ Rate limiting
- ❌ Machine learning models
- ❌ External security APIs
- ❌ Real-time scanning
- ❌ User sessions
- ❌ File uploads
- ❌ WebSockets

## 🧪 Testing the API

### Using cURL

```bash
# Health check
curl http://localhost:5000/api/health

# Analyze content
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"text":"Urgent! Verify your account at http://bit.ly/verify-now"}'
```

### Using Postman or Thunder Client

1. Create POST request to `http://localhost:5000/api/analyze`
2. Set header: `Content-Type: application/json`
3. Body (raw JSON):
```json
{
  "text": "Your test URL or message here"
}
```

## 📝 Example Test Cases

### Test Case 1: Safe Content
```json
{
  "text": "Check out this article: https://wikipedia.org/wiki/Phishing"
}
```
Expected: `Safe` (low score, no phishing indicators)

### Test Case 2: Suspicious Content
```json
{
  "text": "Please verify your account information at your earliest convenience"
}
```
Expected: `Suspicious` (moderate score, some keywords)

### Test Case 3: Risky Content
```json
{
  "text": "URGENT! Your account will be suspended! Click here NOW: http://bit.ly/verify-account-password"
}
```
Expected: `Risky` (high score, multiple red flags)

## 🎯 Learning Objectives

By studying this backend, beginners will learn:

1. **Express.js basics** - Routes, middleware, error handling
2. **RESTful API design** - POST endpoints, JSON responses
3. **Input validation** - Checking user input before processing
4. **Modular architecture** - Separating routes, controllers, utilities
5. **String pattern matching** - Using includes(), regex, filters
6. **Rule-based systems** - Building logic with if/else and scoring
7. **CORS** - Allowing cross-origin requests
8. **Error handling** - Try/catch and proper error responses

## 🤝 Contributing

This is an educational project. Feel free to:
- Add new phishing detection rules
- Improve existing rules
- Add more test cases
- Enhance documentation

## 📄 License

Educational use - SUBATHON 26 Project

---

**Built with ❤️ for cybersecurity awareness and education**
