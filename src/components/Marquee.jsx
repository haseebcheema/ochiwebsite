import { motion } from 'framer-motion';
import React from 'react';

function marquee() {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-t-[1vw]'>
      <div className='text text-white border-t-[0.1vw] border-b-[1px] border-[#B2B2B2] flex overflow-hidden whitespace-nowrap font-["Founders Grotesk X-Condensed"]'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: "6"}} className='uppercase text-[18vw] font-bold tracking-tighter pr-16'>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: "6"}} className='uppercase text-[18vw] font-bold tracking-tighter pr-16'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default marquee;
