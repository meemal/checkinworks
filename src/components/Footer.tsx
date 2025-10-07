export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Check-In Works</h3>
            <p className="text-sm text-gray-300 mb-2">
              Scottish Charity Number: SC041642
            </p>
            <p className="text-sm text-gray-300">
              Registered Address: Perth & Kinross, Scotland
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/annual-reports.html"
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Annual Reports
              </a>
              <a
                href="/contact.html"
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </a>
              <a
                href="/privacy.html"
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </a>
              <a
                href="/accessibility.html"
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Accessibility
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Accreditations</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-3 rounded-lg">
                <img
                  src="/images/logos/Giraffe OSCR Logo.png"
                  alt="OSCR Registered Charity"
                  className="h-16 object-contain"
                />
              </div>
              <div className="bg-white p-3 rounded-lg">
                <img
                  src="/images/logos/DisabilityConfidentLeader-Giraffe.png"
                  alt="Disability Confident Leader"
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          <p className="mb-2">
            © {new Date().getFullYear()} Check-In Works. All rights reserved.
          </p>
          <p>
            Website built with <a href="https://humantouch.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Human Touch AI</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
