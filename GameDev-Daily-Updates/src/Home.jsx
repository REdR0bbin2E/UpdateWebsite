import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Sidebar from './Sidebar';
import { left } from '@popperjs/core';

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
            isReal: true
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
        // Clean up any existing body styles when component unmounts
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

    const [hoveredProject, setHoveredProject] = useState(null);
    const [hoveredCreateBox, setHoveredCreateBox] = useState(false);

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif'
        }}>
            <Sidebar />


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

                                    </div >



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

                                    </div >



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
                            background: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000
                        }}
                        onClick={() => setShowCreateProject(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '40px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                textAlign: 'center',
                                minWidth: '400px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 style={{ marginBottom: '20px' }}>Create New Project</h2>
                            <p style={{ marginBottom: '30px', opacity: 0.8 }}>
                                This would be your project creation form...
                            </p>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <input placeholder='Project Name' style={{ borderRadius: 10, fontSize: 25, marginBottom: "10px" }}></input>

                                <input placeholder='Project ID' style={{ borderRadius: 10, fontSize: 25, marginBottom: "10px" }}></input>
                                <select style={{ borderRadius: 10, fontSize: 25, marginBottom: "45px" }}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                    <option></option>


                                </select>

                            </div>
                            <button
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    fontSize: '1rem'
                                }}
                                onClick={() => setShowCreateProject(false)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            <AnimatePresence>
                {showAddProject && (
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
                            background: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000
                        }}
                        onClick={() => setShowAddProject(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '40px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                textAlign: 'center',
                                minWidth: '400px'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 style={{ marginBottom: '20px' }}>Add New Project</h2>
                            <p style={{ marginBottom: '30px', opacity: 0.8 }}>
                                This would be your project adding form...
                            </p>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <input placeholder='Project Name' style={{ borderRadius: 10, fontSize: 25, marginBottom: "10px" }}></input>

                                <input placeholder='Project ID' style={{ borderRadius: 10, fontSize: 25, marginBottom: "25px" }}></input>


                            </div>


                            <button
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    fontSize: '1rem'
                                }}
                                onClick={() => setShowAddProject(false)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;