import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TasbihCounter from './TasbihCounter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasbihCounter />
  </StrictMode>,
)
