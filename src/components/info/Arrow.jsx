import react from 'react';
import arrowLeft from '../../../public/images/leftArrow.png'
import arrowRight from '../../../public/images/rightArrow.png'

const Arrow = ({ direction}) => {
    const arrowImage = direction === 'left' ? arrowLeft : arrowRight;
    return (
        <div className="flex items-center justify-center ">
            <img
                src={arrowImage}
                alt="arrow"
                className="w-10 h-10 md:w-28 md:h-28"
            />
        </div>
    );
}
export default Arrow;
