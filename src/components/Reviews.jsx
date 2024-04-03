import { motion } from 'framer-motion';
import React from 'react';

function Reviews() {
  return (
    <div className='w-full bg-[#F1F1F1] py-10'>
      <h1 className='text-[#212121] text-5xl px-12'>Clients reviews:</h1>
      <hr className='mt-14 border-[#B2B2B2]'/>
      <div className='flex justify-between px-12 py-6 text-[1.1vw] text-[#3B3F2B]'>
        <div className='flex gap-[22vw]'>
            <h className='underline underline-offset-4 w-[11vw]'>Karman Ventures</h>
            <div className=''>
                <h1 className='text-[1.1vw] mb-10'>Services</h1>
                <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">INVESTOR DECK</motion.button>
                <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">SALES DECK</motion.button>
            </div>
            <div className='w-72 leading-6'>
                <h1 className='text-[1.1vw] mb-10'>William Barnes</h1>
                <img className='w-[100px] h-[100px] rounded-lg' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                <p className='mt-5 leading-5'>They were transparent about the time and the stages of the 'project'. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
        </div>
      </div>
      <hr className='mt-14 border-[#B2B2B2]'/>
      {[
        {'project': 'planetly', 'name':'nina walloch'}, 
        {'project': 'Workiz', 'name':'Tomer Levy'}, 
        {'project': 'Premium', 'name':'Ellen Kim'},
        {'project': 'Hypercare', 'name':'Brendan '}, 
        {'project': 'Officevibe', 'name':'Raff Labrie'}, 
        {'project': 'Orderlion', 'name':'Stefan'},
        {'project': 'Black Book', 'name':'Jaci Smith'}, 
        {'project': 'Trawa', 'name':'David Budde'}
        ].map((item, index) => (
            <div key={index} className='flex justify-between items-center px-12 py-4 border-b-[1px] border-[#B2B2B2]'>
                <h1 className='w-24 text-[1.2vw] text-[#3B3F2B] capitalize'>{item.project}</h1>
                <h1 className='w-24 text-[1.2vw] text-[#3B3F2B] capitalize'>{item.name}</h1>
                <h1 className='text-[1.2vw] text-[#3B3F2B] capitalize underline underline-offset-4'>READ</h1>
            </div>
        ))}
    </div>
  )
}

export default Reviews;
