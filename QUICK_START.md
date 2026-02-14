# PhishEye - Quick Start Guide

## 🎉 Your Application is Ready!

The PhishEye frontend is **already running** at:
### **http://localhost:5173**

Open this URL in your browser to see the application!

---

## 📁 Project Structure

```
SUBATHON 26/
├── src/
│   ├── App.jsx                      # Main application
│   ├── App.css                      # Global styles
│   ├── main.jsx                     # Entry point
│   ├── components/
│   │   ├── InputSection.jsx         # Input component
│   │   ├── InputSection.css         # Input styles
│   │   ├── ResultDisplay.jsx        # Results component
│   │   └── ResultDisplay.css        # Results styles
│   └── services/
│       └── api.js                   # API service
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite config
├── README.md                        # Full documentation
├── PROJECT_SUMMARY.md               # Detailed summary
├── api-examples.js                  # Backend integration guide
├── ui-preview.html                  # Static UI preview
└── .env.example                     # Environment template
```

---

## 🚀 What You Can Do Right Now

### 1. View the Live Application
```
Open: http://localhost:5173
```

### 2. View Static UI Preview (No Backend Needed)
```
Open: ui-preview.html in your browser
```
This shows the UI with sample data so you can see the design.

### 3. Stop the Dev Server
Press `Ctrl + C` in the terminal where it's running.

### 4. Restart the Dev Server
```bash
cmd /c npm run dev
```

---

## 🔌 Backend Integration

### Expected API Endpoint
```
POST /api/check
```

### Request Format
```json
{
  "content": "URL or message to check"
}
```

### Response Format
```json
{
  "riskLevel": "Safe | Suspicious | Risky",
  "score": 0-100,
  "reasons": [
    "Reason 1",
    "Reason 2"
  ]
}
```

### Configure API URL
1. Copy `.env.example` to `.env`
2. Set your backend URL:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

See `api-examples.js` for complete response examples.

---

## 🎨 UI Features

✅ **Dark theme** with cyan-blue accents  
✅ **Color-coded risk levels** (Green/Yellow/Red)  
✅ **Professional, minimalistic design**  
✅ **Responsive** (works on mobile)  
✅ **Loading states** and error handling  
✅ **Input validation**  
✅ **Keyboard shortcuts** (Ctrl + Enter)  

---

## 📚 Documentation Files

- **README.md** - Complete project documentation
- **PROJECT_SUMMARY.md** - Detailed feature summary
- **api-examples.js** - Backend integration examples
- **ui-preview.html** - Static UI preview

---

## 🛠️ Development Commands

```bash
# Start dev server (already running!)
cmd /c npm run dev

# Build for production
cmd /c npm run build

# Preview production build
cmd /c npm run preview
```

---

## ✨ Next Steps

1. ✅ **View the app**: Open http://localhost:5173
2. ✅ **Review the code**: Check out the clean component structure
3. 🔲 **Build backend**: Follow the format in `api-examples.js`
4. 🔲 **Test integration**: Connect your backend API
5. 🔲 **Deploy**: Build and deploy when ready!

---

## 🎯 Key Design Decisions

- **No UI libraries**: Pure React + vanilla CSS for maximum control
- **Component separation**: Clear separation between input and results
- **Service layer**: API calls isolated in `services/api.js`
- **Professional aesthetics**: Dark theme, clean typography, subtle interactions
- **Educational focus**: Clear disclaimers about tool limitations

---

**Status**: ✅ Running at http://localhost:5173  
**Ready for**: Backend integration and testing!
