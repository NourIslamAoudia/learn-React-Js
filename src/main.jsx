import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// recupirer l'element racine et le rendre
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
