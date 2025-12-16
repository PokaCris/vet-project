import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from './services/init.js'

initializeApp().then(initialized => {
  if (!initialized) {
    console.warn('Приложение инициализировано без CSRF токена');
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
})
