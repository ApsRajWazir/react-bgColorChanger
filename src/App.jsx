import './App.css'
import { useState } from "react"


const App = () => {
  const [inpColor,setColor]=  useState('rgb(44, 43, 43)')
  return (
    <main id="main" style={{background: inpColor}}>
      <input
         id="inpBox"
         type="text"
         placeholder="Enter any Color Name"
         value={inpColor}
         onChange={(e)=>setColor(e.target.value)}
        />
    </main>
  )
}

export default App
