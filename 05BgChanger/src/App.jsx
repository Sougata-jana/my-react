import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-screen h-screen duration-200"style={{backgroundColor: color}}></div>
    <div></div>
    </>
   
  )
}

export default App
