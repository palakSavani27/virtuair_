import React, { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Nav.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import WorkFlow from './components/WorkFlow.jsx'
import Pricing from './components/Pricing.jsx'
import Tesimonials from './components/Tesimonials.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import LoginPopup from './components/LoginPopup.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [token, setToken] = useState("");

  useEffect(() => {
    // Check if token exists in localStorage
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setToken={setToken} />}


      {/* <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection  element={<Home />}/>
        <FeatureSection/>
        <WorkFlow/>
        <Pricing/>
        <Tesimonials/>
        <Footer/>
      </div> */}

      <Navbar setShowLogin={setShowLogin} token={token} setToken={setToken} />
      <div className="max-w-7xl mx-auto pt-20 px-6">

        <Routes>
          <Route path='/' element={<HeroSection />} />
        </Routes>

        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Tesimonials />
        <Footer />

      </div>


    </>
  )

}

export default App
