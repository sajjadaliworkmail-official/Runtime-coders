/**
 * PhishEye Backend Architecture Diagram
 * 
 * This file visualizes how the backend processes requests
 */

/*

┌─────────────────────────────────────────────────────────────────────────────┐
│                         PHISHEYE BACKEND FLOW                                │
└─────────────────────────────────────────────────────────────────────────────┘

1. CLIENT REQUEST
   ↓
   POST /api/analyze
   {
     "text": "URGENT! Verify account at http://bit.ly/verify"
   }
   ↓
   
2. EXPRESS SERVER (server/index.js)
   ↓
   • CORS Middleware ✓ (Allow cross-origin requests)
   • JSON Parser ✓ (Parse request body)
   ↓
   
3. ROUTER (server/routes/analyze.js)
   ↓
   • Match route: POST /api/analyze
   • Forward to controller
   ↓
   
4. CONTROLLER (server/controllers/analyzeController.js)
   ↓
   • Validate: text exists? ✓
   • Validate: text is string? ✓
   • Validate: text length < 5000? ✓
   • Validate: text not empty? ✓
   ↓
   
5. PHISHING DETECTOR (server/utils/phishingDetector.js)
   ↓
   ┌─────────────────────────────────────────────────────────┐
   │  RULE 1: Phishing Keywords                              │
   │  ✓ Found "urgent" → +25 points                          │
   │  → Reason: "Urgent language detected"                   │
   ├─────────────────────────────────────────────────────────┤
   │  RULE 2: URL Shorteners                                 │
   │  ✓ Found "bit.ly" → +30 points                          │
   │  → Reason: "URL shortener detected"                     │
   ├─────────────────────────────────────────────────────────┤
   │  RULE 3: IP-Based URLs                                  │
   │  ✗ Not found → +0 points                                │
   ├─────────────────────────────────────────────────────────┤
   │  RULE 4: Suspicious Domains                             │
   │  ✗ Not found → +0 points                                │
   ├─────────────────────────────────────────────────────────┤
   │  RULE 5: Credential Requests                            │
   │  ✓ Found "verify" → +20 points                          │
   │  → Reason: "Requests sensitive information"             │
   ├─────────────────────────────────────────────────────────┤
   │  RULE 6-10: Other checks...                             │
   │  ✗ Not triggered                                        │
   └─────────────────────────────────────────────────────────┘
   ↓
   Total Score: 75 points
   ↓
   
6. RISK CLASSIFICATION
   ↓
   Score = 75
   ↓
   if (score >= 60) → riskLevel = "Risky" ✓
   else if (score >= 30) → riskLevel = "Suspicious"
   else → riskLevel = "Safe"
   ↓
   
7. BUILD RESPONSE
   ↓
   {
     "riskLevel": "Risky",
     "score": 75,
     "reasons": [
       "Urgent language detected (e.g., 'urgent')",
       "URL shortener detected (bit.ly) - hides destination",
       "Requests sensitive information (verify)"
     ]
   }
   ↓
   
8. SEND RESPONSE TO CLIENT
   ↓
   HTTP 200 OK
   Content-Type: application/json
   ↓
   
9. FRONTEND RECEIVES & DISPLAYS
   ↓
   • Show risk badge (red for "Risky")
   • Display score: 75/100
   • List reasons with bullet points

═══════════════════════════════════════════════════════════════════════════════

ERROR HANDLING FLOW:

If validation fails:
   ↓
   HTTP 400 Bad Request
   {
     "error": "Validation error",
     "message": "Text field is required..."
   }

If server error occurs:
   ↓
   HTTP 500 Internal Server Error
   {
     "error": "Analysis failed",
     "message": "An error occurred..."
   }

═══════════════════════════════════════════════════════════════════════════════

FOLDER STRUCTURE:

server/
├── index.js ..................... Main server (Express setup)
│   ├── CORS middleware
│   ├── JSON parser
│   ├── Route mounting
│   └── Error handlers
│
├── routes/
│   └── analyze.js ............... Route definitions
│       └── POST /api/analyze
│
├── controllers/
│   └── analyzeController.js ..... Request handling
│       ├── Input validation (5 checks)
│       ├── Call detector
│       └── Return response
│
└── utils/
    └── phishingDetector.js ...... Detection logic
        ├── 10 detection rules
        ├── Scoring algorithm
        └── Risk classification

═══════════════════════════════════════════════════════════════════════════════

DETECTION RULES SUMMARY:

Rule                          Points    Trigger Example
────────────────────────────────────────────────────────────────────────────
1. Phishing Keywords          +25       "urgent", "verify", "act now"
2. URL Shorteners             +30       "bit.ly", "tinyurl.com"
3. IP-Based URLs              +35       "http://192.168.1.1"
4. Suspicious Domains         +30       "paypal-secure", "bank-login"
5. Credential Requests        +20       "password", "credit card"
6. Excessive Special Chars    +15       >30% special characters
7. Mixed Case URLs            +10       "http://PayPal.com"
8. @ Symbol in URL            +25       "http://google.com@evil.com"
9. Excessive Subdomains       +15       "a.b.c.d.e.com"
10. Suspicious Extensions     +40       ".exe", ".zip", ".bat"

═══════════════════════════════════════════════════════════════════════════════

*/

export const architectureDiagram = "See comments above for visual flow";
