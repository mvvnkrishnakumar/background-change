// import React from 'react'
// import pri from './pri.jpg'

// const App = () => {
//   return (
//     <div>
//       <center>
//         <img src={pri} alt='pri' height="250" width= "auto"/><br/><br/>
//         <a href={pri} className='btn btn-primary' download = "priya">click Hear to Dowload</a>
//       </center>
//     </div>
//   )
// }

// export default App

// Background Color changer

import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [color,setColor] = useState("olive")
  return (
    <div className='container' style={{backgroundColor:color}}>
    <div className='buttonSection'>
    <button onClick={()=>setColor("red")} style={{backgroundColor:"red", color:"white", padding:"5px", margin:"10px"}}>Red</button>
    <button onClick={()=>setColor("green")} style={{backgroundColor:"green", color:"white", padding:"5px", margin:"10px"}}>Green</button>
    <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue", color:"white", padding:"5px", margin:"10px"}}>Blue</button>

    </div>

    </div>
  )
}

export default App