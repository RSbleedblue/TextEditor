import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar'
import Editor from './Components/Editor/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex  gap-2'>
      <NavBar/>
      <Editor placeholder={"hi"}/>
    </div>
  )
}

export default App
