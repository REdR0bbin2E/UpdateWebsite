import { Home, Users, Settings, Menu, Bell, Search, User, FileText, BarChart3, Calendar, X, ChevronLeft, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, scale, degrees } from 'framer-motion'
import { logout } from './auth'
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
    navigation = useNavigate();


    const menuItems = [
        { icon: <Home size={20} />, label: 'Dashboard', badge: null },
        { icon: <FileText size={20} />, label: 'Projects', badge: null },
        { icon: <Calendar size={20} />, label: 'Calendar', badge: null },
        { icon: <Bell size={20} />, label: 'Notifications', badge: null },
        { icon: <Settings size={20} />, label: 'Settings', badge: null },
        { icon: <X size={20} />, label: 'Log-Out', badge: null },

    ];

    //WIP letting user lock sidebar
    const projects = [
        { name: "Project 1" },
        { name: "Project 2" },
        { name: "Project 3" },
        { name: "Project 4" },
        { name: "Project 5" },];

    function navigationCenter(props) {

        if (props == 'Dashboard') {
            setActiveItem(props)
            navigation('/dashboard')
        }
        else if (props == 'Calendar') {
            setActiveItem(props)
            navigation('/calendar')
        }
        else if (props == 'Projects') {
            //setActiveItem(props)
            setShowProjects(!showProjects)

        }
        else if (props == 'Log-Out') {
            setActiveItem(props)
            handleSignOut()
        }
        else if (props == 'Settings') {
            setActiveItem(props)
            navigation('/settings')
        }


    }

    function selectedProject(props) {
        if (props == "Project 1") {
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
        modalUseRef = useRef(null)


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
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">M</span>
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
                            <div>
                                <SidebarLink
                                    key={item.label}
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
                                    projects.map((item) => (
                                        <div key={item.name} style={{ marginTop: "5%", marginLeft: "15%" }}>
                                            <button onClick={() => selectedProject(item.name)} style={{ borderRadius: 15, borderWidth: 2, paddingLeft: "30%", paddingRight: "30%" }}>

                                                {item.name}
                                            </button>
                                        </div>
                                    ))
                                )}



                            </div>
                        ))}
                    </nav>

                    {/* User Profile */}
                    <button className="p-4 border-t border-slate-700/50">
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
                } ${isCollapsed ? 'justify-center' : ''} ${label == "Log-Out" && !isCollapsed && 'bg-red-500 hover:bg-red-600'} ${label == "Settings" && !isCollapsed && 'bg-blue-500 hover:bg-blue-600'} `}
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
                <ChevronLeft style={{ marginLeft: "-35px" }} />
            )
            }







        </div>
    );
}