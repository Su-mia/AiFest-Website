import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

function Main() {
  return (
    <main>
        <div className=' h-screen'>
            <Navbar/>
            <Hero/>
        </div>
        <InfoSection/>
        <Footer/>
    </main>
  )
}

export default Main
