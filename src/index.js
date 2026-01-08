import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Preload critical resources
const preloadFonts = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Initialize
preloadFonts();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

