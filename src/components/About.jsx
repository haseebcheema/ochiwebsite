import { motion } from 'framer-motion';
import React from 'react';

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full bg-[#CDEA68] py-20 rounded-[1vw]'>
      <h1 className='text-[3.8vw] px-12 w-11/12 leading-none tracking-tight text-[#212121] font-["Neue Montreal"]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='border-b-[3px] border-[#212121] cursor-pointer'>raise funds</span>, <span className='border-b-[3px] border-[#212121] cursor-pointer'>sell products</span>, <span className='border-b-[3px] border-[#212121] cursor-pointer'>explain complex ideas</span>, and <span className='border-b-[3px] border-[#212121] cursor-pointer'>hire great people</span>.
      </h1>
      <hr className='mt-14 border-[#99AD52]'/>
      <div className='flex justify-between px-12 py-6 text-[1.1vw] text-[#3B3F2B]'>
        <div className='flex gap-[22vw]'>
            <h5 className='w-80'>What you can expect:</h5>
            <div className='w-72 leading-6'>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <br />
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
        </div>
        <div className='flex flex-col'>
            <h5 className='mb-4'>S:</h5>
            {[{'link': 'Instagram', 'url':'https://www.instagram.com/ochi_design/'}, {'link': 'Behance', 'url':'https://www.behance.net/ochi_design'}, {'link': 'Facebook', 'url':'https://www.facebook.com/people/OCHI-presentation-design/100067218942460/'}, {'link': 'LinkedIn', 'url':'https://www.linkedin.com/company/ochi-design/https://www.linkedin.com/company/ochi-design/'}].map((item, index) => (
                <a key={index} href={item.url} className='mb-2 underline underline-offset-[0.2vw] cursor-pointer'>{item.link}</a>
            ))}
        </div>
      </div>
      <hr className='mt-14 border-[#99AD52]'/>
      <div className='flex justify-between pt-6 px-12'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[#212121] text-5xl'>Our approach:</h1>
            <motion.button whileHover={{backgroundColor: "#000", color: "#fff"}} type='button' className='flex gap-7 items-center w-fit rounded-full px-5 py-3 text-white bg-[#212121] text-[1vw] border border-[#3B3F2B] cursor-pointer'>
                READ MORE <div className='w-2 h-2 bg-white rounded-full'></div></motion.button>
        </div>
        <div>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='rounded-lg' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;
