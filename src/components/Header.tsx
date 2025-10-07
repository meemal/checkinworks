import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Programme', path: '/programmes' },
  { label: 'Annual Reports', path: '/annual-reports' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/images/logos/Checkin-works-logo-h.svg"
              alt="Check-In Works"
              className="h-24"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  currentPath === item.path || (currentPath === '/index.html' && item.path === '/')
                    ? 'text-[#A62D37]'
                    : 'text-gray-700 hover:text-[#A62D37]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.giraffe-trading.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-[#035AA6] text-white rounded-lg hover:bg-[#024a8a] transition-colors text-sm font-medium"
            >
              Giraffe Trading
              <ExternalLink size={14} />
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#A62D37] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPath === item.path || (currentPath === '/index.html' && item.path === '/')
                    ? 'bg-[#A62D37] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.giraffe-trading.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-[#035AA6] text-white rounded-lg hover:bg-[#024a8a] transition-colors"
            >
              Visit Giraffe Trading
              <ExternalLink size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
