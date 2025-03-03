import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
// Replace 'YOUR_USER_ID' with your actual EmailJS user ID
emailjs.init('U3bBDK1w-ox2m_ZlU');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);