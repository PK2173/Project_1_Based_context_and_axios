import React from 'react'
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='object-contain w-screen h-screen bg-gray-100 overflow-x-hidden'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App