import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className=' text-black p-3 round -xl'>test tailwind</h1>
     <Card userName="Sougataf7" />
     <Card/>
    </>
  )
}

export default App
