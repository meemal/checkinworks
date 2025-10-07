import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#A62D37] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Header currentPath="/" />
      <main id="main-content" className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
