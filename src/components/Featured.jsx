import React from 'react';
import Cards from './Cards';

function Featured() {
  return (
    <div className='w-full bg-[#F1F1F1] py-20'>
      <h1 className='text-[#212121] text-5xl px-12'>Featured Projects</h1>
      <hr className='mt-10 border-[#B2B2B2]'/>
      <Cards/>
      <div className='flex justify-center pt-20'>
        <button type="button" className='flex gap-7 items-center w-fit rounded-full px-6 py-[1.5vw] text-white bg-[#212121] text-[1vw] border  cursor-pointer hover:bg-black hover:text-white'>
          VIEW ALL CASE STUDIES <div className='w-2 h-2 bg-white rounded-full'></div></button>
      </div>
    </div>
  )
}

export default Featured;
