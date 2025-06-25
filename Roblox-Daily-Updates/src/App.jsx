import { useState, useRef, UseEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { animate, AnimatePresence, motion } from 'framer-motion'
import FuuzynImage from '../src/assets/Roblox-avatars/FuuzynT.webp'
import RedRobbin23Image from '../src/assets/Roblox-avatars/RedRobbin23T.webp'
import MagpineImage from '../src/assets/Roblox-avatars/MagpineT.webp'
import WhyKirinImage from '../src/assets/Roblox-avatars/WhyKirinT.webp'
import RaillizeImage from '../src/assets/Roblox-avatars/RaillizeT.webp'
import PurpTrippImage from '../src/assets/Roblox-avatars/PurpTrippT.webp'

{/*Putting current user here so that I can make it a promp in <MyModal> */ }
const MyModal = ({ isOpen, onClose, children, currentUser }) => (
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
          backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent black
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 999
        }}
        onClick={onClose}
      >

        <motion.div onClick={e => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "rgb(54, 42, 42)",
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
          }}
        >

          <h2></h2>

          <motion.button whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className='Button2' onClick={onClose} style={{ position: "relative", top: "-9%", right: "-49%", fontSize: 30, borderRadius: 50, border: "4px solid black" }}>
            X
          </motion.button>

          <h2 style={{ position: "relative", top: "-22%" }}>{currentUser}'s Update Log</h2>

          <motion.div style={{ top: "25%", width: "90%", height: "55%", background: "rgba(0, 0, 0, 0.6)", borderRadius: 50, border: "4px solid black", position: "absolute" }}>



            {developers.map((_, index) => (

              <motion.button whileHover={{ scale: 1.1 }} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} className='BackgroundDeveloper'
                key={index}
                style={{
                  width: "15%",

                  height: "50%",
                  marginTop: "14%",
                  fontWeight: "bold",
                  padding: "1rem",
                  flexDirection: "row",
                  textAlign: "left",
                  justifyContent: "space-between",
                  border: "6px solid black",
                  alignItems: "left",

                }}
              >

                <h3 style={{ marginLeft: "15%", top: "-85%", position: "relative" }}>06/07/2006</h3>



              </motion.button>




            ))}


          </motion.div>

          {children}
        </motion.div>

      </motion.div>

    )}
  </AnimatePresence >
)

const roles = ["VFX", "Scripting", "Animating", "Sound Design", "Building", "3D Modeling"]

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
  const [currentUser, setCurrentUser] = useState('Aka');


  function setModalOpenToTrueAndPassUserName(name) {
    setModalOpen(true);
    setCurrentUser(name);

  }


  return (
    <>

      <div>



        <h1>Raq Development HQ</h1>
        <p style={{ fontSize: 20 }}>contribute daily updates by text and images! </p>


        <div>

          {/*Add calendar component here*/}
          <div style={{ marginTop: "10%", justifyContent: "space-between", flexDirection: "row", display: "flex" }}>
            <motion.button whileHover={{ backgroundColor: "#000a", scale: 1.1 }} style={{ marginBottom: "5%", width: "45%", border: "6px solid rgba(41, 108, 180, 0.83)", borderLeft: 20, borderTop: 20 }}>Post Update!</motion.button>  {/*Button that redirects to date selected */}


            <motion.button whileHover={{ backgroundColor: "#000a", scale: 1.1 }} style={{ marginBottom: "5%", width: "45%", border: "6px solid rgba(41, 108, 180, 0.83)", borderLeft: 20, borderTop: 20 }}>All Updates!</motion.button>  {/*Button that redirects to date selected */}
          </div>
          <MyModal currentUser={currentUser} isOpen={modalOpen} onClose={() => setModalOpen(false)}>

            <div>





              <div>

              </div>



              {/* Line down the middle */}




              <div></div>



            </div>


          </MyModal>


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
                <li>{developers[index].roles[0]}</li>
                <li>{developers[index].roles[1]}</li>
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


          <div style={{ position: "relative", marginLeft: "45%", marginRight: "45%", zIndex: 10, top: -475 }}>
            <h1 >TO-DO LISTS</h1>
            <h3>June, 2025</h3>

            {roles.map((_, index) => (
              <div key={index} style={{ padding: "1rem", display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap", justifyContent: "space-between", gap: "16px" }}>
                <motion.button style={{
                  width: 250,
                  height: 250,
                  background: "rgb(18, 15, 15)",
                  borderRadius: 360, border: "8px solid rgba(90, 50, 170, 0.5)",
                  padding: "1rem",
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}>


                  <h2>{roles[index]}</h2>


                </motion.button>
              </div>
            ))}


          </div>




          <div style={{ position: "relative", zIndex: 10, top: -475, alignContent: "center", flex: 1 }}>
            <h1 className='Contributors' style={{}} >CONTRIBUTORS</h1>

            <motion.div whileHover={{ scale: 1.1 }} style={{ width: "100%", height: "100%", background: "rgb(36, 33, 33,0.9)", border: "12px solid black", borderRadius: 25, }}>


            </motion.div>
          </div>




        </div>


        <div>

          <h1 style={{ position: "relative" }}>ABOUT US</h1>
          <p style={{ fontWeight: 500 }}>Hello World we're The Raq! Essentially we're just a group of childhood friends that decided to create a fully functional and revenue generating game together. We all come from different walks of life and are experienced in our own reguards. Thank you for visiting our page and keep creating!</p>
        </div>








      </div >
    </>
  )
}

export default App
