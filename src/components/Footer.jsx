function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary-400 mb-4">PhishEye</h3>
                        <p className="text-gray-400 max-w-sm">
                            An educational cybersecurity tool designed to help users identify and understand phishing threats.
                            Built for SUBATHON 26 by Runtime Coders.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Project</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub Repository</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">License</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Event</h4>
                        <ul className="space-y-2">
                            <li><span className="text-gray-400">SUBATHON 26</span></li>
                            <li><span className="text-gray-400">Team: Runtime Coders</span></li>
                            <li><span className="text-gray-400">Track: Cybersecurity</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {currentYear} PhishEye. All rights reserved.</p>
                    <p>Designed for educational purposes.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
