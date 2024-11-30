import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 12;  
  let [counter, setCounter] = useState(15)


  const addValue = () => {
    if(counter < 20 ){
      setCounter(counter+1)
    }else{
      alert("the add value only 20!")
    }
    
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter -1)
    }else{
      alert("the remove value only 0!")
    }
  }

  return (
    <>
    <h1>HII i am Sougata Jana</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}
    >Add value{counter}</button>
    <br></br>
    <button onClick={removeValue}
    >Remove value{counter}</button>

    </>
  )
}

export default App
