import express from 'express';
import cors from 'cors';
import { analyzeContent } from './analysis.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main check endpoint
app.post('/api/check', (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    // Perform heuristic analysis
    const result = analyzeContent(content);

    // Simulate API delay
    setTimeout(() => {
        res.json(result);
    }, 1000);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`PhishEye Backend API running on http://localhost:${PORT}`);
});
