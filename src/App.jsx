import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Developers from './components/Developers'
import Contact from './components/Contact'

import TermsofService from './components/agreements/terms'
import PrivacyPolicy from './components/agreements/privacy'

const Home = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Developers />
    <Contact />
    <Footer />
  </>
)

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/terms-of-service"
          element={
            <>
              <Header />
              <TermsofService />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
