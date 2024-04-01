import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function LandingPage() {
  return (
    <div className="text-white w-full h-screen pt-1">
      <div className="textstructure mt-44 font-bold font-['Founders Grotesk X-Condensed'] text-[#212121]">
        {["we create", "eye opening", "presentations"].map((item, index) => {
            return (
                <div key={index} className="masker">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && (
                            <div className="mr-[1.5vw] w-[8vw] h-[5vw] -top-[0.5vw] left-[3.5vw] relative">
                                <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className="w-full h-full bg-cover bg-center rounded-md" alt="" />
                            </div>
                        )}
                        <h1 className="text text-[7vw] uppercase tracking-tighter leading-[5.6vw] mx-10">
                        {item}
                        </h1>
                    </div>
                </div>
        )})}
      </div>
      <hr className="mt-20 border-[#B2B2B2]"/>
      <div className="start flex justify-between items-center w-full pl-12 pt-4 font-['Neue Montreal']">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <h2 key={index} className="text-[1.1vw] text-[#212121]"> {item} </h2>
        ))}
        <div className="projects flex gap-1 items-center pr-10 text-[#212121]">
            <button type="button" className="rounded-full px-2 py-1 text-[1.1vw] border border-[#212121] cursor-grab hover:bg-[#212121] hover:text-white">START THE PROJECT</button>
            <IoMdArrowForward className="border border-[#212121] rounded-full size-8 px-1 -rotate-45 flex justify-center items-center cursor-grab hover:bg-[#212121] hover:text-white"/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
