import React from 'react';
import Last from './Last';

function Footer() {
  return (
    <div className='w-full h-screen px-12 pt-20 pb-10 flex bg-[#F1F1F1]'>
      <div className="left w-1/2">
        <h1 className="text text-[6vw] text-[#212121] font-bold uppercase tracking-[-5px] leading-[5.6vw]">EYE-</h1>
        <h1 className="text text-[6vw] text-[#212121] font-bold uppercase tracking-[-5px] leading-[5.6vw]">OPENING</h1>
      </div>
      <div className="right w-1/2">
        <h1 className="text text-[6vw] text-[#212121] font-bold uppercase tracking-[-5px] leading-[5.6vw]">PRESENTATIONS</h1>
        <div className='flex flex-col text-[1.1vw] text-[#3B3F2B] mt-10'>
            <h5 className='mb-4'>S:</h5>
            {[{'link': 'Instagram', 'url':'https://www.instagram.com/ochi_design/'}, {'link': 'Behance', 'url':'https://www.behance.net/ochi_design'}, {'link': 'Facebook', 'url':'https://www.facebook.com/people/OCHI-presentation-design/100067218942460/'}, {'link': 'LinkedIn', 'url':'https://www.linkedin.com/company/ochi-design/https://www.linkedin.com/company/ochi-design/'}].map((item, index) => (
                <a key={index} href={item.url} className='mb-2 underline underline-offset-[0.2vw] cursor-pointer'>{item.link}</a>
            ))}
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col text-[1.1vw] text-[#3B3F2B] mt-10'>
                <h5 className='mb-4'>L:</h5>
                {['202-1965 W 4th Ave', 'Vancouver, Canada', '30 Chukarina St', 'Lviv, Ukraine'].map((item, index) => (
                    <a key={index} className='mb-2 underline underline-offset-[0.2vw] cursor-pointer'>{item}</a>
                ))}
                <h5 className='mb-4 mt-4'>E:</h5>
                <a className='mb-2 underline underline-offset-[0.2vw] cursor-pointer'>hello@ochi.design</a>
            </div>
            <div className='flex flex-col text-[1.1vw] text-[#3B3F2B] mt-10'>
            <h5 className='mb-4 pt-2'>M:</h5>
                {['Home', 'Services', 'Our Work', 'About Us', 'Insights', 'Contact Us'].map((item, index) => (
                    <a key={index} className='mb-2 underline underline-offset-[0.2vw] cursor-pointer'>{item}</a>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;
