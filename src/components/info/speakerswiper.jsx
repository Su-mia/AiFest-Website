import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import SpeakerCard from "./speakerCard";
import {speakers} from "../info/handler/index.js";
import "swiper/css";
import "swiper/css/navigation";
import Arrow from "./Arrow";



const SpeakersSwiper = () => {
    const [speaker, setSpeaker] = useState(null);
    return (
        <div className="flex flex-col h-[75%] items-center justify-center mb-8">
            <div className="relative h-full w-full">
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                        delay: 10000,
                    }}
                    centeredSlides={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    modules={[Navigation, A11y]}
                    className="w-[324px] md:w-[680px] swiper__container rounded-[20px] px-[20px] pt-[10px] "
                    slidesPerView={1}
                >
                    {speakers.map((speaker, index) => (
                        <SwiperSlide key={index}>
                            <SpeakerCard
                                speakerImage={speaker.img}
                                Name={speaker.Name}
                                title={speaker.title}
                            />
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
                <div className="slider-controler ">
                        <div 
                        onClick={() => useSwiper.slideNext()}
                        className="slider-arrow after:hidden flex items-center absolute top-[20%] md:top-[20%] left-[-30px]  justify-center  p-4  z-30  cursor-pointer ">
                            <Arrow direction="right" />
                        </div>
                        <div 
                        onClick={() => useSwiper.slidePrev()}
                        className=" slider-arrow after:hidden flex items-center justify-center absolute top-[20%] md:top-[20%] right-[-30px]    p-4 z-30  cursor-pointer ">
                            <Arrow direction="left" />
                        </div>
                </div>
                
            </div>
        </div>
       
    );
    }

export default SpeakersSwiper;