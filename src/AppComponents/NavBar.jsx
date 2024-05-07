import React, { useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 



function NavBar({setIsNavPageVisible,isNavPageVisible}) {
 

  const [rotate,setRotation] = useState(false)
  const myRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  window.addEventListener("scroll",()=>{
    setIsNavPageVisible(false);
    setRotation(false)
 })
  
  const handleOnClick = () =>{
    setIsNavPageVisible(prev=>!prev);
    setRotation(prev=>!prev);
    line1.current.style="transfrom:rotate(20deg);"
    console.log(isNavPageVisible);
  } 
  
  

   useGSAP(()=>{
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".navanime",
        start: "130% 10%",
        end: "300% 10%", // Corrected end value
        scrub: true, // Boolean value without quotes
        // markers: true  // Boolean value without quotes
      },
    });
    tl7.to(".navanime",{
      backgroundColor:"transparent",
      duration:0.3,
      ease: "EaseInOut",
    },"orange");

    tl7.to(".work",{
      marginLeft:"90%",
      duration:1,
      ease: "EaseInOut",
    },"orange")
    tl7.to(".menu",{
      
      duration:1,
      scale:1,
      ease: "EaseInOut",
    },"orange")

    tl7.to(".logotext",{
       
      duration:0.3,
      ease:"EaseInOut"
    },"orange")

   },{scope:myRef})
  return (
    <div className='flex justify-center items-center  z-[90] relative top-12 rounded-2xl overflow-hidden ' ref={myRef}>
      <div className=' fixed flex justify-between py-2 px-10 opacity-1 bg-[#ffffff] navanime rounded-xl w-[96%]  items-center  '>
        <div className="logo  ">
            <div className='text-black overflow-hidden nowrap    translateOnHover-1   flex    gap-16'>  

            <div className='nowrap animateOnHover-1 flex gap-20 w-[11.4rem] rounded-lg logotext font-[500] '><h1 className='w-[7em] text-[1.19rem] text-nowrap mixblend'> &#169;Code by Vishal</h1>
            <h1 className='w-[10rem] text-[1.19rem] text-nowrap' >Front End Devloper</h1></div>
            </div>
        </div>
        <div className='navlinks'>
            <ul className='flex gap-5 text-[black] text-[1rem] font-[500] overflow-hidden'>
                <li className='cursor-pointer work'>Work</li>
                <li  className='cursor-pointer about'>About</li>
                <li   className='cursor-pointer project'>Projects</li>
                <li   className='cursor-pointer contact'>Contact</li>
            </ul>
        </div>
        <div className={`mix-blend-difference w-[70px] h-[70px] rounded-full cursor-pointer myanimebox opacity-1 absolute right-[1%] menu flex flex-col  overflow-hidden justify-center items-center gap-2 scale-0 ${rotate? "gap-0 bg-[#4141d4] " : "gap-2 "}`}
        onClick={handleOnClick}>
                 <div className={`w-full h-full absolute bg-[#4a4aec]  mix-blend-difference navPageAnime z-[90] ${rotate?" bg-[#e6ff6a]" : "" }`}></div>
               <div className={`w-6 h-[2px] bg-white overflow-hidden z-[92] navPageAnime ${rotate? "rotate-[40deg]" : ""}`} ref={line1}>d</div>
              
               <div className={`w-6 h-[2px] bg-white  overflow-hidden z-[92] navPageAnime ${rotate? "rotate-[-40deg]" : ""}`} ref={line2}>d</div>
        </div>
    </div>
    </div>

  )
}

export default NavBar