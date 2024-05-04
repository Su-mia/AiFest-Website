import React from 'react'
import logo from "/icons/logo-dark.svg"
import logogdsc from "/icons/logo-gdsc.svg"

function WaterMark() {
  return (
    <div className=' flex  justify-between items-center px-2 md:px-6  self-stretch py-2'>
            <img src={logo} className='h-[35px] md:h-auto' />
            <p className=' text-[14px] text-black md:text-[24px] font-primary'>
            copyright c 2024. All rights reserved
            </p>
            <img src={logogdsc} className='h-[20px] md:h-auto hidden md:flex' />
    </div>
  )
}

export default WaterMark
