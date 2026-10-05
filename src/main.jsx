import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './V5App.jsx';
import './styles.css';
import './v4.css';
import './reader.css';
import './v5.css';
import 'katex/dist/katex.min.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
