import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import bg from "../../public/images/mainbg.svg";
import Speakers from '../components/info/Speakers';
import Agenda from '../components/info/Agenda';

function Main() {
  return (
    <main>
      <div className='h-screen flex flex-col justify-center items-center flex-1 self-stretch w-screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
