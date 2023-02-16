//* rafce - functional components
//* rcc - class components


import React, { Component } from 'react'
import Sidenav from './Components/Sidenav'
import Home from './Components/Home'
import About from "./Components/About"
import Resume from "./Components/Resume"
import Portfolio from "./Components/Portfolio"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import {Routes, Route} from "react-router-dom"

class App extends Component {
  render() {
    return(
      <div style={{display:"flex"}}>
      <Sidenav></Sidenav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    )
  }
}

export default App;