import react from 'react';
import arrowRight from '/images/left-arrow.svg'
import arrowLeft from '/images/right-arrow.svg'

const Arrow = ({ direction}) => {
    const arrowImage = direction === 'left' ? arrowLeft : arrowRight;
    return (
            <img
                src={arrowImage}
                alt="arrow"
                className=" h-[100px] w-[100px] md:h-auto md:w-auto lg:min-w-max lg:min-h-max"
            />
        
    );
}
export default Arrow;
