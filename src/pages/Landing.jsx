import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const nav=useNavigate();
    function handleonclick(){
       nav('/explore')
    }
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        className="absolute z-10  left-[57px] top-[93px] " 
        src="./Aspen.png" 
        alt="Aspen" 
      />
      <img 
        className="absolute z-[2] top-[500px] left-[50px] w-[260px] h-[146px]" 
        src="./vacation.png" 
        alt="Vacation" 
      />
      <img 
        className="w-screen h-screen absolute top-0 left-0 right-0 bottom-0 z-[-1]" 
        src="./Landingimg.png" 
        alt="Landing Background" 
      />
      <button 
        type="button"  onClick={handleonclick}
        className="fixed z-20 bottom-[20px] left-[60px] w-[311px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Explore
      </button>
    </div>
  );
}

export default Landing;
