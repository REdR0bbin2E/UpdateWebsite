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
    useEffect(() => {
        document.body.classList.add('dashboard-background');
        return () => document.body.classList.remove('dashboard-background');
    }, []);


    return (
        <>
            <Sidebar />
            <div>

            </div>

        </>

    )
}

export default Dashboard;

