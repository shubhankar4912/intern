import React from 'react'

function Explore() {
  return (
    <div className='w-[375px] h-[812px]'>
        <div className=' flex justify-between w-[335px] h-[56px] mx-[20px] mt-[44px] '> 
            <div className='flex flex-col w-[103px] h-[56px] '>
                <p className='w-[50px] text-lg'>Explore</p>
                <h2 className='w-full font-semiboldbold text-4xl'>Aspen</h2>

            </div>
            <div className=' flex h-[16px] w-[108px] gap-[.2px] '> 
            <div><img className='w-[16px] h-[16px] mr-[1px] ' src="./location-1.png" alt="" /></div>
            <div className=' text-xs text-gray-500'>Aspen , USA</div>
            <div><img className='w-[16px] h-[16px] ml-[10px]' src="./Arrow - Down 2.png" alt="" /></div>
            </div>
        </div>
      
    </div>
  )
}

export default Explore
