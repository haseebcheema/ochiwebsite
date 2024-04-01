import React from 'react';

function marquee() {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-t-[1vw]'>
      <div className='text text-white border-t-[0.1vw] border-b-[1px] border-[#B2B2B2] flex gap-2 overflow-hidden whitespace-nowrap font-["Founders Grotesk X-Condensed"]'>
        <h1 className='uppercase text-[18vw] font-bold tracking-tighter'>we are ochi</h1>
        <h1 className='uppercase text-[18vw] font-bold tracking-tighter'>we are ochi</h1>
      </div>
    </div>
  )
}

export default marquee;
