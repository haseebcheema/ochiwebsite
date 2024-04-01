import React from 'react';

function Eyes() {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>
        <div className='flex gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='w-[18vw] h-[18vw] bg-[#F1F1F1] rounded-full'></div>
            <div className='w-[18vw] h-[18vw] bg-[#F1F1F1] rounded-full'></div>
        </div>
    </div>
  )
}

export default Eyes;
