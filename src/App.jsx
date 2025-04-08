import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import HomePage from './components/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Navbar/>
      <HomePage/>
    
   
    </div>
  )
}

export default App
