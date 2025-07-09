import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, scale } from 'framer-motion'
import { Mail, User, Key, Eye, EyeOff, ArrowRight, Gamepad2 } from 'lucide-react'
import './Dashboard.css'
import './index.css'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { signinWithEmail } from './auth'
import { right } from '@popperjs/core'
import { auth } from '../src/config/firebase'
import { FirebaseError } from 'firebase/app'

{/* to prevent putting wrapping everything in <body> w classname andd freezing website smh*/ }




function Dashboard() {

    const [screenWrapper, setScreenWrapper] = useState("5%");

    const projects = [
        { projectName: "The Raq", developers: ["Red", "Kirin", "Tripp", "Mag", "Rail", "Fuze"] },
        { projectName: "New Project", developers: [""] },
        { projectName: "New Project", developers: [""] },
        { projectName: "New Project", developers: [""] },
        { projectName: "New Project", developers: [""] }
    ]

    useEffect(() => {
        document.body.classList.add('dashboard-background');
        return () => document.body.classList.remove('dashboard-background');
    }, []);





    return (
        <>

            <div style={{ marginLeft: screenWrapper, position: "relative", flexDirection: 'row' }}>




                <motion.div onHoverStart={() => setScreenWrapper("20%")} onHoverEnd={() => setScreenWrapper("5%")}>

                    <Sidebar />

                </motion.div>


                <h1>DASHBOARD</h1>





            </div>

        </>

    )
}

export default Dashboard;

