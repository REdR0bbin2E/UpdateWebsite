
import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { animate, AnimatePresence, motion, scale } from 'framer-motion'

function Login() {

    function inputValidation(props) {
        if (name == '' || email == '' || projectKey == '') {
        }

    }


    const [signInOnTop, setSignInOnTop] = useState(false)
    const [name, setName] = useState('')
    const [projectKey, setProjectKey] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>

            <h1>
                Roblox Hub
            </h1>

            <p>Contribute and colaborate with likeminded individuals.</p>

            <motion.div
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(0,0,0,0.9)",
                    padding: "40px",
                    width: "80%", // Increase width
                    border: "3px solid grey",
                    borderRadius: 35,
                    zIndex: 2,
                    boxShadow: <shadow />

                }}
            >

                <div style={{ borderRadius: 5, position: "relative", width: "10%", height: "20%", background: "white" }}>
                    a
                </div>


                <h3 style={{ fontSize: "2rem" }}>Sign in with email</h3>

                <p style={{ marginTop: "0.25rem", fontSize: "1.1rem" }}>Input a key to join an existing collaborative roblox project.</p>
                <input onChange={i => setEmail(i.target.value)} placeholder="Email" style={{ marginTop: "1rem", borderRadius: 25, width: "100%", padding: "10px", fontSize: "1rem", marginBottom: "1rem" }} />
                <input onChange={i => setName(i.target.value)} placeholder="Name" style={{ marginTop: "1rem", borderRadius: 25, width: "100%", padding: "10px", fontSize: "1rem", marginBottom: "1rem" }} />
                <input onChange={i => setProjectKey(i.target.value)} placeholder="Project Key" style={{ marginTop: "1rem", borderRadius: 25, width: "100%", padding: "10px", fontSize: "1rem" }} />
                <p>forgot project key</p>
                <button onClick={inputValidation} style={{ borderRadius: 25, paddingLeft: "20%", paddingRight: "20%" }}>Navigate To Project</button>


                <p>or sign in with</p>

                <div style={{ borderRadius: 15, width: "100%" }}>
                    {/*Google Facebook and Apple go here */}
                    <button style={{ borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}>Google</button>
                    <button style={{ borderRadius: 0 }}>Roblox</button>
                    <button style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 50, borderBottomRightRadius: 50 }}>Apple</button>

                </div>
            </motion.div>


        </>
    )



}

export default Login;