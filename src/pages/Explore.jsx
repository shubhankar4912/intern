import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import useImageCardsData from '../hooks/useImageCardsData'; // Adjust the path according to your folder structure

function Explore() {
  const [activeTab, setActiveTab] = useState('Location');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Aspen, USA');
  const tabs = ['Location', 'Hotels', 'Food', 'Adventure', 'Activities'];
  const cardsData = useImageCardsData();
  const cities = ['New York, USA', 'Los Angeles, USA', 'Chicago, USA', 'San Francisco, USA', 'Miami, USA'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownVisible(false);
  };

  return (
    <div className="relative w-[375px] h-[812px]">
      <div className="flex justify-between w-[335px] h-[56px] mx-[20px] mt-[44px]">
        <div className="flex flex-col w-[103px] h-[56px]">
          <p className="w-[50px] text-lg">Explore</p>
          <h2 className="w-full font-semibold text-4xl">{selectedCity.split(',')[0]}</h2> {/* Update here */}
        </div>
        <div className="relative">
          <div className="flex h-[16px] w-[108px] gap-[.2px] cursor-pointer" onClick={toggleDropdown}>
            <div><img className="w-[16px] h-[16px] mr-[1px]" src="./location-1.png" alt="Location" /></div>
            <div className="text-xs text-gray-500">{selectedCity}</div>
            <div><img className="w-[16px] h-[16px] ml-[10px]" src="./Arrow - Down 2.png" alt="Dropdown" /></div>
          </div>
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                {cities.map((city) => (
                  <li 
                    key={city} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[60px] mx-[20px]">
        <div className="flex items-center bg-blue-50 rounded-full px-4 py-2 w-full max-w-md mx-auto">
          <img src="./Search.png" className="text-gray-400 text-lg" alt="Search" />
          <input 
            type="text" 
            placeholder="Find things to do" 
            className="ml-2 bg-transparent outline-none text-gray-500 placeholder-gray-400 w-full"
          />
        </div>
      </div>
      <div className="flex overflow-x-auto py-2 px-4 rounded-lg mt-5 scrollbar-hide">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`px-4 py-2 mx-2 rounded-full cursor-pointer ${
              activeTab === tab ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="flex justify-between px-4">
        <p className="font-bold text-xl">Popular</p>
        <p className="text-blue-700 font-semibold">See all</p>
      </div>
      <div className="mt-3 ml-4 flex space-x-4 overflow-x-auto scrollbar-hide">
        {cardsData.map((card, index) => (
          <ImageCard 
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            rating={card.rating}
            isFavorite={card.isFavorite}
            detail={card.detail}
            price={card.price}
          />
        ))}
      </div>
      <h1 className='font-bold text-xl ml-5 mt-4'>Recommended</h1>
      <div className='w-[364px] h-[174px] flex gap-8 ml-5 mt-7 overflow-x-auto scrollbar-hide'>
        <div>
          <img className='h-[96px] w-[166px]' src="./e-foot/Group1.png" alt="Explore" />
          <p className='font-semibold'>Explore {selectedCity.split(',')[0]}</p> {/* Update here */}
        </div>
        <div>
          <img className='h-[96px] w-[166px]' src="./e-foot/Group2.png" alt="Luxurious" />
          <p className='font-semibold'>Luxurious {selectedCity.split(',')[0]}</p> {/* Update here */}
        </div>
      </div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl shadow-black flex justify-between px-5 w-[377px] h-[72px] pt-4">
        <img className="w-[20px] h-[20px]" src="./nav/Home.png" alt="Home" />
        <img className="w-[15px] h-[15px]" src="./nav/Ticket.png" alt="Ticket" />
        <img className="w-[15px] h-[15px]" src="./nav/Heart.png" alt="Heart" />
        <img className="w-[15px] h-[15px]" src="./nav/Profile.png" alt="Profile" />
      </div>
    </div>
  );
}

export default Explore;
