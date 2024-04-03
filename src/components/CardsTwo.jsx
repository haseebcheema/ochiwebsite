import { motion } from 'framer-motion';
import React from 'react';

function CardsTwo() {
  return (
    <div className='w-full h-screen px-12 py-12 bg-[#F1F1F1] flex gap-4'>
      <div className="cards-container w-1/2 h-96 bg-[rgb(0,77,67)] rounded-lg">
        <div className="relative card w-full h-full flex justify-center items-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""/>
            <h5 className='absolute left-6 bottom-8 text-[#CDEA68] text-sm border border-[#CDEA68] rounded-full px-3 py-1'>©2019-2022</h5>
        </div>
      </div>
      <div className="cards-container w-1/2 h-96 flex gap-4">
        <div className="relative card w-1/2 h-full bg-[#212121] flex justify-center items-center rounded-lg">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <motion.button whileHover={{backgroundColor: "#F1F1F1", color: "#212121"}} className='absolute left-6 bottom-8 text-[#F1F1F1] text-sm uppercase border border-[#F1F1F1] rounded-full px-3 py-1'>Rating 5.0 On Clutch</motion.button>
        </div>
        <div className="relative card w-1/2 h-full bg-[#212121] flex justify-center items-center rounded-lg">
            <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <motion.button whileHover={{backgroundColor: "#F1F1F1", color: "#212121"}} className='absolute left-6 bottom-8 text-[#F1F1F1] text-sm uppercase border border-[#F1F1F1] rounded-full px-3 py-1'>Business Bootcamp Alumni</motion.button>
        </div>
      </div>
    </div>
  )
}

export default CardsTwo;
