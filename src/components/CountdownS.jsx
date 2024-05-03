import React from 'react';
import Countdown from 'react-countdown';

function CountdownS() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Countdown completed</span>;
    } else {
      return (
        <div className="font-aladin gap-3 md:gap-12 flex justify-around items-center text-[60px] md:text-[96px]   ">
          <div className='flex flex-col justify-center items-center p-0'>
            {days}
            <div className=' font-primary text-[20px] md:text-[48px]'>days</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {hours}
            <div className=' font-primary text-[20px] md:text-[48px]'>hours</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {minutes}
            <div className=' font-primary text-[20px] md:text-[48px]'>minutes</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {seconds}
            <div className=' font-primary text-[20px] md:text-[48px]'>seconds</div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date="2024-05-09T01:02:03" renderer={renderer} />;
}

export default CountdownS;
