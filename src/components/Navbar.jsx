import React, { useState, useEffect, useRef } from 'react'
import logo from "/icons/logo.svg";
import menu from "/icons/menu.svg";
import hover from "/images/bg-ec.svg";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import "../App.css";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef();

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isActive && ref.current && !ref.current.contains(e.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isActive]);
    return (
        <nav ref={ref} className={` flex  flex-col lg:flex-row justify-between items-center w-screen  lg:px-2 z-30 ${isActive ? "bg-[rgba(8,10,30,0.5)]" : ""} `}>
            <div className={`flex justify-between items-center self-stretch flex-1 lg:flex-initial ${isActive ? "bg-[rgba(8,10,30,0.5)] " : ""}`}>
                <img src={logo}
                    alt="logo"
                    className='h-[90px] lg:h-auto mt-2'
                />
                <img
                    src={menu}
                    alt=" menu"
                    className={`h-[40px] mx-4 lg:hidden`}
                    onClick={toggleActiveClass}
                />
            </div>

            <div className={` ${isActive ? "flex absolute right-0 left-0 top-[95px] lg:top-auto" : "hidden"} lg:flex flex-col lg:flex-row justify-between items-center  lg:items-start  gap-2 bg-[rgba(8,10,30,1)] lg:bg-transparent flex-1 self-stretch  pb-4 rounded-b-[30px] lg:w-[90%]`}>
                <div className='flex flex-col lg:flex-row justify-center lg:gap-[6%] items-center flex-1 w-full '>
    
                    <div className='flex  justify-center group items-center relative lg:w-[170px]  lg:h-[100px]'>
                        <img src={hover} alt="" className=' hidden group-hover:absolute group-hover:lg:flex group-hover:z-30' />
                        <HashLink
                            to="/"
                            className={`font-primary min-w-[100px] group-hover:lg:bg-white px-4  rounded-[25px]  items-center min-h-max   text-[22px] lg:text-[32px] text-white  w-full lg:w-min flex justify-center py-1`}
                        >
                        <p className='group-hover:lg:text-[#001641] group-hover:text-white group-hover:z-50'>
                        Home
                        </p>
                        </HashLink>
                    </div>
                    <div className='flex  justify-center group items-center relative lg:w-[170px]  lg:h-[100px]'>
                        <img src={hover} alt="" className=' hidden group-hover:absolute group-hover:lg:flex group-hover:z-30' />
                        <HashLink
                            to="/#About"
                            className={`font-primary min-w-[100px] group-hover:lg:bg-white px-4  rounded-[25px]  items-center min-h-max   text-[22px] lg:text-[32px] text-white  w-full lg:w-min flex justify-center py-1`}
                        >
                        <p className='group-hover:lg:text-[#001641] group-hover:text-white group-hover:z-50'>
                        About
                        </p>
                        </HashLink>
                    </div>
                    <div className='flex  justify-center group items-center relative lg:w-[170px]  lg:h-[100px]'>
                        <img src={hover} alt="" className=' hidden group-hover:absolute group-hover:lg:flex group-hover:z-30' />
                        <HashLink
                            to="/#Agenda"
                            className={`font-primary min-w-[100px] group-hover:lg:bg-white px-4  rounded-[25px]  items-center min-h-max   text-[22px] lg:text-[32px] text-white  w-full lg:w-min flex justify-center py-1`}
                        >
                        <p className='group-hover:lg:text-[#001641] group-hover:text-white group-hover:z-50'>
                        Agenda
                        </p>
                        </HashLink>
                    </div>
                    <div className='flex  justify-center group items-center relative lg:w-[170px]  lg:h-[100px]'>
                        <img src={hover} alt="" className=' hidden group-hover:absolute group-hover:lg:flex group-hover:z-30' />
                        <HashLink
                            to="/#Speakers"
                            className={`font-primary min-w-[100px] group-hover:lg:bg-white px-4  rounded-[25px]  items-center min-h-max   text-[22px] lg:text-[32px] text-white  w-full lg:w-min flex justify-center py-1`}
                        >
                        <p className='group-hover:lg:text-[#001641] group-hover:text-white group-hover:z-50'>
                        Speakers
                        </p>
                        </HashLink>
                    </div>
                    

                    
                </div>
                <NavHashLink
                to={"/register"}
                >
                <button className='btn-gradient px-8 py-2 rounded-[30px] font-primary text-white font-bold text-[16px] lg:text-[24px] mx-6 lg:my-6 outline-none lg:w-min'>
                    REGISTER
                </button>
                </NavHashLink>
            </div>


        </nav>
    )
}

export default Navbar

