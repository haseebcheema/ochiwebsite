import React from 'react';
import Cards from './Cards';
import { motion } from 'framer-motion';

function Featured() {
  return (
    <div className='w-full bg-[#F1F1F1] py-20'>
      <h1 className='text-[#212121] text-5xl px-12'>Featured Projects</h1>
      <hr className='mt-10 border-[#B2B2B2]'/>
      <Cards/>
      <div className='flex justify-center pt-20'>
        <motion.button whileHover={{backgroundColor: "#000", color: "#fff"}} type="button" className='flex gap-7 items-center w-fit rounded-full px-6 py-[1.5vw] text-[#F1F1F1] bg-[#212121] text-[1vw] border cursor-pointer'>
          VIEW ALL CASE STUDIES <div className='w-2 h-2 bg-[#F1F1F1] rounded-full'></div></motion.button>
      </div>
    </div>
  )
}

export default Featured;
