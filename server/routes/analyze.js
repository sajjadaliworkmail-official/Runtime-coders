/**
 * Analysis Routes
 * 
 * Defines the API endpoints for phishing content analysis.
 */

import express from 'express';
import { analyzeContent } from '../controllers/analyzeController.js';

const router = express.Router();

/**
 * POST /api/analyze
 * 
 * Analyzes a URL or message for phishing indicators.
 * 
 * Request body:
 * {
 *   "text": "string - URL or message to analyze"
 * }
 * 
 * Response:
 * {
 *   "riskLevel": "Safe" | "Suspicious" | "Risky",
 *   "score": number (0-100),
 *   "reasons": string[] - human-readable explanations
 * }
 */
router.post('/analyze', analyzeContent);

export default router;
