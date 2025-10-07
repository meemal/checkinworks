import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Privacy />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
