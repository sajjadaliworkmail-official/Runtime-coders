/**
 * PhishEye Backend Server
 * 
 * A simple, beginner-friendly Node.js + Express.js backend for phishing detection.
 * This server provides a single endpoint to analyze URLs and messages for phishing risks.
 * 
 * Educational Purpose: This is a rule-based system for awareness, not a security guarantee.
 */

import express from 'express';
import cors from 'cors';
import analyzeRouter from './routes/analyze.js';

// Create Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
// CORS: Allow requests from React frontend (running on different port)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Routes
// Health check endpoint - verify server is running
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'PhishEye API is running',
        timestamp: new Date().toISOString()
    });
});

// Analysis endpoint - main phishing detection route
app.use('/api', analyzeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: `Cannot ${req.method} ${req.path}`
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ PhishEye Backend API running on http://localhost:${PORT}`);
    console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔍 Analyze endpoint: POST http://localhost:${PORT}/api/analyze`);
});
