import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FuuzynImage from '../src/assets/Roblox-avatars/FuuzynT.webp'
import RedRobbin23Image from '../src/assets/Roblox-avatars/RedRobbin23T.webp'
import MagpineImage from '../src/assets/Roblox-avatars/MagpineT.webp'
import WhyKirinImage from '../src/assets/Roblox-avatars/WhyKirinT.webp'
import RaillizeImage from '../src/assets/Roblox-avatars/RaillizeT.webp'
import PurpTrippImage from '../src/assets/Roblox-avatars/PurpTrippT.webp'


const developers = [{
  name: "Kirin", roles: ["Scripting", "Sound Design"], profilePicture: WhyKirinImage
},
{ name: "Aka", roles: ["Scripting", "Building"], profilePicture: RedRobbin23Image },
{ name: "Tripp", roles: ["Building", "Data Storing"], profilePicture: PurpTrippImage },
{ name: "Rail", roles: ["VFX", "Decals"], profilePicture: RaillizeImage },
{ name: "Magpine", roles: ["Animations", "Sound Design"], profilePicture: MagpineImage },
{ name: "Fuze", roles: ["3D Modeling", "Animations"], profilePicture: FuuzynImage }];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>DAILY UPDATES</h1>
        <p>contribute daily updates by text and images keep reports detailed </p>


        <div>

          {/*Add calendar component here*/}

          <button style={{ marginBottom: "5%", width: "50%" }}>Go</button>  {/*Button that redirects to date selected */}

        </div>




        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "16px", // or use margin on buttons instead
          width: "100%",
          marginTop: "2rem"
        }}>
          {developers.map((_, index) => (

            <button className='BackgroundDeveloper'
              key={index}
              style={{
                width: "48%",
                fontWeight: "bold",
                padding: "1rem",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

              }}
            >


              <h1 style={{ textTransform: "uppercase" }}>
                {developers[index].name}
              </h1>


              <ul style={{ marginTop: 0, paddingLeft: "1rem" }}>
                <li>{developers[index].roles[0]}</li>
                <li>{developers[index].roles[1]}</li>
              </ul>

              <img style={{ borderRadius: 50, width: 125, height: 125 }} src={developers[index].profilePicture} />
            </button>


          ))}



        </div>











      </div>
    </>
  )
}

export default App
