import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import bg from "/images/mainbg.svg";
import sideroot from "/images/side_root.svg";
import Speakers from '../components/info/Speakers';
import Agenda from '../components/info/Agenda';

function Main() {
  return (
    <main className=''>
        <div className='absolute h-full w-full bg-[#0F132A80] z-0'></div>
        <img 
        className='absolute right-0 md:right-4 w-[70px] md:w-auto'
        src={sideroot} 
        />
        
        <div className=' flex flex-col justify-center items-center flex-1 self-stretch w-screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Navbar/>
            <Hero/>
        </div>
        <InfoSection/>
        <Speakers/>
        <Agenda/>
        <Footer/>
    </main>
  );
}

export default Main;
