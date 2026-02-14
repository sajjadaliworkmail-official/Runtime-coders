/**
 * Analysis Controller
 * 
 * Handles the business logic for analyzing content for phishing risks.
 */

import { detectPhishingRisks } from '../utils/phishingDetector.js';

/**
 * Analyze content for phishing indicators
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export async function analyzeContent(req, res) {
    try {
        // Extract text from request body
        const { text } = req.body;

        // Input validation
        if (!text) {
            return res.status(400).json({
                error: 'Validation error',
                message: 'Text field is required. Please provide a URL or message to analyze.'
            });
        }

        // Validate text is a string
        if (typeof text !== 'string') {
            return res.status(400).json({
                error: 'Validation error',
                message: 'Text must be a string.'
            });
        }

        // Validate text length (prevent extremely long inputs)
        if (text.length > 5000) {
            return res.status(400).json({
                error: 'Validation error',
                message: 'Text is too long. Maximum 5000 characters allowed.'
            });
        }

        // Validate text is not just whitespace
        if (text.trim().length === 0) {
            return res.status(400).json({
                error: 'Validation error',
                message: 'Text cannot be empty or only whitespace.'
            });
        }

        // Perform phishing risk analysis
        const analysisResult = detectPhishingRisks(text);

        // Add a small delay to simulate processing (optional, for better UX)
        setTimeout(() => {
            res.json(analysisResult);
        }, 800);

    } catch (error) {
        console.error('Analysis error:', error);
        res.status(500).json({
            error: 'Analysis failed',
            message: 'An error occurred while analyzing the content.'
        });
    }
}
