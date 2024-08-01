import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const { imageUrl, title, rating, isFavorite, detail } = location.state;
  
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
    <div>
      <div className='mx-6 mt-4'>
        <img className='w-[335px] h-[340px] rounded-3xl' src={imageUrl} alt="" />
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

      <div className=' flex gap-2 mt-2 '>
        <img src="./footer/Frame 1000000865.png" alt="" />
      <img src="./footer/Frame 1000000866.png" alt="" />
      <img src="./footer/Frame 1000000867.png" alt="" />
      <img src="./footer/Frame 1000000868.png" alt="" />
      </div>
      
    </div>
  );
}

export default Detail;
