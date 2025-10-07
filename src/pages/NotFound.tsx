import { Home, BookOpen, Mail } from 'lucide-react';
import Button from '../components/Button';

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ADD1D9] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-8xl font-bold text-[#A62D37] mb-6">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Page not found
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Sorry, we could not find the page you are looking for. Perhaps one of these links will help.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Home size={48} className="mx-auto mb-4 text-[#A62D37]" />
            <h3 className="font-bold text-lg text-gray-900 mb-3">Home</h3>
            <Button onClick={() => onNavigate('/')} variant="primary">
              Go home
            </Button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <BookOpen size={48} className="mx-auto mb-4 text-[#035AA6]" />
            <h3 className="font-bold text-lg text-gray-900 mb-3">Our Programme</h3>
            <Button onClick={() => onNavigate('/programmes')} variant="secondary">
              View programmes
            </Button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Mail size={48} className="mx-auto mb-4 text-[#A66D3C]" />
            <h3 className="font-bold text-lg text-gray-900 mb-3">Contact</h3>
            <Button onClick={() => onNavigate('/contact')} variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
