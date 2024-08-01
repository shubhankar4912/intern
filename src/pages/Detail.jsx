import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, title, rating, isFavorite, detail, price } = location.state;
  
  // State to manage the "Read More" functionality
  const [isReadMore, setIsReadMore] = useState(false);

  // Function to toggle the "Read More" state
  const handleReadMoreToggle = () => {
    setIsReadMore(!isReadMore);
  };

  // Function to truncate the detail text
  const truncateDetail = (text, length) => {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  };

  // Define the length for truncation
  const truncatedLength = 100; // Adjust this value based on your needs

  return (
    <div className=' overflow-hidden'>
      <div className=' relative mx-9 mt-4'>
        <img className='relative z-[-1] w-[335px] h-[340px] rounded-3xl' src={imageUrl} alt="" />
        <img 
          className='relative top-[-331px] left-[23px] cursor-pointer' 
          src="./footer/back.png" 
          alt="back" 
          onClick={() => navigate(-1)} // Navigate to the previous page
        />
        <img className='relative h-[44px] w-[44px] -top-[63px] left-[251px]' src="./footer/heart.png" alt="heart" />
      </div>
      <div className='flex justify-between mx-4 mt-4'>
        <p className='font-semibold text-2xl'>{title}</p>
        <p className='text-blue-700 text-lg font-medium'>Show map</p>
      </div>
      <div className='flex gap-1 ml-3'>
        <img src="./card/star.png" alt="star" />
        <p>{rating}</p>
      </div>
      <p className='text-gray-700 bg-white w-[335px] ml-4 font-medium mt-2'>
        {isReadMore ? detail : truncateDetail(detail, truncatedLength)}
        {detail.length > truncatedLength && (
          <span 
            onClick={handleReadMoreToggle} 
            className='text-blue-700 cursor-pointer'
          >
            {isReadMore ? ' Show Less' : ' Read More'}
          </span>
        )}
      </p>
      <p className='font-bold text-2xl ml-4 mt-2 '>Facilities</p>

      <div className=' flex gap-2 mt-3 mx-6 '>
        <img src="./footer/Frame 1000000865.png" alt="" />
        <img src="./footer/Frame 1000000866.png" alt="" />
        <img src="./footer/Frame 1000000867.png" alt="" />
        <img src="./footer/Frame 1000000868.png" alt="" />
      </div>
      <div className=' mt-6 flex justify-between mx-6 '>
        <div>
          <p className='font-semibold text-lg'>Price</p>
          <p className=' text-green-700 font-semibold text-lg '>{price}</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white rounded px-4 py-2">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
