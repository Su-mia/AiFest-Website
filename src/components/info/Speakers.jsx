import React from 'react'
import SpeakersSwiper from './speakerswiper'
import knightDream from '../../../public/images/knightDream.png'



function Speakers() {
  return (
    <div
    id='Speakers'
      className="bg-[#95BDFF] relative w-full flex items-center justify-center flex-col gap-20 mb-[10%] py-[20px] md:py-[100px] px-[10px] md:px-[100px]"
    >
      <h1>Speakers</h1>
      <SpeakersSwiper/>
      <img src={knightDream} alt="knightDream" className="absolute bottom-0 w-1/12 " />
    </div>
  )
}

export default Speakers
