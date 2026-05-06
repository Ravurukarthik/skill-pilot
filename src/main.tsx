
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Global error handling for production debugging
window.addEventListener('error', (event) => {
  // Try to log the error safely. Error objects might have circular refs.
  try {
    console.error('[Global Error]', event.error?.message || event.error || event.message);
  } catch (e) {
    console.error('[Global Error] Unloggable error occurred');
  }
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (err) {
  console.error("Critical mount error:", err);
  rootElement.innerHTML = `<div style="padding: 20px; color: white; background: #0f172a; font-family: sans-serif;">
    <h1>Application Error</h1>
    <p>Failed to initialize application core. Please check console for details.</p>
  </div>`;
}
