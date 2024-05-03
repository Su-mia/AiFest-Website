import React from 'react'
import gdsclogo from '../../../public/images/gdscLogo.svg'
import {Link} from 'react-router-dom'
import leafguyUp from '../../../public/images/leafguyUp.png'
function WhoIsGdscEnsia() {
  return (
    <div className="relative flex flex-col w-full gap-[100px] pb-[100px] px-[20px] md:px-[100px]">
      <h1 className=" mt-[10%] text-[32px] md:text-[48px] text-center relative font-primary font-bold">Who is GDSC ENSIA </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[100px] md:gap-[50px] mb-[10%]">
        <div className="flex flex-col items-center gap-[20px] md:gap-[100px]">
          <img src={gdsclogo} alt="logo" className=" w-[600px] h-[70px]"/>
          <Link to="https://gdsc.community.dev/ecole-nationale-superieure-de-lintelligence-artificielle-algiers-algeria/" >
            <button className="text-white bg-[#fccd3e] px-[24px] py-[16px] hover:bg-[#fbad04] hover:shadow-2xl">
            Visit our website
          </button>
          </Link>
        </div>
        <p className="font-primary text-[20px] md:text-[24px] font-medium text-white text-center md:text-left  w-full md:w-1/2">Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
        </div>
      <img src={leafguyUp} className="absolute bottom-0 left-0 w-1/3" alt="leaf guy" />

      </div>
  )
}

export default WhoIsGdscEnsia
