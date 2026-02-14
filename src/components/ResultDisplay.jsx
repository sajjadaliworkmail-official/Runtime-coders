import './ResultDisplay.css';

function ResultDisplay({ result, onReset }) {
    const { riskLevel, score, reasons } = result;

    const getRiskClass = (level) => {
        const levelLower = level.toLowerCase();
        if (levelLower === 'safe') return 'risk-safe';
        if (levelLower === 'suspicious') return 'risk-suspicious';
        if (levelLower === 'risky') return 'risk-risky';
        return 'risk-suspicious';
    };

    const getRiskColor = (level) => {
        const levelLower = level.toLowerCase();
        if (levelLower === 'safe') return '#48bb78';
        if (levelLower === 'suspicious') return '#ecc94b';
        if (levelLower === 'risky') return '#fc8181';
        return '#ecc94b';
    };

    return (
        <div className="result-display">
            <div className={`risk-badge ${getRiskClass(riskLevel)}`}>
                <div className="risk-level">{riskLevel}</div>
                {score !== undefined && (
                    <div className="risk-score">Risk Score: {score}/100</div>
                )}
            </div>

            {reasons && reasons.length > 0 && (
                <div className="reasons-section">
                    <h3 className="reasons-title">Analysis Details</h3>
                    <ul className="reasons-list">
                        {reasons.map((reason, index) => (
                            <li key={index} className="reason-item">
                                <span className="reason-bullet" style={{ backgroundColor: getRiskColor(riskLevel) }}></span>
                                <span className="reason-text">{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button className="reset-button" onClick={onReset}>
                Check Another
            </button>
        </div>
    );
}

export default ResultDisplay;
