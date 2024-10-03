import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import WorkFlow from './components/WorkFlow.jsx'
import Pricing from './components/Pricing.jsx'
import Tesimonials from './components/Tesimonials.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <WorkFlow/>
        <Pricing/>
        <Tesimonials/>
        <Footer/>

      </div>
    </>
  )

}

export default App
