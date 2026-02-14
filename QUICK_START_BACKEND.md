# 🚀 PhishEye Quick Start Guide

## What is PhishEye?

PhishEye is a **cybersecurity awareness web application** that helps users identify phishing attempts in URLs and messages. It uses **rule-based detection** (no AI/ML) to educate users about common phishing patterns.

---

## ⚡ Quick Start (3 Steps)

### 1. Start the Backend Server
```bash
npm run server
```
✅ Backend runs on: `http://localhost:5000`

### 2. Start the Frontend (in a new terminal)
```bash
npm run dev
```
✅ Frontend runs on: `http://localhost:5174`

### 3. Open in Browser
Navigate to: `http://localhost:5174`

---

## 🧪 Try It Out

### Test Case 1: Safe Content
Paste this into the app:
```
Check out this article: https://wikipedia.org/wiki/Phishing
```
**Expected Result**: ✅ Safe (low score, no red flags)

### Test Case 2: Risky Content
Paste this into the app:
```
URGENT! Verify your password NOW: http://bit.ly/verify-account
```
**Expected Result**: 🚨 Risky (high score, multiple warnings)

---

## 📁 Project Structure

```
SUBATHON 26/
├── src/                          # Frontend (React)
│   ├── App.jsx                   # Main landing page
│   ├── components/               # UI components
│   └── services/
│       └── api.js               # Backend communication
│
├── server/                       # Backend (Node.js + Express)
│   ├── index.js                 # Main server
│   ├── routes/                  # API routes
│   ├── controllers/             # Request handlers
│   └── utils/                   # Phishing detection logic
│
└── package.json                  # Dependencies
```

---

## 🔍 How It Works

1. **User enters** a URL or message
2. **Frontend sends** POST request to `/api/analyze`
3. **Backend applies** 10 phishing detection rules
4. **Each rule** adds points and explanations
5. **Score determines** risk level (Safe/Suspicious/Risky)
6. **Frontend displays** color-coded results with reasons

---

## 📡 API Endpoints

### Health Check
```bash
GET http://localhost:5000/api/health
```

### Analyze Content
```bash
POST http://localhost:5000/api/analyze
Content-Type: application/json

{
  "text": "Your URL or message here"
}
```

**Response:**
```json
{
  "riskLevel": "Safe" | "Suspicious" | "Risky",
  "score": 0-100,
  "reasons": ["Explanation 1", "Explanation 2", ...]
}
```

---

## 🛡️ Detection Rules (10 Total)

| Rule | Points | Example |
|------|--------|---------|
| Phishing Keywords | +25 | "urgent", "verify account" |
| URL Shorteners | +30 | bit.ly, tinyurl.com |
| IP-Based URLs | +35 | http://192.168.1.1 |
| Suspicious Domains | +30 | paypal-secure.com |
| Credential Requests | +20 | "enter password" |
| Special Characters | +15 | Excessive symbols |
| Mixed Case URLs | +10 | http://PayPal.com |
| @ Symbol Trick | +25 | google.com@evil.com |
| Many Subdomains | +15 | a.b.c.d.e.com |
| Suspicious Files | +40 | .exe, .zip files |

**Risk Levels:**
- **Safe**: Score < 30
- **Suspicious**: Score 30-59
- **Risky**: Score ≥ 60

---

## 🎯 Key Features

✅ **Simple & Explainable** - No black-box AI  
✅ **Educational** - Shows why content is risky  
✅ **Rule-Based** - Transparent detection logic  
✅ **Beginner-Friendly** - Clean, readable code  
✅ **Professional Structure** - Industry-standard architecture  
✅ **Well Documented** - Extensive comments and guides  

---

## 📚 Documentation

- **Backend Details**: `server/README.md`
- **Architecture**: `server/ARCHITECTURE_DIAGRAM.js`
- **Test Cases**: `server/test-cases.js`
- **Implementation Summary**: `BACKEND_COMPLETE.md`

---

## 🧪 Testing with PowerShell

```powershell
# Test the API directly
Invoke-WebRequest -Uri "http://localhost:5000/api/analyze" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"text":"URGENT! Click here: http://bit.ly/verify"}' |
  Select-Object -ExpandProperty Content
```

---

## 🎓 Learning Objectives

This project teaches:
- **Frontend**: React, state management, API calls
- **Backend**: Express.js, REST APIs, validation
- **Security**: Phishing patterns, risk assessment
- **Architecture**: Modular code organization
- **Best Practices**: Error handling, documentation

---

## ⚠️ Important Notes

- This is an **educational tool**, not a security guarantee
- Always verify suspicious content through multiple sources
- Rule-based detection has limitations
- Use for awareness and learning purposes

---

## 🎉 Built For

**SUBATHON 26** - Cybersecurity Awareness Project

---

## 💡 Need Help?

1. **Backend not starting?** 
   - Check if port 5000 is available
   - Run: `npm install` to ensure dependencies

2. **Frontend not connecting?**
   - Ensure backend is running first
   - Check browser console for errors

3. **Want to add a rule?**
   - Edit: `server/utils/phishingDetector.js`
   - Add your detection logic
   - Test with the frontend

---

**Ready to go! Start both servers and open http://localhost:5174** 🚀
