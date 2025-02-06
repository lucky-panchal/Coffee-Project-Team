import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ImgCounter } from './context api/contextApi';



const root = ReactDOM.createRoot(document.getElementById('root'));

//! Preventing Zoom on Ctrl + or Ctrl -
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
      event.preventDefault();
  }
});

//! Preventing Zoom on Pinch Gestures
document.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
      event.preventDefault();
  }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});


root.render(
  <React.StrictMode>
    <ImgCounter>
      <App />
    </ImgCounter>
  </React.StrictMode>
);

