
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, scale } from 'framer-motion'
import { Mail, User, Key, Eye, EyeOff, ArrowRight, Gamepad2 } from 'lucide-react'
import './Login.css'


function Login() {
    const [name, setName] = useState('')
    const [projectKey, setProjectKey] = useState('')
    const [email, setEmail] = useState('')
    const [showKey, setShowKey] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})



    function inputValidation() {
        const newErrors = {}

        if (!name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!email.trim()) {
            newErrors.email = 'Email is requried'
        }
        else if (!/|S+@|S+/.test(email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!projectKey.trim()) {
            newErrors.projectKey = 'Project Key is required'
        }

        setErrors(newErrors)


        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true)
            //Simulate API call

            setTimeout(() => {
                setIsLoading(false)
                alert('Navigating to project...')

            }, 2000)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const socialButtonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.98 }
    }

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #312e81 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            position: 'relative',
            overflow: 'hidden'
        },
        backgroundElement: {
            position: 'absolute',
            width: '288px',
            height: '288px',
            borderRadius: '50%',
            mixBlendMode: 'multiply',
            filter: 'blur(60px)',
            opacity: 0.2
        },
        backgroundElement1: {
            top: '80px',
            left: '40px',
            backgroundColor: '#a855f7'
        },
        backgroundElement2: {
            top: '160px',
            right: '40px',
            backgroundColor: '#3b82f6'
        },
        backgroundElement3: {
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#6366f1'
        },
        mainContainer: {
            width: '100%',
            maxWidth: '448px',
            position: 'relative',
            zIndex: 10
        },
        header: {
            textAlign: 'center',
            marginBottom: '32px'
        },
        iconContainer: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
            borderRadius: '16px',
            marginBottom: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            cursor: 'pointer'
        },
        title: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px',
            background: 'linear-gradient(135deg, #ddd6fe, #bfdbfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        subtitle: {
            color: '#d1d5db',
            fontSize: '18px',
            lineHeight: '1.6'
        },
        formCard: {
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
        },
        formTitle: {
            fontSize: '24px',
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
            marginBottom: '8px'
        },
        formSubtitle: {
            color: '#d1d5db',
            textAlign: 'center',
            marginBottom: '24px',
            lineHeight: '1.5'
        },
        inputContainer: {
            marginBottom: '16px'
        },
        inputWrapper: {
            position: 'relative'
        },
        inputIcon: {
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            width: '20px',
            height: '20px'
        },
        input: {
            width: '100%',
            paddingLeft: '48px',
            paddingRight: '16px',
            paddingTop: '16px',
            paddingBottom: '16px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            color: 'white',
            fontSize: '16px',
            outline: 'none',
            transition: 'all 0.3s ease',
            boxSizing: 'border-box',

        },
        inputError: {
            borderColor: '#f87171'
        },
        inputFocus: {
            borderColor: '#a855f7',
            background: 'rgba(255, 255, 255, 0.2)'
        },
        passwordInput: {
            paddingRight: '48px'
        },
        eyeButton: {
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '4px',
            transition: 'color 0.2s ease'
        },
        errorMessage: {
            color: '#f87171',
            fontSize: '14px',
            marginTop: '4px',
            marginLeft: '8px'
        },
        forgotLink: {
            background: 'none',
            border: 'none',
            color: '#c084fc',
            fontSize: '14px',
            cursor: 'pointer',
            textAlign: 'center',
            width: '100%',
            padding: '8px',
            transition: 'color 0.2s ease'
        },
        submitButton: {
            width: '100%',
            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
            color: 'white',
            padding: '16px',
            borderRadius: '16px',
            fontWeight: '600',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 10px 25px rgba(168, 85, 247, 0.3)',
            transition: 'all 0.2s ease',
            marginBottom: '24px'
        },
        submitButtonDisabled: {
            opacity: 0.5,
            cursor: 'not-allowed'
        },
        spinner: {
            width: '24px',
            height: '24px',
            border: '2px solid white',
            borderTop: '2px solid transparent',
            borderRadius: '50%'
        },
        divider: {
            display: 'flex',
            alignItems: 'center',
            margin: '24px 0'
        },
        dividerLine: {
            flex: 1,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)'
        },
        dividerText: {
            padding: '0 16px',
            color: '#9ca3af',
            fontSize: '14px'
        },
        socialButtons: {
            display: 'flex',
            gap: '12px'
        },
        socialButton: {
            flex: 1,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '12px',
            borderRadius: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
        }
    }


    return (
        <div styles={styles.container}>
            {/* Animated background elements */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <motion.div
                    style={{ ...styles.backgroundElement, ...styles.backgroundElement1 }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    style={{ ...styles.backgroundElement, ...styles.backgroundElement2 }}
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    style={{ ...styles.backgroundElement, ...styles.backgroundElement3 }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </div>


            <motion.div
                style={styles.mainContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >

                {/*Header*/}
                <motion.div style={styles.header} variants={itemVariants}>
                    <motion.div
                        style={styles.iconContainer}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Gamepad2 style={{ width: '40px', height: '40px', color: 'white' }} />
                    </motion.div>
                    <h1 style={styles.title}>
                        Roblox Hub
                    </h1>
                    <p style={styles.subtitle}>
                        Contribute and collaborate with likeminded individuals
                    </p>
                </motion.div>


                {/* Main Form Card*/}
                <motion.div
                    style={styles.formCard}
                    variants={itemVariants}
                    whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}>


                    <motion.h3
                        style={styles.formTitle}
                        variants={itemVariants}
                    >
                        Sign in with email
                    </motion.h3>

                    <motion.p
                        style={styles.formSubtitle}
                        variants={itemVariants}>

                        Input a key to join an existing collaborative project
                    </motion.p>


                    <div>
                        {/*Email Input */}
                        <motion.div variants={itemVariants} style={styles.inputContainer}>
                            <div style={styles.inputWrapper}>
                                <Mail style={styles.inputIcon} />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='myinput'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        ...styles.input,
                                        ...(errors.email ? styles.inputError : {}),
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#a855f7'
                                        e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                                    }}
                                    onBlur={(e) => {
                                        if (!errors.email) {
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                />
                                {/*The styling checks if errors has an email object if it does use the inputError Style*/}


                            </div>

                            {errors.email && (
                                <motion.p
                                    style={styles.errorMessage}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}>

                                    {errors.email}
                                </motion.p>

                            )}



                        </motion.div>
                        {/*Name Input*/}
                        <motion.div variants={itemVariants} style={styles.inputContainer}>
                            <div style={styles.inputWrapper}>
                                <User style={styles.inputIcon} />


                                <input
                                    className='myinput'
                                    type='text'
                                    placeholder='Name' value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#a855f7'
                                        e.target.style.background = 'rgba(255,255,255,0.2)'
                                    }}

                                    onBlur={(e) => {
                                        if (!errors.name) {
                                            e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                                            e.target.style.background = 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                />

                            </div>
                            {errors.name && (
                                <motion.p style={styles.errorMessage}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}>

                                    {errors.name}

                                </motion.p>
                            )}

                        </motion.div>

                        {/*Project Key Input */}
                        <motion.div variants={itemVariants}
                            style={styles.inputContainer}
                        >
                            <div style={styles.inputWrapper}>
                                <Key style={styles.inputIcon} />

                                <input
                                    className='myinput'
                                    type={showKey ? "text" : "password"}
                                    placeholder='Project Key' value={projectKey} onChange={(e) => setProjectKey(e.target.value)}
                                    style={{ ...styles.input, ...styles.passwordInput, ...(errors.projectKey ? styles.inputError : {}) }}

                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#a855f7'
                                        e.target.style.background = 'rgba(255,255,255,0.2)'
                                    }}

                                    onBlur={(e) => {
                                        if (!errors.projectKey) {
                                            e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                                            e.target.style.background = 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                />
                                {/*This is for the Eye for project key okok*/}
                                <button type="button"
                                    onClick={() => setShowKey(!showKey)} style={styles.eyeButton}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}

                                >
                                    {/* Note for later: go back and restyle the eyeButton in style const to override button click background color */}
                                    {showKey ? <EyeOff style={{ width: '20px', height: '20px' }} /> : <Eye style={{ width: '20px', height: '20px' }} />}

                                </button>

                            </div>


                            {errors.projectKey && (
                                <motion.p style={styles.errorMessage}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}>

                                    {errors.projectKey}

                                </motion.p>
                            )}

                        </motion.div>


                        {/*Forget Key Link */}
                        <motion.div variants={itemVariants}
                            style={{ textAlign: 'center', marginBottom: '16px' }}>

                            <button style={styles.forgotLink}
                                onMouseEnter={(e) => e.target.style.color = '#ddd6fe'}
                                onMouseDown={(e) => e.target.style.color = '#c084fc'}>

                                Forgot project key?

                            </button>

                        </motion.div>


                        {/*Navigate button now */}
                        <motion.div variants={itemVariants}>
                            <motion.div onClick={inputValidation}
                                disabled={isLoading}
                                style={{ ...styles.submitButton, ...(isLoading ? styles.submitButtonDisabled : {}), justifySelf: "center" }}
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168,85,247,0.4)" }}
                                whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>


                                {isLoading ? (<motion.div style={styles.spinner} animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />) : (
                                    <>
                                        Navigate To Project

                                        <ArrowRight style={{ width: '20px', height: '20px' }} />
                                    </>

                                )}

                            </motion.div>

                        </motion.div>


                    </div>

                    {/* Divider */}
                    <motion.div variants={itemVariants} style={styles.divider}>
                        <div style={styles.dividerLine}></div>
                        <span style={styles.dividerText}>or sign in with</span>
                        <div style={styles.dividerLine}></div>
                    </motion.div>

                    {/* Social Login Buttons */}
                    <motion.div variants={itemVariants} style={styles.socialButtons}>
                        <motion.button
                            style={styles.socialButton}
                            variants={socialButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                            Google
                        </motion.button>
                        <motion.button
                            style={styles.socialButton}
                            variants={socialButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                            Roblox
                        </motion.button>
                        <motion.button
                            style={styles.socialButton}
                            variants={socialButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                            Apple
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Login






