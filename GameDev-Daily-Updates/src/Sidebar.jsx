import { Home, Users, Settings, Menu, Bell, Search, User, FileText, BarChart3, Calendar, X, ChevronLeft, ChevronDown, Gamepad } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, scale, degrees } from 'framer-motion'
import { logout } from './auth' //needs curly brackets because 
import { auth } from '../src/config/firebase'
import { FirebaseError } from 'firebase/app'

export default function Sidebar() {

    const handleSignOut = async () => {
        try {
            await logout();
            alert('User logged out successfully!')
            navigation("/")
        } catch (error) {
            alert("User not logged out successfully.")
        }
    }


    const [isCollapsed, setIsCollapsed] = useState(true);
    const [activeItem, setActiveItem] = useState('Home');
    const [logoutModal, setLogoutModal] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [chevronDirection, changeChevronDirection] = useState("Left");
    const [menuLocked, setMenuLocked] = useState(false);
    const [showCreateProject, setShowCreateProject] = useState(false)
    const [showSettingsModal, setShowSettingsModal] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)
    const navigation = useNavigate();


    const menuItems = [
        { icon: <Home size={20} />, label: 'Home', badge: null },
        { icon: <FileText size={20} />, label: 'Projects', badge: null },
        { icon: <Calendar size={20} />, label: 'Calendar', badge: null },
        { icon: <Bell size={20} />, label: 'Notifications', badge: null },
        { icon: <Settings size={20} />, label: 'Settings', badge: null },
        { icon: <X size={20} />, label: 'Sign Out', badge: null },

    ];

    //WIP letting user lock sidebar
    const projects = [
        { name: "The Raq" },
        { name: "Project 2" },
        { name: "Project 3" },
        { name: "Project 4" },
        { name: "Project 5" },];

    function navigationCenter(props) {

        if (props == 'Home') {
            setActiveItem(props)
            navigation('/home')
        }
        else if (props == 'Calendar') {
            setActiveItem(props)
            navigation('/calendar')
        }
        else if (props == 'Projects') {
            //setActiveItem(props)
            setShowProjects(!showProjects)

        }
        else if (props == 'Sign Out') {
            setShowCreateProject(true)
        }
        else if (props == 'Settings') {
            setShowSettingsModal(true)
        }


    }


    function settingsModal() {



        return (
            <AnimatePresence>
                {showSettingsModal && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                        }}
                        onClick={() => setShowSettingsModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '40px',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                textAlign: 'center',
                                minWidth: '400px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 style={{ marginBottom: '20px' }}>Sign out of account?</h2>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                padding: "2rem"
                            }}>




                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    }


    function selectedProject(props) {
        if (props == "The Raq") {
            navigation('/app')
        }
        else if (props == "Project 2") {

        }
        else if (props == "Project 3") {

        }
        else if (props == "Project 4") {

        }
        else if (props == "Project 5") {

        }
    }

    function endedHover() {
        if (menuLocked == false) {
            setIsCollapsed(!isCollapsed)
            setShowProjects(false)
        }

    }


    function changeMenuLocked() {
        setMenuLocked(!menuLocked)
    }


    function checkIfMenuIsLockedForOnHoverStart() {
        if (menuLocked == false) {
            setIsCollapsed(!isCollapsed)
        }
        else {
            setIsCollapsed(false)
        }

    }

    function checkIfMenuIsLockedForOnHoverEnd() {
        if (isCollapsed == true) {
            endedHover()
        }
        else {

        }

    }

    {/* Modal for logging out user */ }
    const MyModal5 = ({ }) => {
        const modalUseRef = useRef(null)


        return (
            <div></div>

        )


    }

    return (
        <>
            <motion.div onHoverStart={() => checkIfMenuIsLockedForOnHoverStart()} onHoverEnd={() => endedHover()} className='sidebar-container'>
                <motion.div style={{ borderRightWidth: 1, borderStyle: "dashed", borderRight: "4px solid black" }} className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col transition-all duration-300 z-50 shadow-2xl ${isCollapsed ? 'w-16' : 'w-64'
                    }`}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                        {!isCollapsed && (
                            <div className="flex items-center gap-3">
                                <div style={{ borderRadius: 12 }} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        <Gamepad />
                                    </span>
                                </div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    CrewCreate
                                </h1>
                            </div>
                        )}
                        <div onClick={() => changeMenuLocked()}
                            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                        >
                            <Menu size={20} />
                        </div>
                    </div>

                    {/* Search Bar */}
                    {!isCollapsed && (
                        <div className="p-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                                />
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.label}>
                                <SidebarLink
                                    icon={item.icon}
                                    label={item.label}
                                    badge={item.badge}
                                    isActive={activeItem === item.label}
                                    isCollapsed={isCollapsed}
                                    showProjects={showProjects}
                                    onClick={() => navigationCenter(item.label)}
                                >
                                </SidebarLink>

                                {isCollapsed && item.label == "Notifications" && (
                                    <div style={{ marginTop: "225px" }} />
                                )}
                                {!isCollapsed && item.label == "Notifications" && (
                                    <div style={{ marginTop: "30%" }} />
                                )}

                                {!isCollapsed && item.label == 'Projects' && showProjects && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="ml-4 mt-2 space-y-1"
                                    >
                                        {projects.map((project) => (
                                            <motion.button
                                                key={project.name}
                                                onClick={() => selectedProject(project.name)}
                                                className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 border border-slate-600/30 hover:border-slate-500/50"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                    {project.name}
                                                </div>
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}



                            </div>
                        ))}
                    </nav>

                    {/* User Profile */}
                    <button onClick={() => setShowProfileModal(true)} className="p-4 border-t border-slate-700/50">
                        <div className={` flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors cursor-pointer ${isCollapsed ? 'justify-center' : ''
                            }`}>
                            <div style={{ padding: "0.5rem" }} className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                <User size={16} className="text-white" />
                            </div>
                            {!isCollapsed && (
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">John Doe</p>
                                    <p className="text-xs text-slate-400 truncate">john@example.com</p>
                                </div>
                            )}
                        </div>
                    </button>

                    {/* Footer */}
                    {!isCollapsed && (
                        <div className="p-4 text-xs text-slate-400 text-center border-t border-slate-700/50">
                            © 2025 Crew Create. All rights reserved.
                        </div>
                    )}
                </motion.div>
            </motion.div>


            <AnimatePresence>
                {showCreateProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                        }}
                        onClick={() => setShowCreateProject(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            style={{
                                background: 'rgba(0, 0, 0, 0.4)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '40px',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                textAlign: 'center',
                                minWidth: '400px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 style={{ marginBottom: '20px' }}>Sign out of account?</h2>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                padding: "2rem"
                            }}>
                                <button
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        color: 'white',
                                        padding: '12px 24px',
                                        paddingLeft: "3rem",
                                        paddingRight: "3rem",
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                    onClick={() => setShowCreateProject(false)}
                                >
                                    No
                                </button>

                                <button
                                    style={{
                                        background: 'rgba(255, 20, 20, 0.2)',
                                        border: '1px solid rgba(255, 20, 20, 0.3)',
                                        color: 'white',
                                        padding: '12px 24px',
                                        borderRadius: '10px',
                                        paddingLeft: "3rem",
                                        paddingRight: "3rem",
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                    onClick={() => handleSignOut()}
                                >
                                    Yes
                                </button>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>



            <AnimatePresence>
                {showSettingsModal && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                        }}
                        onClick={() => setShowSettingsModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '40px',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                textAlign: 'center',
                                minWidth: '400px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                padding: "2rem"
                            }}>




                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>




            <AnimatePresence>
                {showProfileModal && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                        }}
                        onClick={() => setShowProfileModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, x: -50 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '20px',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                textAlign: 'center',
                                minWidth: '300px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >

                            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} style={{
                                padding: "2rem"
                            }}>


                                <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
                                >
                                    <h2>ACCOUNT INFORMATION</h2>
                                    <button style={{ marginTop: "5%", borderRadius: 360, width: 150, height: 150 }}>
                                        Profile Picture
                                    </button>

                                    <p>Email : Mayo.akin3@gmail.com</p>
                                    <p>Display Name: RedRobbin23</p>
                                    <p>Join Date: 07/05/2025</p>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence >

        </>
    );
}

function SidebarLink({ icon, label, badge, isActive, isCollapsed, showProjects, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group relative ${isActive
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                : 'hover:bg-slate-700/50'
                } ${isCollapsed ? 'justify-center' : ''} ${label == "Sign Out" && !isCollapsed && 'bg-red-500 hover:bg-red-600'} ${label == "Settings" && !isCollapsed && 'bg-blue-500 hover:bg-blue-600'} `}
        >
            <div className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                {icon}
            </div>
            {!isCollapsed && (
                <>
                    <span className={`flex-1 font-medium ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {label}
                    </span>

                </>
            )}

            {/* Tooltip for collapsed state */}
            {isCollapsed && (
                <div className="absolute left-full ml-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {label}
                    {badge && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 rounded-full">
                            {badge}
                        </span>
                    )}
                </div>
            )}

            {!isCollapsed && label == "Projects" && (
                <motion.div
                    animate={{ rotate: showProjects ? -90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                >
                    <ChevronLeft size={16} />
                </motion.div>
            )}
        </div>
    );
}