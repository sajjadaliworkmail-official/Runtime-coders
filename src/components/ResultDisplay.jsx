import './ResultDisplay.css';

function ResultDisplay({ result }) {
    const { riskLevel, score, reasons } = result;

    // Determine risk class for styling
    const getRiskClass = () => {
        if (riskLevel === 'Safe') return 'risk-safe';
        if (riskLevel === 'Suspicious') return 'risk-suspicious';
        return 'risk-risky';
    };

    // Get risk color for visual distinction
    const getRiskColor = () => {
        if (riskLevel === 'Safe') return '#00ff88';
        if (riskLevel === 'Suspicious') return '#ffd700';
        return '#ff4444';
    };

    return (
        <div className="result-container">
            <div className={`risk-badge ${getRiskClass()}`}>
                <div className="risk-level">{riskLevel}</div>
                {score !== undefined && (
                    <div className="risk-score">Risk Score: {score}/100</div>
                )}
            </div>

            <div className="reasons-section">
                <h3 className="reasons-title">Analysis Details</h3>
                <ul className="reasons-list">
                    {reasons && reasons.length > 0 ? (
                        reasons.map((reason, index) => (
                            <li key={index} className="reason-item">
                                <span className="bullet" style={{ backgroundColor: getRiskColor() }}></span>
                                <span className="reason-text">{reason}</span>
                            </li>
                        ))
                    ) : (
                        <li className="reason-item">
                            <span className="reason-text">No specific details available</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ResultDisplay;
