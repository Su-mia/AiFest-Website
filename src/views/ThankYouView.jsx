import React from 'react';
import im1 from "/images/knight.svg";
import im2 from "/public/images/blue_door_0004_blue_vine_06.svg"
import im0 from "/images/abyss_0001_blue_root_10.svg"

const ThankYouView = () => (
  <div className="w-screen h-screen flex justify-center items-center bg-gradient-form ">
    <div className="text-center bg-black bg-opacity-40 backdrop-blur-lg p-20 rounded-lg max-sm:mx-8 sm:mx-8">
      <h1 className="text-3xl font-bold">Thank You!</h1> 
      <p className="text-lg mt-4">Your registration has been submitted.</p>
   </div>
  
   <img src={im0} alt="Blue Root" className="absolute top-0 right-0" />
    <img src={im1} alt="The Knight" className="absolute top-0 right-40 z-30" />
    <img src={im2} alt="Blue Vine" className="absolute bottom-0 left-0" />
  </div>
);

export default ThankYouView;