import React, { useEffect, useState } from "react";

function Start() {

    // creating a state variable that can hold the angle value
    const [angle, setAngle] = useState('');

    // immediately invoked after page is fully loaded
    useEffect(() => {
        window.addEventListener('mousemove', (dets) => {

            // cursor's position
            let mouseX = dets.clientX;
            let mouseY = dets.clientY;

            // difference between cursor's position and center of the page
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            // finding the angle and convert into degrees from radians
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            // set the value for the angle
            setAngle(angle - 180);
        })
    })

    return (
        <div className="relative w-full min-h-screen pb-28 bg-[#CDEA68]">
            <button className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></button>
            <button className='flex gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex items-center justify-center w-[12vw] h-[12vw] bg-[#F1F1F1] rounded-full'>
                    <div className='relative flex justify-center items-center text-white font-semibold w-2/3 h-2/3 bg-[#212121] rounded-full '>
                        PLAY
                        <div style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                            <div className='w-6 h-6 bg-white rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[12vw] h-[12vw] bg-[#F1F1F1] rounded-full'>
                    <div className='relative flex justify-center items-center text-white font-semibold w-2/3 h-2/3 bg-[#212121] rounded-full '>
                        PLAY
                        <div style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                            <div className='w-6 h-6 bg-white rounded-full'></div>
                        </div>
                    </div>
                </div>
            </button>
            <h1 className="text-center font-extrabold text-[10vw] leading-[8vw] tracking-tighter pt-36 pb-10 text-[#212121]">
                READY <br />
                TO START <br />
                THE PROJECT?
            </h1>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <button
                    type="button"
                    className="flex gap-7 items-center w-fit rounded-full px-6 py-[1.5vw] text-[#F1F1F1] bg-[#212121] text-[1vw] border cursor-pointer border-none hover:bg-black hover:text-white"
                >
                    START THE PROJECT{" "}
                    <div className="w-2 h-2 bg-[#F1F1F1] rounded-full"></div>
                </button>
                <h2>OR</h2>
                <button
                    type="button"
                    className="flex gap-7 items-center w-fit rounded-full px-6 py-[1.5vw] text-[#212121] bg-[#CDEA68] text-[1vw] border border-[#212121] cursor-pointer hover:bg-black hover:text-white"
                >
                    HELLO@OCHI.DESIGN{" "}
                    <div className="w-2 h-2 bg-[#212121] rounded-full"></div>
                </button>
            </div>
        </div>
    );
}

export default Start;
