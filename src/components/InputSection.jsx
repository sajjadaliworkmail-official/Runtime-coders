import { useState } from 'react';
import { analyzePhishing } from '../services/api';
import './InputSection.css';

function InputSection({ onAnalysis, onLoading, onError }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input
        if (!inputValue.trim()) {
            onError('Please enter a URL or message to analyze');
            return;
        }

        // Start loading
        onLoading(true);
        onError(null);

        try {
            // Call API
            const result = await analyzePhishing(inputValue.trim());

            // Pass result to parent
            onAnalysis(result);
        } catch (err) {
            onError('Failed to analyze content. Please try again.');
        } finally {
            onLoading(false);
        }
    };

    return (
        <form className="input-section" onSubmit={handleSubmit}>
            <textarea
                className="input-textarea"
                placeholder="Paste a URL or message here…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={6}
            />
            <button type="submit" className="submit-button">
                Check Safety
            </button>
        </form>
    );
}

export default InputSection;
