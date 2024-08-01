import React from 'react';
import { useNavigate } from 'react-router-dom';

function ImageCard({ imageUrl, title, rating, isFavorite,detail,price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail', { state: { imageUrl, title, rating, isFavorite,detail,price} });
  };
  return (
    <div onClick={handleClick}  className=" relative w-[188px] h-[240px] overflow-hidden rounded-xl shadow-lg flex-shrink-0">
      <img 
        src={imageUrl} 
        alt={title} 
        className="object-cover w-full h-full"
      />
      <div className="w-32 absolute bottom-11 left-4 bg-gray-800 bg-opacity-70 text-white rounded-full text-center">
        {title}
      </div>
      <div className="absolute bottom-1 left-4 flex items-center space-x-1 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded-full">
        <img className="h-[16px] w-[16px]" src="./card/star.png" alt="star" />
        <span>{rating}</span>
      </div>
      <button className="absolute bottom-4 right-4 bg-white bg-opacity-70 text-red-500 p-2 rounded-full">
        <img src={isFavorite ? "./card/heart-filled.png" : "./card/heart.png"} alt="favorite" />
      </button>
    </div>
  );
}

export default ImageCard;
