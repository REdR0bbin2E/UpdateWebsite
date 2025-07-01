import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ KEEP THIS



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Once finished with login screen switch back to app*/}
  </StrictMode>,
)
