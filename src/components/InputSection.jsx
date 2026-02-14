import './InputSection.css';

function InputSection({ value, onChange, onSubmit, loading, error }) {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            onSubmit();
        }
    };

    return (
        <div className="input-section">
            <div className="input-wrapper">
                <textarea
                    className="input-textarea"
                    placeholder="Paste a URL or message here…"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    rows={6}
                />
            </div>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            <button
                className="submit-button"
                onClick={onSubmit}
                disabled={loading}
            >
                {loading ? 'Checking Safety...' : 'Check Safety'}
            </button>

            <p className="hint-text">
                Tip: Press Ctrl + Enter to submit
            </p>
        </div>
    );
}

export default InputSection;
