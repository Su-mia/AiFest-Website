import React from 'react'
import maingame from "/images/game-main.svg"
import bottomroots from "/images/bottom_roots.png";
import CountdownS from './CountdownS'
function Hero() {
  return (
    <div className='flex flex-1 flex-col self-stretch justify-center items-center  gap-7 z-20 relative'>
          <CountdownS/>
            <div className='btn-gradient max-w-fit  mx-6 relative'>
                <button className=' border relative left-1 right-0 top-1 bottom-0 border-white rounded-none bg-transparent h-fit px-6 min-w-max py-2  font-primary text-white font-bold text-[20px] md:text-[32px]  outline-none md:w-min'>
                REGISTER NOW!
                </button>
            </div>
            <div>
                <img 
                src={maingame}
                className='w-[250px] md:w-[350px] z-30'
                alt="" />
            </div>

            <img 
            src={bottomroots}
            className='absolute bottom-0 md:bottom-[-5rem] h-[90px] md:h-auto w-full '
            />
           
    </div>
  )
}

export default Hero
