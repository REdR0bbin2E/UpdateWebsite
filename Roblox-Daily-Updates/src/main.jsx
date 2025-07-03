import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ KEEP THIS



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//for routing around the website

//browserRouter is necessary and provides the URLS
//Routes make sure to establish different Routes with a path and an element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/app' element={<App />} />

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
