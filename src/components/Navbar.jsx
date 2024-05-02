import React ,{ useState } from 'react'
import logo from "../../public/icons/logo.svg";
import menu from "../../public/icons/menu.svg";
import { HashLink } from 'react-router-hash-link';
import "../App.css";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
  
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
      }

  return (
    <nav className='flex  flex-col md:flex-row justify-between items-center w-screen  md:px-2'>
        <div className={`flex justify-between items-center self-stretch flex-1 md:flex-initial ${isActive ? "bg-[rgba(8,10,30,0.5)]" : ""}`}>
            <img src={logo} 
            alt="logo" 
            className='h-[90px] md:h-auto mt-1'
            />
            <img 
            src={menu} 
            alt=" menu" 
            className={`h-[40px] mx-4 md:hidden`}
            onClick={toggleActiveClass}
            />
        </div>
        
        <div className={` ${ isActive? "flex" : "hidden"} md:flex flex-col md:flex-row justify-between items-center gap-2 bg-[rgba(8,10,30,0.5)] flex-1 self-stretch  pb-4 rounded-b-[30px] md:w-[90%]`}>
            <div className='flex flex-col md:flex-row justify-center md:gap-[6%] items-center flex-1 w-full '>
                <HashLink
                className='font-primary text-[22px] md:text-[32px] text-white hover:font-bold hover:text-white ;btn-gradient-less w-full md:w-min flex justify-center py-1'
                to="/"
                >
                Home
                </HashLink>

                <HashLink
                to="/#About"
                className='font-primary text-[22px] md:text-[32px] text-white hover:font-bold hover:text-white w-full md:w-min flex justify-center py-1'
                >
                About
                </HashLink>

                <HashLink
                to="/#Agenda"
                className='font-primary text-[22px] md:text-[32px] text-white hover:font-bold hover:text-white w-full md:w-min flex justify-center py-1'
                >
                Agenda
                </HashLink>

                <HashLink
                to="/#Speakers"
                className='font-primary  text-[22px] md:text-[32px] text-white hover:font-bold hover:text-white w-full md:w-min flex justify-center py-1'
                >
                Speakers
                </HashLink>
            </div>
            <button className='btn-gradient px-8 py-2 rounded-[30px] font-primary text-white font-bold text-[16px] md:text-[24px] mx-6 outline-none md:w-min'>
            REGISTER
            </button>
        </div>
        
      
    </nav>
  )
}

export default Navbar

