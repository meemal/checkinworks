interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/images/logos/Giraffe Logo white.svg"
              alt="Check-In Works with Giraffe"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 mb-2">
              Scottish Charity Number: SC123456
            </p>
            <p className="text-sm text-gray-300">
              Registered Address: Perth & Kinross, Scotland
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => onNavigate('/impact')}
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Impact & Reports
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => onNavigate('/privacy')}
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onNavigate('/accessibility')}
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                Accessibility
              </button>
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
