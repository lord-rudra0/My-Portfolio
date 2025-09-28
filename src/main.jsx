import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Show scrollbar thumb while user is actively scrolling (improves perceived smoothness)
if (typeof window !== 'undefined') {
  let scrollTimer = null;
  function markScrolling() {
    document.body.classList.add('scrolling');
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      document.body.classList.remove('scrolling');
      scrollTimer = null;
    }, 900);
  }
  window.addEventListener('scroll', markScrolling, { passive: true });
}
