import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./App.css"
import Certificates from './components/Certificates'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Experience from './components/Experience';
import Bot from './components/Bot'
import Services from './components/services'


 

function App() {
 

  return (
    <> 
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Services/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Bot/>
      <Footer/>
    </>
  )
}

export default App
