import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import Sidebar from './Sidebar';

// Mock Sidebar component

function Home() {
    const [screenWrapper, setScreenWrapper] = useState("5%");
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [showAddProject, setShowAddProject] = useState(false);


    const projects = [
        {
            id: 1,
            icon: null,
            projectName: "The Raq",
            developers: ["Red", "Kirin", "Tripp", "Mag", "Rail", "Fuze"],
            creationDate: "2024-12-15",
            isReal: true,
            projectKey: "000",
            projectCreatorEmail: "mayo.akin3@gmail.com"
        }
    ];

    const hasProjects = projects.some(p => p.isReal);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    useEffect(() => {
        // Set dark background for the entire page
        document.body.style.background = 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)';
        document.body.style.minHeight = '100vh';
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';

        return () => {
            document.body.style.background = '';
            document.body.style.minHeight = '';
            document.body.style.margin = '';
            document.body.style.fontFamily = '';
        };




    }, []);

    const sidebarStyles = {
        position: 'fixed',
        left: 0,
        top: 0,
        width: screenWrapper,
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    };

    const mainContentStyles = {
        marginLeft: screenWrapper,
        padding: '40px',
        minHeight: '100vh',
        transition: 'margin-left 0.3s ease',
        position: 'relative',
    };

    const titleStyles = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: '30px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    };

    const projectsContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px'
    };

    const projectsBoxStyles = {
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(15px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        width: 'calc(200%)',
        minHeight: '300px',
        padding: '30px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const projectItemStyles = {
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '20px',
        alignItems: "center",
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    const projectItemHoverStyles = {
        ...projectItemStyles,
        background: 'rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    };

    const createProjectStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px',
        width: "45%"
    };

    const createProjectBoxStyles = {
        width: '80px',
        height: '80px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px dashed rgba(255, 255, 255, 0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: 'white'
    };

    const createProjectBoxHoverStyles = {
        ...createProjectBoxStyles,
        background: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.6)',
        transform: 'scale(1.05)'
    };

    const createProjectTextStyles = {
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: '600',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    };

    const developersStyles = {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
        flexWrap: 'wrap'
    };

    const developerTagStyles = {
        background: 'rgba(255, 255, 255, 0.2)',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        border: '1px solid rgba(255, 255, 255, 0.3)'
    };

    const productivityStyles = {
        ...titleStyles,
        fontSize: '2rem',
        marginTop: '50px'
    };

    const creationDateStyles = {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.9rem',
        marginTop: '10px',
        fontStyle: 'italic'
    };

    // Enhanced Modal Styles
    const modalOverlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        cursor: 'pointer'
    };

    const modalContentStyles = {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        backdropFilter: 'blur(25px)',
        borderRadius: '24px',
        padding: '50px',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        color: 'white',
        minWidth: '500px',
        maxWidth: '600px',
        position: 'relative',
        cursor: 'default'
    };

    const modalHeaderStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    };

    const modalTitleStyles = {
        fontSize: '2rem',
        fontWeight: '700',
        margin: 0,
        background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    const closeButtonStyles = {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        padding: '8px',
        cursor: 'pointer',
        color: 'white',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const inputStyles = {
        width: '95%',
        padding: '16px 20px',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        fontSize: '16px',
        marginBottom: '20px',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit'
    };

    const selectStyles = {
        ...inputStyles,
        width: "102%",
        cursor: 'pointer',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 12px center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '16px',
        paddingRight: '40px'
    };

    const buttonStyles = {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    };

    const primaryButtonStyles = {
        ...buttonStyles,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        marginRight: '12px'
    };

    const formContainerStyles = {
        marginBottom: '40px'
    };

    const formDescriptionStyles = {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '16px',
        marginBottom: '30px',
        lineHeight: '1.6'
    };

    const buttonGroupStyles = {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px',
        marginTop: '30px'
    };

    const [hoveredProject, setHoveredProject] = useState(null);
    const [hoveredCreateBox, setHoveredCreateBox] = useState(false);
    const [hoveredCloseButton, setHoveredCloseButton] = useState(false);

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif'
        }}>
            <motion.div onHoverStart={() => setScreenWrapper("20%")} onHoverEnd={() => setScreenWrapper("5%")}>

                <Sidebar />

            </motion.div>

            <motion.h1
                style={titleStyles}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                HOME
            </motion.h1>

            <div style={mainContentStyles}>
                <motion.div
                    style={projectsContainerStyles}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {!hasProjects && (
                        <div style={createProjectStyles}>
                            <div
                                style={hoveredCreateBox ? createProjectBoxHoverStyles : createProjectBoxStyles}
                                onMouseEnter={() => setHoveredCreateBox(true)}
                                onMouseLeave={() => setHoveredCreateBox(false)}
                                onClick={() => setShowCreateProject(true)}
                            >
                                <Plus size={32} />
                            </div>
                            <span style={createProjectTextStyles}>
                                Create or Join Project
                            </span>
                        </div>
                    )}
                    <motion.h1
                        style={productivityStyles}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        ALL PROJECTS
                    </motion.h1>
                    <div style={projectsBoxStyles}>
                        {hasProjects ? (
                            projects.filter(p => p.isReal).map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    style={hoveredProject === project.id ? projectItemHoverStyles : projectItemStyles}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        marginBottom: '15px'
                                    }}>
                                        {project.icon && (
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                {project.icon}
                                            </div>
                                        )}
                                        <h3 style={{
                                            margin: 0,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {project.projectName}
                                        </h3>
                                    </div>

                                    <div style={developersStyles}>
                                        {project.developers.filter(dev => dev !== "").map((developer, devIndex) => (
                                            <span key={devIndex} style={developerTagStyles}>
                                                {developer}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={creationDateStyles}>
                                        Created: {formatDate(project.creationDate)}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '200px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: '1.2rem'
                            }}>
                                No projects yet. Create your first project to get started!
                            </div>
                        )}

                        {hasProjects && (
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{
                                    ...createProjectStyles,
                                    justifyContent: 'center',
                                    marginTop: '20px',
                                    padding: '20px',
                                    border: '2px dashed rgba(255, 255, 255, 0.3)',
                                    borderRadius: '15px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setShowCreateProject(true)}
                                >
                                    <div>
                                        <Plus size={24} color="rgba(255, 255, 255, 0.7)" />
                                        <span style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontSize: '1.1rem',
                                            marginLeft: '10px'
                                        }}>
                                            Create New Project
                                        </span>
                                    </div>
                                </div>
                                <div style={{
                                    ...createProjectStyles,
                                    justifyContent: 'center',
                                    marginTop: '20px',
                                    padding: '20px',
                                    border: '2px dashed rgba(255, 255, 255, 0.3)',
                                    borderRadius: '15px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setShowAddProject(true)}
                                >
                                    <div>
                                        <Plus size={24} color="rgba(255, 255, 255, 0.7)" />
                                        <span style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontSize: '1.1rem',
                                            marginLeft: '10px'
                                        }}>
                                            Add New Project
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                <motion.h1
                    style={productivityStyles}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    YOUR PRODUCTIVITY
                </motion.h1>

                <motion.h1
                    style={productivityStyles}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    RECENT UPDATES
                </motion.h1>

                <motion.h1
                    style={productivityStyles}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    DEVELOPER CHATBOX
                </motion.h1>
            </div>

            {/* Enhanced Create Project Modal */}
            <AnimatePresence>
                {showCreateProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={modalOverlayStyles}
                        onClick={() => setShowCreateProject(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.7, opacity: 0, y: 50 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            style={modalContentStyles}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div style={modalHeaderStyles}>
                                <h2 style={modalTitleStyles}>Create New Project</h2>
                                <button
                                    style={{
                                        ...closeButtonStyles,
                                        background: hoveredCloseButton ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                        transform: hoveredCloseButton ? 'scale(1.1)' : 'scale(1)'
                                    }}
                                    onMouseEnter={() => setHoveredCloseButton(true)}
                                    onMouseLeave={() => setHoveredCloseButton(false)}
                                    onClick={() => setShowCreateProject(false)}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p style={formDescriptionStyles}>
                                Set up your new project with a unique name and configuration. Choose the right settings to get your team started.
                            </p>

                            <div style={formContainerStyles}>
                                <input
                                    placeholder='Project Name'
                                    style={{
                                        ...inputStyles,
                                        ':focus': {
                                            borderColor: 'rgba(255, 255, 255, 0.5)',
                                            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)'
                                        }
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                        e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />

                                <input
                                    placeholder='Unique Project Key'
                                    style={inputStyles}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                        e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />

                                <select style={selectStyles}>
                                    <option value="" disabled selected>Select Project Type</option>
                                    <option value="web">Web Application</option>
                                    <option value="mobile">Mobile App</option>
                                    <option value="desktop">Desktop Software</option>
                                    <option value="api">API Service</option>
                                    <option value="other">Other</option>
                                </select>


                                <select style={selectStyles}>
                                    <option value="" disabled selected>Select Number of Develoeprs</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>

                            <div style={buttonGroupStyles}>
                                <button
                                    style={primaryButtonStyles}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                                    }}
                                    onClick={() => setShowCreateProject(false)}
                                >
                                    Create Project
                                </button>
                                <button
                                    style={buttonStyles}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                    onClick={() => setShowCreateProject(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Enhanced Add Project Modal */}
            <AnimatePresence>
                {showAddProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={modalOverlayStyles}
                        onClick={() => setShowAddProject(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.7, opacity: 0, y: 50 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            style={modalContentStyles}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div style={modalHeaderStyles}>
                                <h2 style={modalTitleStyles}>Join Existing Project</h2>
                                <button
                                    style={{
                                        ...closeButtonStyles,
                                        background: hoveredCloseButton ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                        transform: hoveredCloseButton ? 'scale(1.1)' : 'scale(1)'
                                    }}
                                    onMouseEnter={() => setHoveredCloseButton(true)}
                                    onMouseLeave={() => setHoveredCloseButton(false)}
                                    onClick={() => setShowAddProject(false)}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p style={formDescriptionStyles}>
                                Join an existing project by entering the project details. Make sure you have the correct project key from your team leader.
                            </p>

                            <div style={formContainerStyles}>
                                <input
                                    placeholder='Project Name'
                                    style={inputStyles}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                        e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />

                                <input
                                    placeholder='Project Key'
                                    style={inputStyles}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                        e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            <div style={buttonGroupStyles}>
                                <button
                                    style={primaryButtonStyles}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                                    }}
                                    onClick={() => setShowAddProject(false)}
                                >
                                    Join Project
                                </button>
                                <button
                                    style={buttonStyles}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                    onClick={() => setShowAddProject(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;