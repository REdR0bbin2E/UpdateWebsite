import { Home, Users, Settings, Menu, Bell, Search, User, FileText, BarChart3, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, scale } from 'framer-motion'


export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const menuItems = [
        { icon: <Home size={20} />, label: 'Home', badge: null },
        { icon: <BarChart3 size={20} />, label: 'Analytics', badge: null },
        { icon: <Users size={20} />, label: 'Team', badge: '12' },
        { icon: <FileText size={20} />, label: 'Projects', badge: null },
        { icon: <Calendar size={20} />, label: 'Calendar', badge: '3' },
        { icon: <Bell size={20} />, label: 'Notifications', badge: '8' },
        { icon: <Settings size={20} />, label: 'Settings', badge: null },
    ];

    return (
        <>
            <motion.div onHoverStart={() => setIsCollapsed(!isCollapsed)} onHoverEnd={() => setIsCollapsed(!isCollapsed)} className='sidebar-container'>
                <motion.div className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col transition-all duration-300 z-50 shadow-2xl ${isCollapsed ? 'w-16' : 'w-64'
                    }`}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                        {!isCollapsed && (
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">M</span>
                                </div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    MyApp
                                </h1>
                            </div>
                        )}
                        <div
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
                            <SidebarLink
                                key={item.label}
                                icon={item.icon}
                                label={item.label}
                                badge={item.badge}
                                isActive={activeItem === item.label}
                                isCollapsed={isCollapsed}
                                onClick={() => setActiveItem(item.label)}
                            />
                        ))}
                    </nav>

                    {/* User Profile */}
                    <div className="p-4 border-t border-slate-700/50">
                        <div className={`flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors cursor-pointer ${isCollapsed ? 'justify-center' : ''
                            }`}>
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                <User size={16} className="text-white" />
                            </div>
                            {!isCollapsed && (
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">John Doe</p>
                                    <p className="text-xs text-slate-400 truncate">john@example.com</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    {!isCollapsed && (
                        <div className="p-4 text-xs text-slate-400 text-center border-t border-slate-700/50">
                            © 2025 MyApp. All rights reserved.
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}

function SidebarLink({ icon, label, badge, isActive, isCollapsed, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group relative ${isActive
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                : 'hover:bg-slate-700/50'
                } ${isCollapsed ? 'justify-center' : ''}`}
        >
            <div className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                {icon}
            </div>
            {!isCollapsed && (
                <>
                    <span className={`flex-1 font-medium ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {label}
                    </span>
                    {badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                            {badge}
                        </span>
                    )}
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
        </div>
    );
}