/**
 * PhishEye Backend Test Examples
 * 
 * This file contains example test cases to verify the phishing detection rules.
 * You can run these tests manually by starting the server and using these examples.
 */

// Test cases with expected outcomes
export const testCases = [
    {
        name: "Safe - Wikipedia Link",
        input: "Check out this article about phishing: https://wikipedia.org/wiki/Phishing",
        expected: {
            riskLevel: "Safe",
            scoreRange: [0, 20]
        }
    },
    {
        name: "Safe - Normal Message",
        input: "Hello, here's the document you requested from our meeting yesterday.",
        expected: {
            riskLevel: "Safe",
            scoreRange: [0, 20]
        }
    },
    {
        name: "Suspicious - Urgency Keyword",
        input: "Please verify your account information at your earliest convenience.",
        expected: {
            riskLevel: "Suspicious",
            scoreRange: [25, 50]
        }
    },
    {
        name: "Suspicious - URL Shortener",
        input: "Check out this cool website: http://bit.ly/awesome-deals",
        expected: {
            riskLevel: "Suspicious",
            scoreRange: [30, 50]
        }
    },
    {
        name: "Risky - Multiple Red Flags",
        input: "URGENT! Your account will be suspended! Verify your password immediately: http://bit.ly/verify-now",
        expected: {
            riskLevel: "Risky",
            scoreRange: [60, 100]
        }
    },
    {
        name: "Risky - IP-Based URL",
        input: "Click here to login: http://192.168.1.100/login.php",
        expected: {
            riskLevel: "Risky",
            scoreRange: [35, 70]
        }
    },
    {
        name: "Risky - Credential Request + Urgency",
        input: "Urgent: Confirm your credit card and password to prevent account closure",
        expected: {
            riskLevel: "Risky",
            scoreRange: [60, 100]
        }
    },
    {
        name: "Risky - Typosquatting Domain",
        input: "Update your payment method at paypal-secure-login.com/verify",
        expected: {
            riskLevel: "Risky",
            scoreRange: [50, 80]
        }
    },
    {
        name: "Risky - @ Symbol Trick",
        input: "Login to your account: http://google.com@malicious-site.com/login",
        expected: {
            riskLevel: "Risky",
            scoreRange: [25, 60]
        }
    },
    {
        name: "Risky - Suspicious File Extension",
        input: "Download your invoice here: http://example.com/invoice.exe",
        expected: {
            riskLevel: "Risky",
            scoreRange: [40, 80]
        }
    }
];

/**
 * How to test manually:
 * 
 * 1. Start the server: npm run server
 * 
 * 2. Use cURL to test each case:
 * 
 *    curl -X POST http://localhost:5000/api/analyze \
 *      -H "Content-Type: application/json" \
 *      -d '{"text":"YOUR_TEST_TEXT_HERE"}'
 * 
 * 3. Or use the frontend by running: npm run dev
 * 
 * 4. Or use Postman/Thunder Client with POST requests
 */

// Example cURL commands for each test case
export const curlCommands = testCases.map(test => ({
    name: test.name,
    command: `curl -X POST http://localhost:5000/api/analyze -H "Content-Type: application/json" -d '{"text":"${test.input.replace(/"/g, '\\"')}"}'`
}));

// Print test cases in a readable format
if (import.meta.url === `file://${process.argv[1]}`) {
    console.log('\n📋 PhishEye Backend Test Cases\n');
    console.log('='.repeat(80));

    testCases.forEach((test, index) => {
        console.log(`\n${index + 1}. ${test.name}`);
        console.log('-'.repeat(80));
        console.log(`Input: "${test.input}"`);
        console.log(`Expected Risk: ${test.expected.riskLevel}`);
        console.log(`Expected Score: ${test.expected.scoreRange[0]}-${test.expected.scoreRange[1]}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log('\n💡 To test: Start server with "npm run server" and use the frontend or cURL\n');
}
