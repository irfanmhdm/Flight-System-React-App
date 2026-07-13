import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './components/View'
import Add from './components/Add'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <NavBar />
    <Routes>

      <Route path = "/add" element={<Add />}/>
      <Route path = "/view" element={<View />}/>
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
