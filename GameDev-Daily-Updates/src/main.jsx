import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ KEEP THIS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx';
import Settings from './Settings.jsx';
import Calendar from './Calendar.jsx';
import PrivateRoute from './PrivateRoute.jsx';
// src/auth.js
import { auth } from '../src/config/firebase'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const signupWithEmail = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: username,
    });


    await userCredential.user.reload(); // optional
    return userCredential.user;


  }
  catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};


export const signinWithEmail = async (email, password) => {
  try {
    const userInfo = await signInWithEmailAndPassword(auth, email, password);


    await userInfo.user.reload();
    return userInfo.user;

  }
  catch (error) {
    console.error("Signin error", error);
    throw error;
  }


}

export const logout = async () => {
  return signOut(auth)

}


//for routing around the website

//browserRouter is necessary and provides the URLS
//Routes make sure to establish different Routes with a path and an element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/app' element={
          <PrivateRoute>
            <App />
          </PrivateRoute>

        } />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path='/sidebar' element={
          <PrivateRoute>
            <Sidebar />
          </PrivateRoute>
        } />
        <Route path='/settings' element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        } />
        <Route path='/calendar' element={
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        } />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
