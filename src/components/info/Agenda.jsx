import React , {useState} from 'react'
import AgendaContent from '../AgendaContent'
import sideroot from "/images/side_root.svg";
import rootsbottom from "/images/root-bottom-agenda.svg";
import rootcenter from "/images/root-center.svg";

import "../../App.css";

function Agenda() {
  const [selectedDay, setSelectedDay] = useState(0);

  const agenda = [
    {
      title: "Day 1",
      data: [
        "15:30 - 16:30: Check in ",
        "16:30 - 17:00: Opening Ceremony",
        "10:30 - 11:00: Icebreaker Session",
        "11:00 - 12:00: Introduction to Hackathon ",
        "12:00 - 13:00: Team Formation ",
      ]
    },
    {
      title: "Day 2",
      data: [
        "09:00 - 10:00: Breakfast and Networking",
        "10:00 - 11:30: Tech Workshop 1",
        "11:30 - 12:30: Tech Workshop 2",
        "12:30 - 13:30: Lunch Break",
        "15:00 - 15:30: Tea/Coffee Break",
        "15:30 - 17:30: Hacking Continues",

      ]
    },
    {
      title: "Day 3",
      data: [
        "09:00 - 10:00: Breakfast ",
        "10:00 - 12:00: Submission of Projects ",
        "12:00 - 13:00: Lunch Break",
        "13:00 - 15:00: Demo Sessions with Judges",
        "15:00 - 16:00: Judges Deliberation ",

      ]
    }
  ]
    

  const handleDayClick = (index) => {
    setSelectedDay(index); 
  };

  return (
    <div
    id='Agenda'
    className='flex flex-col h-[800px] md:h-[1000px] bg-agenda justify-start items-center gap-10 border-none'
    >
      <p className='text-[#001641] text-[28px] md:text-[48px] font-bold my-10 md:my-12'>
      AGENDA
      </p>

      <div className='flex relative' >
        <img src={sideroot} alt="" className='w-[50px] md:w-[70px]' />
        <img 
        src={rootsbottom}
        className='absolute top-[0rem] md:top-[-2rem] inset-x-1/2  translate-x-[-50%] w-[70%] md:w-auto'
        />
        <img 
        src={rootcenter}
        className='absolute top-[-1rem] md:top-[-3rem] inset-x-1/2  translate-x-[-50%] w-[30%] md:w-auto'
        />
         <AgendaContent title={agenda[selectedDay].title} data={agenda[selectedDay].data} />
        <img src={sideroot} alt="" className='w-[50px] md:w-[70px]' />
        <img 
        src={rootsbottom} 
        className='absolute bottom-0 md:bottom-[-5rem] inset-x-1/2  translate-x-[-50%] w-[70%] md:w-auto' 
        />

        <div className='absolute left-[-2.5rem] md:left-[-7rem] flex flex-col gap-8 top-0 bottom-0 justify-around py-16'>
        {agenda.map((day, index) => (
            <div key={index} className={` ${ selectedDay==index ? "bg-[#0D4B85]" : " bg-transparent"} w-fit h-fit border-[1.5px] border-[#0D4B85] relative outline-none`}>
              <button onClick={() => handleDayClick(index)} className={`${ (selectedDay==index) ? "text-white outline-none":"text-[#001641]"} border-[1.5px] relative left-1 right-0 top-1 bottom-0 border-[#001641] rounded-none bg-transparent h-fit px-4 md:px-10 min-w-max py-2 font-primary  font-bold text-[18px] md:text-[32px] outline-none md:w-min`}>
                {day.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Agenda
