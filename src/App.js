import React from 'react'
import './app.css'
import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <NavBar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App