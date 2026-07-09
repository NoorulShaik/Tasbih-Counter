import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import TasbihCounter from './TasbihCounter.jsx'
import TasbihCounter from './tasbih_counter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasbihCounter />
  </StrictMode>,
)
