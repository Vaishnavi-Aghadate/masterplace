import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import HomePage from './components/HomePage'
// import Aboutus from './components/Aboutus'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Navbar/>
      <HomePage/>
      {/* <Aboutus/> */}
      
    
   
    </div>
  )
}

export default App
