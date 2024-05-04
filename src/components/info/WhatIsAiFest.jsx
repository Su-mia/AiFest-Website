import React from 'react'
import { useState, useEffect } from 'react'
import leafguyUp from '/images/leafguyUp.png'
import leafguyDown from '/images/leafguyDown.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '/images/20230619_180433.jpg';
import img2 from '/images/20230619_180631.jpg';
import img3 from '/images/20230619_182935.jpg';
import img4 from '/images/IMG_1005.jpg';
import img5 from '/images/IMG_1115.jpg';
import img6 from '/images/IMG_1416.jpg';

function WhatIsAiFest() {
  const CarouselData = [ img1, img2, img3, img4, img5, img6 ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % CarouselData.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [CarouselData.length]);

    
  return (
    <div className="relative px-[20px] md:px-[100px] py-[20px] md:py-[40px] gap-[40px] md:gap-[100px] flex flex-col">
      <img src={leafguyDown} className="absolute top-0 right-0 w-1/3" alt="leaf guy" />
      <h1 className=" mt-[10%] text-[32px] md:text-[48px] text-center relative font-primary font-bold">What is Ai Fest’24 </h1>
      <div className="relative flex flex-col items-center justify-between w-full md:items-start md:flex-row">
        <p className="font-primary text-[20px] md:text-[24px] font-medium text-white  w-full md:w-1/2 text-center md:text-left px-2">A Three days Datathon where teams will compete and solve challenges using  different machine learning algorithms. During the competition, participants will receive mentorship from experts, workshops will be organized on data preprocessing, supervised, unsupervised for level 1, deep learning for level 2, giving the opportunity to all AI enthusiasts from different backgrounds to participate, learn and compete.</p>
        <div className= "relative flex flex-col w-full md:w-[40%] items-center justify-center">
        <Carousel
            className="mt-4 md:mt-0 hover:cursor-pointer hover:border-2 bg-shadow hover:border-white " 
          autoPlay={true}
          interval={4000}
          showArrows={false}
          showIndicators={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover={true}
          infiniteLoop={true}
          centerMode={false}
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{ background: '#001641', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block', margin: '1px 5px' }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  style={{ background: '#0D4B85', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 5px' }}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          
        >
          {CarouselData?.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index + 1}`} style={{ width: '470px', height: '400px' }}  />
            </div>
          ))}
        </Carousel>
        </div> 
      </div>
    </div>
  )
}

export default WhatIsAiFest
