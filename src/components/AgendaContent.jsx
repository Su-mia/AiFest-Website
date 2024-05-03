import React from 'react'

function AgendaContent({title , data}) {
  return (
    <div className=' flex flex-col justify-start items-center  pt-6 pb-16 md:pt-0 md:pb-0  px-2 md:px-28 '>
        <p className=' font-aladin text-[#001641] text-[40px] md:text-[64px] py-8 md:pt-16'>
        {title}
        </p>

        <div className=' flex flex-col justify-center items-center gap-2'>

            {
                data?.map((item, index) => (
                    <p className=' text-black text-center text-[16px] md:text-[32px] font-primary font-medium max-w-[200px] md:max-w-[500px]'>
                    {item}
                    </p>
                  ))            
            }   
    
        </div>
    </div>
  )
}

export default AgendaContent
