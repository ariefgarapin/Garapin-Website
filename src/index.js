import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Navigation from './navigation/navigation.js';
import Welcome from './welcome.js';
import Footer from './footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <Welcome />
    <Footer />
  </React.StrictMode>
);
