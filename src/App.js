import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/About'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LoginUi from './component/LoginUi'
import Register from './component/Register'
const App = () => {
  return (
    <div>
      <Router>


        <Routes>

          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/nav" element={<Navbar/>}></Route>
          <Route  path="/about" element={<About/>}></Route>
          <Route path='/login' element= {<LoginUi/>}></Route>
          <Route path='/register' element= {<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
