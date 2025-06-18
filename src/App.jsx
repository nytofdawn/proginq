import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from './components/header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Developers from './components/Developers'

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    });
  },[]);
  return (
    <div>
    <Header />
    <Hero />
    <Services />
    <About />
    <Developers />
    </div>
  )
}

export default App