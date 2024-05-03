import React from 'react'
import SpeakersSwiper from './speakerswiper'
import knightDream from '/images/knightDream.png'



function Speakers() {
  return (
    <div
      id='Speakers'
      className="bg-[#95BDFF] relative h-screen md:h-[90vh] w-full flex items-center justify-center flex-col gap-12  py-[20px] md:py-[10px] px-[10px] md:px-[100px]"
    >
      <p className='text-[#001641] text-[28px] md:text-[48px] font-bold my-10 md:my-12'>
      SPEAKERS
      </p>
      <SpeakersSwiper/>
      <img src={knightDream} alt="knightDream" className="absolute bottom-0 md:bottom-[-2rem]  " />
    </div>
  )
}

export default Speakers
