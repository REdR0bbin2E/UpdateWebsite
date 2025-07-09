import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, scale } from 'framer-motion'
import { Mail, User, Key, Eye, EyeOff, ArrowRight, Gamepad2 } from 'lucide-react'
import './Calendar.css'
import './index.css'
import Sidebar from './Sidebar'


{/* to prevent putting wrapping everything in <body> w classname andd freezing website smh*/ }




function Calendar() {

    const [screenWrapper, setScreenWrapper] = useState("5%");


    useEffect(() => {
        document.body.classList.add('calendar-background');
        return () => document.body.classList.remove('calendar-background');
    }, []);


    return (
        <>

            <div style={{ marginLeft: screenWrapper, position: "relative", flexDirection: 'row' }}>




                <motion.div onHoverStart={() => setScreenWrapper("20%")} onHoverEnd={() => setScreenWrapper("5%")}>

                    <Sidebar />

                </motion.div>


                <h1>CALENDAR</h1>





            </div>

        </>

    )
}

export default Calendar;

