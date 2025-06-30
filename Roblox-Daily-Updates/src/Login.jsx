
import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { animate, AnimatePresence, motion, scale } from 'framer-motion'

function Login() {




    return (
        <>



            <h1 style={{ fontWeight: "bolder" }}>Roblox Hub</h1>
            <p style={{ marginBottom: "25%", }}>Contribute and collaborate to create meaningful projects.</p>










            <motion.div style={{ justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,0.9)", height: "100%", width: "50%", border: "3px solid grey", borderRadius: 10 }}>
                <h3>SIGN-IN</h3>


                <p>EMAIL</p>
                <input placeholder=''></input>




                <p>LOBBY KEY</p>
                <input placeholder=''></input>

                <a>a</a>


            </motion.div>




        </>
    )



}

export default Login;