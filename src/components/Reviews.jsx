import React from 'react';

function Reviews() {
  return (
    <div className='w-full bg-[#F1F1F1] py-20'>
      <h1 className='text-[#212121] text-5xl px-12'>Clients reviews:</h1>
      <hr className='mt-14 border-[#99AD52]'/>
      <div className='flex justify-between px-12 py-6 text-[1.1vw] text-[#3B3F2B]'>
        <div className='flex gap-[22vw]'>
            <h className='underline underline-offset-4 w-[11vw]'>Karman Ventures</h>
            <div className=''>
                <h1 className='text-[1.1vw] mb-10'>Services</h1>
                <button className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer hover:bg-[#212121] hover:text-white mt-3 mr-2">INVESTOR DECK</button>
                <button className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer hover:bg-[#212121] hover:text-white mt-3 mr-2">SALES DECK</button>
            </div>
            <div className='w-72 leading-6'>
                <h1 className='text-[1.1vw] mb-10'>William Barnes</h1>
                <img className='w-[100px] h-[100px] rounded-lg' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                <p className='mt-5 leading-5'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
        </div>
      </div>
      <hr className='mt-14 border-[#99AD52]'/>
      
    </div>
  )
}

export default Reviews;
