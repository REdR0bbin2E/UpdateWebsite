import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ KEEP THIS



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup /> {/* Once finished with login screen switch back to app*/}
  </StrictMode>,
)
