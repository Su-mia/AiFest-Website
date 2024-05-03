import React from 'react'
import insta from "/icons/social-media/instagram.svg"
import fb from "/icons/social-media/Facebook.svg"
import sms from "/icons/social-media/sms.svg"
import linkedin from "/icons/social-media/LinkedIn.svg"
import discord from "/icons/social-media/discord.svg"
import rootfooter from "/images/root-footer.png"
import WaterMark from './WaterMark'

function Footer() {
  return (
    <div className='bg-white flex flex-col justify-between items-center w-screen h-[160px] md:h-[260px] relative pt-1'>
      <img src={rootfooter} className='absolute top-[-200px] md:top-[-300px] left-0 w-[220px] md:w-auto' />
     <div className=' flex gap-4 md:gap-10'>
      <a href="https://www.instagram.com/gdsc_ensia/?igsh=MTlpODBtNm9sd2Rqdg%3D%3D">
        <img 
        src={insta}
        className='h-[40px] md:h-auto'
        />
      </a>
      <a href="https://web.facebook.com/gdsc.ensia?mibextid=LQQJ4d&_rdc=1&_rdr">
        <img 
        src={fb}
        className='h-[40px] md:h-auto'
        />
      </a>
      <a href="https://www.linkedin.com/company/google-developer-student-club-ensia/">
        <img 
        src={linkedin}
        className='h-[40px] md:h-auto'
        />
      </a>
      <a href="mailto:gdsc.ensia@ensia.edu.dz">
        <img 
        src={sms}
        className='h-[40px] md:h-auto'
        />
      </a>
      <a href="https://discord.com/invite/kUfgeTJq">
        <img 
        src={discord}
        className='h-[40px] md:h-auto'
        />
      </a>
    </div> 
    <WaterMark/>
    </div>
  )
}

export default Footer
