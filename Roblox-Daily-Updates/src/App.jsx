import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { animate, AnimatePresence, motion, scale } from 'framer-motion'
import FuuzynImage from '../src/assets/Roblox-avatars/FuuzynT.webp'
import RedRobbin23Image from '../src/assets/Roblox-avatars/RedRobbin23T.webp'
import MagpineImage from '../src/assets/Roblox-avatars/MagpineT.webp'
import WhyKirinImage from '../src/assets/Roblox-avatars/WhyKirinT.webp'
import RaillizeImage from '../src/assets/Roblox-avatars/RaillizeT.webp'
import PurpTrippImage from '../src/assets/Roblox-avatars/PurpTrippT.webp'

{/*Putting current user here so that I can make it a promp in <MyModal> */ }
const MyModal = ({ isOpen, onClose, children, currentUser }) => {
  const modalRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Sample updates data - replace with your actual data
  const sampleUpdates = [
    { date: "06/25/2025", content: "Fixed lighting issues in main scene", category: "Bug Fix" },
    { date: "06/24/2025", content: "Added new character animations for running", category: "Animation" },
    { date: "06/23/2025", content: "Implemented new sound effects for UI interactions", category: "Audio" },
    { date: "06/22/2025", content: "Optimized terrain rendering for better performance", category: "Optimization" },
    { date: "06/21/2025", content: "Created new weapon models and textures", category: "3D Modeling" },
    { date: "06/20/2025", content: "Scripted new inventory system with drag and drop", category: "Scripting" },
    { date: "06/19/2025", content: "Added particle effects for spell casting", category: "VFX" },
    { date: "06/18/2025", content: "Built new dungeon environment with interactive elements", category: "Building" },
  ];

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus the modal when it opens
      modalRef.current.focus();

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='modal-backdrop'
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, duration: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 999
          }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            onClick={e => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgb(36, 44, 96)",
              color: "white",
              alignSelf: "center",
              justifySelf: "center",
              padding: "2rem",
              borderBottom: "12px solid black",
              borderRight: "12px solid black",
              borderTop: "6px solid black",
              borderLeft: "6px solid black",
              borderRadius: "18px",
              width: "90%",
              height: "70%",
              outline: "none"
            }}
          >
            <h2></h2>

            <motion.button
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className='Button2'
              onClick={onClose}
              style={{
                position: "relative",
                top: "-9%",
                right: "-49%",
                fontSize: 30,
                borderRadius: 50,
                border: "4px solid black"
              }}
            >
              X
            </motion.button>

            <h2 style={{ textTransform: "uppercase", position: "relative", top: "-22%" }}>{currentUser}'S UPDATE LOG</h2>

            <motion.div
              ref={scrollContainerRef}

              style={{
                top: "-15%",
                width: "90%",
                height: "70%",
                background: "rgba(0, 0, 0, 0.9)",
                borderRadius: 50,
                border: "4px solid black",
                position: "relative",
                overflowY: "auto",
                padding: "20px",
                left: "4%",
                scrollbarWidth: "none"

              }}
            >
              {sampleUpdates.map((update, index) => (
                <motion.div
                  whileInView={{ opacity: 1 }}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    margin: "10px 0",
                    padding: "15px",
                    borderRadius: "15px",
                    border: "2px solid rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px"
                  }}>
                    <h3 style={{ margin: 0, color: "#4CAF50" }}>{update.date}</h3>
                    <span style={{
                      background: "rgba(76, 175, 80, 0.3)",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      border: "1px solid #4CAF50"
                    }}>
                      {update.category}
                    </span>
                  </div>
                  <p style={{ margin: 0, lineHeight: "1.4" }}>{update.content}</p>
                </motion.div>
              ))}
            </motion.div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MyModal2 = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus the modal when it opens
      modalRef.current.focus();

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='modal-backdrop'
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, duration: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 999
          }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            onClick={e => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgb(36, 44, 96)",
              color: "white",
              alignSelf: "center",
              justifySelf: "center",
              padding: "2rem",
              borderBottom: "12px solid black",
              borderRight: "12px solid black",
              borderTop: "6px solid black",
              borderLeft: "6px solid black",
              borderRadius: "18px",
              width: "60%",
              height: "70%",
              outline: "none"
            }}
          >
            <h2></h2>

            <motion.button
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className='Button2'
              onClick={onClose}
              style={{
                position: "relative",
                top: "-9%",
                right: "-49%",
                fontSize: 30,
                borderRadius: 50,
                border: "4px solid black"
              }}
            >
              X
            </motion.button>

            <h2 style={{ position: "relative", top: "-22%" }}>UPLOAD UPDATE</h2>

            <motion.div style={{
              top: "-15%",
              width: "42%",
              height: "73%",
              background: "rgba(0, 0, 0, 0.9)",
              borderRadius: 50,
              border: "4px solid black",
              position: "relative",
              padding: "20px",
              display: "flex",
              flexDirection: "column"
            }}>
              <h3 style={{ margin: "0 0 15px 0", textAlign: "center" }}>UPDATE CONTENT</h3>
              <textarea
                ref={textAreaRef}
                placeholder="Enter your update details here..."
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "15px",
                  padding: "15px",
                  color: "white",
                  fontSize: "14px",
                  resize: "none",
                  outline: "none"
                }}
              />
            </motion.div>

            <motion.input
              placeholder="DEVELOPER NAME"
              style={{
                position: "relative",
                border: "4px solid black",
                backgroundColor: "rgba(0,0,0,0.9)",
                borderRadius: 15,
                height: "8%",
                bottom: "95%",
                right: "-23%",
                padding: "0 15px",
                color: "white",
                outline: "none"
              }}
            />

            <motion.input
              placeholder="UPDATE CATAGORY"
              style={{
                position: "relative",
                border: "4px solid black",
                backgroundColor: "rgba(0,0,0,0.9)",
                borderRadius: 15,
                height: "8%",
                bottom: "95%",
                right: "-26%",
                padding: "0 15px",
                color: "white",
                outline: "none"
              }}
            />

            <motion.div style={{
              top: "-90%",
              right: "-49%",
              width: "46%",
              height: "55%",
              background: "rgba(0, 0, 0, 0.9)",
              borderRadius: 50,
              border: "4px solid black",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}>
              <h3 style={{ margin: "0 0 15px 0" }}>IMAGES</h3>
              <div style={{
                flex: 1,
                width: "100%",
                border: "2px dashed rgba(255, 255, 255, 0.3)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>
                <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.7)" }}>
                  Click to upload<br />or drag & drop
                </p>
              </div>
            </motion.div>

            <motion.button whileHover={{ scale: 1.05 }} style={{
              width: 500,
              bottom: "87%",
              left: "0%",
              border: "6px solid black",
              padding: "15px",
              background: "rgba(76, 175, 80, 1)",
              color: "white",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              position: "relative"
            }}>
              UPLOAD
            </motion.button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const roles = ["VFX", "Scripting", "Animating", "Sound Design", "Building", "3D Modeling"]
const names = ["Red", "Rail", "Tripp", "Kirin", "Mag", "Fuze"]


const developers = [
  {
    name: "Kirin",
    roles: ["Scripting", "Sound Design"],
    profilePicture: WhyKirinImage,
    description: "Known for his adaptability and sharp ear for rhythm, Kirin brings immersive soundscapes and can shift gears in any project with ease."
  },
  {
    name: "Red",
    roles: ["Scripting", "Building"],
    profilePicture: RedRobbin23Image,
    description: "A master scripter with strikingly good looks, Red delivers polished systems that are as functional as they are impressive."
  },
  {
    name: "Tripp",
    roles: ["Building", "Data Storing"],
    profilePicture: PurpTrippImage,
    description: "Famous for his humor and unshakable passion, Tripp keeps the team laughing while architecting robust, efficient game structures."
  },
  {
    name: "Rail",
    roles: ["VFX", "Decals"],
    profilePicture: RaillizeImage,
    description: "A natural connector, Rail excels at networking and crafts visuals that leave lasting impressions with every frame."
  },
  {
    name: "Mag",
    roles: ["Animations", "Sound Design"],
    profilePicture: MagpineImage,
    description: "An animation expert with an ear for detail, Mag breathes life into characters through motion and sound."
  },
  {
    name: "Fuze",
    roles: ["3D Modeling", "Animations"],
    profilePicture: FuuzynImage,
    description: "Fuze sets the tone for every scene with precision and style, always eager to learn and grow with every new challenge."
  }
];

function App() {
  const [count, setCount] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState('');


  function setModalOpenToTrueAndPassUserName(name) {
    setModalOpen(true);
    setCurrentUser(name);

  }


  function setUploadModalOpenToTrue() {
    setUploadModalOpen(true);

  }


  return (
    <>

      <div>



        <h1 className='Contributors' style={{ border: "4px solid black" }}>RAQ DEVELOPMENT HQ</h1>
        <p style={{ fontSize: 20, fontWeight: "bold" }}>contribute daily updates by text and images! </p>


        <div>

          {/*Add calendar component here*/}
          <div style={{ marginTop: "10%", justifyContent: "space-between", flexDirection: "row", display: "flex" }}>
            <motion.button onClick={() => setUploadModalOpenToTrue()} whileHover={{ backgroundColor: "#000a", scale: 1.1 }} style={{ marginBottom: "5%", width: "45%", border: "6px solid rgba(0, 0, 0, 0.83)", borderLeft: 20, borderTop: 20 }}>Post Update!</motion.button>  {/*Button that redirects to date selected */}


            <motion.button whileHover={{ backgroundColor: "#000a", scale: 1.1 }} style={{ marginBottom: "5%", width: "45%", border: "6px solid rgba(0, 0, 0, 0.83)", borderLeft: 20, borderTop: 20 }}>All Updates!</motion.button>  {/*Button that redirects to date selected */}
          </div>
          <MyModal currentUser={currentUser} isOpen={modalOpen} onClose={() => setModalOpen(false)}>




          </MyModal>


          <MyModal2 isOpen={uploadModalOpen} onClose={() => setUploadModalOpen(false)}>




          </MyModal2>


        </div>




        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "16px", // or use margin on buttons instead
          width: "100%",
          marginTop: "2rem",
        }}>


          {developers.map((_, index) => (

            <motion.button whileHover={{ scale: 1.1, opacity: 0 }} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} className='BackgroundDeveloper'
              key={index}
              style={{
                width: "48%",
                fontWeight: "bold",
                padding: "1rem",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                border: "6px solid black",

                alignItems: "center",
              }}
            >


              <h1 style={{ textTransform: "uppercase" }}>
                {developers[index].name}
              </h1>


              <ul style={{ marginTop: 0, paddingLeft: "10%" }}>
                <li style={{ textTransform: "uppercase" }}>{developers[index].roles[0]}</li>
                <li style={{ textTransform: "uppercase" }}>{developers[index].roles[1]}</li>
              </ul>

              <img style={{ borderRadius: 50, width: 125, height: 125 }} src={developers[index].profilePicture} />




            </motion.button>




          ))}


          {developers.map((_, index) => (

            <motion.button onClick={() => setModalOpenToTrueAndPassUserName(developers[index].name)} whileHover={{ opacity: 1, scale: 1.05 }} initial={{ opacity: 0 }} className='BackgroundDeveloper'
              key={index}
              style={{
                width: "48%",
                fontWeight: "bold",
                padding: "1rem",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "6px solid black",

                zIndex: 0,
                y: -550

              }}
            >


              <h1 style={{ textTransform: "uppercase", opacity: 0 }}>
                .
              </h1>


              <p style={{ textAlign: "center" }}>
                {developers[index].description}..
              </p>

            </motion.button>

          ))}


          <div style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: "1200px", zIndex: 10, top: -475 }}>
            <h1 className='Contributors' style={{ width: '100%', border: "4px solid black" }}>TO-DO LISTS</h1>

            <h3 className='Contributors' style={{ border: "4px solid black" }}>June, 2025</h3>
          </div>

          {roles.map((_, index) => (
            <motion.div whileHover={{ scale: 1.1, zIndex: 200 }} className='BackgroundRoles' style={{ backgroundColor: "black", position: "relative", display: "flex", top: -425 }}>
              < motion.button key={index} whileDrag={{ scale: 1.2 }} initial={{ scale: 1.1 }} style={{
                width: 195,
                height: 195,
                background: "rgb(18, 15, 15,0)",
                borderRadius: 360, border: "8px solid rgb(0, 0, 0)",
                padding: "1rem",
                flexDirection: "row",
                alignItems: "left",
                gap: "12px",
                justifyContent: "space-evenly",
                position: "relative",
                zIndex: 20,




              }}>


                <h2 style={{ textTransform: "uppercase" }}>{roles[index]}</h2>


              </motion.button>
            </motion.div>
          ))}






          <div style={{ position: "relative", zIndex: 10, top: -475, alignContent: "center", flex: 1 }}>
            <h1 className='Contributors' style={{ marginTop: "20%", border: "4px solid black" }} >CONTRIBUTORS</h1>

            <motion.div className='Contributors' whileHover={{ scale: 1.01 }} style={{ backgroundColor: "black", width: "100%", height: "100%", border: "4px solid black", borderRadius: 25, }}>


            </motion.div>
          </div>




        </div >


        <div>

          <h1 className='Contributors' style={{ position: "relative", border: "4px solid black" }}>ABOUT US</h1>
          <p style={{ fontWeight: "bold", fontSize: 20 }}>Hello World we're The Raq! Essentially we're just a group of childhood friends that decided to create a fully functional and revenue generating game together. We all come from different walks of life and are experienced in our own reguards. Thank you for visiting our page and keep creating!</p>
        </div>








      </div >
    </>
  )
}

export default App
