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
        <div className="flex flex-col  md:h-[75%] items-center justify-center mb-8">
            <div className="relative  w-full">
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
                        <div className="swiper-button-prev slider-arrow after:hidden ">
                        <div className=" slider-arrow after:hidden flex items-center absolute top-[5%] md:top-[20%] left-[-30px] lg:left-[-70px] justify-center z-30  cursor-pointer ">
                            <Arrow direction="right" />
                        </div>
                    </div>
                    <div className="swiper-button-next slider-arrow after:hidden ">
                        <div className="    slider-arrow after:hidden flex items-center justify-center absolute top-[5%] md:top-[20%] right-[-30px] lg:right-[-70px]  z-30  cursor-pointer ">
                            <Arrow direction="left" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       
    );
    }

export default SpeakersSwiper;