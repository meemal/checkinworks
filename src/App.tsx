import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programmes from './pages/Programmes';
import AnnualReports from './pages/AnnualReports';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    const path = currentPath.replace('.html', '');

    switch (path) {
      case '/':
      case '/index':
        return <Home onNavigate={navigate} />;
      case '/about':
        return <About onNavigate={navigate} />;
      case '/programmes':
        return <Programmes onNavigate={navigate} />;
      case '/annual-reports':
        return <AnnualReports onNavigate={navigate} />;
      case '/contact':
        return <Contact onNavigate={navigate} />;
      case '/privacy':
        return <Privacy onNavigate={navigate} />;
      case '/accessibility':
        return <Accessibility onNavigate={navigate} />;
      default:
        return <NotFound onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#A62D37] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
