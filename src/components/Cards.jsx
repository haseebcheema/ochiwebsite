import { motion } from 'framer-motion';
import React from 'react';

function Cards() {
  return (
    <div>
        <div className='w-full px-12 flex gap-4'>
            {[{'name':'fyde', 'url':'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'}, {'name':'vise', 'url':'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'}].map((item, index) => (
                <div key={index} className='cards-container w-1/2'>
                    <h5 className='flex items-center gap-2 uppercase text-[1vw] pt-10 pb-4'> <div className='w-2 h-2 rounded-full bg-[#212121]'></div> {item.name} </h5>
                    <div className="card w-full h-[75vh] rounded-lg overflow-hidden">
                        <img className='w-full h-full bg-cover' src={item.url} alt="" />
                    </div>
                    {(index === 0) ? (
                        <div>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">AUDIT</motion.button>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">COPYWRITING</motion.button>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">SALES DESK</motion.button>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">SLIDES DESIGNmotion.</motion.button>
                        </div>
                    ) : (
                        <div>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">AGENCY</motion.button>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">COMPANY PRESENTATION</motion.button>
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className='w-full px-12 flex gap-4'>
            {[{'name':'trawa', 'url':'https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg'}, {'name':'premium blend', 'url':'https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'}].map((item, index) => (
                <div key={index} className='cards-container w-1/2'>
                    <h5 className='flex items-center gap-2 uppercase text-[1vw] pt-10 pb-4'> <div className='w-2 h-2 rounded-full bg-[#212121]'></div> {item.name} </h5>
                    <div className="card w-full h-[75vh] rounded-lg overflow-hidden">
                        <img className='w-full h-full bg-cover' src={item.url} alt="" />
                    </div>
                    {(index === 0) ? (
                        <div>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">BRAND IDENTITY</motion.button>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">DESIGN RESEARCH</motion.button>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">INVESTOR DECK</motion.button>
                        </div>
                    ) : (
                        <div>
                            <motion.button whileHover={{backgroundColor: "#212121", color: "#fff"}} className="rounded-full px-3 py-[0.5vw] text-[1vw] border border-[#3B3F2B] cursor-pointer mt-3 mr-2">BRANDED TEMPLATE</motion.button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>    
  )
}

export default Cards;
