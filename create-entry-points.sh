#!/bin/bash

# Script to create all entry point files for the multi-page architecture

mkdir -p src

# Create main-home.tsx
cat > src/main-home.tsx << 'EOF'
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
EOF

# Create main-about.tsx
cat > src/main-about.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
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
      <Header currentPath="/about" />
      <main id="main-content" className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
EOF

# Create main-programmes.tsx
cat > src/main-programmes.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Programmes from './pages/Programmes';
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
      <Header currentPath="/programmes" />
      <main id="main-content" className="flex-grow">
        <Programmes />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
EOF

# Create main-contact.tsx
cat > src/main-contact.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
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
      <Header currentPath="/contact" />
      <main id="main-content" className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
EOF

# Create main-annual-reports.tsx
cat > src/main-annual-reports.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnualReports from './pages/AnnualReports';
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
      <Header currentPath="/annual-reports" />
      <main id="main-content" className="flex-grow">
        <AnnualReports />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
EOF

# Create main-privacy.tsx
cat > src/main-privacy.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
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
      <Header currentPath="/privacy" />
      <main id="main-content" className="flex-grow">
        <Privacy />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
EOF

# Create main-accessibility.tsx
cat > src/main-accessibility.tsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Accessibility from './pages/Accessibility';
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
      <Header currentPath="/accessibility" />
      <main id="main-content" className="flex-grow">
        <Accessibility />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
EOF

echo "✓ Created all entry point files"
echo "Files created:"
ls -1 src/main-*.tsx

