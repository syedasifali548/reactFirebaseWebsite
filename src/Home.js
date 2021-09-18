import React from 'react'
import Header from './Header'
import HowWorks from './HowWorks'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>   
    <HowWorks/>  
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
