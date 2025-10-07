import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Programmes from './pages/Programmes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Programmes />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
