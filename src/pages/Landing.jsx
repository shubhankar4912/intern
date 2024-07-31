import React from 'react';

function Landing() {
  return (
    <div className="relative h-screen">
      <img 
        className="absolute z-10 top-[224px] left-[42px] sm:top-[100px] sm:left-[20px] md:top-[150px] md:left-[30px]" 
        src="./Aspen.png" 
        alt="Aspen" 
      />
      <img 
        className="absolute z-[2] top-[553px] left-[32px] w-135 h-300 " 
        src="./vacation.png" 
        alt="Vacation" 
      />
      <img 
        className="w-full h-full absolute top-0 z-[-1]" 
        src="./Landingimg.png" 
        alt="Landing Background" 
      />
    </div>
  );
}

export default Landing;
