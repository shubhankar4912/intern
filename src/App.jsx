import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './pages/Explore'
import Detail from './pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/Detail' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
