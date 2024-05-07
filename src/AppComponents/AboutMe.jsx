import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import {useRef} from "react" 
 


import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
 


gsap.registerPlugin(useGSAP);

function AboutMe() {
  const myRef= useRef(null);
  useGSAP(()=>{
    let tl = gsap.timeline();
    tl.to(".aboutme234", {
       top:'70%',
       opacity:1,
      duration:1,
      delay:0,
      ease: "ExpoEaseOut",
    });
    let tl11= gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutme234",
        start: "-100% 10%",
        end: "200% 10%", // Corrected end value
        scrub: true, // Boolean value without quotes
        // markers: true,  // Boolean value without quotes
      },
    });
    tl11.to(".myarw", {
    rotate:90,
      duration:1,
      ease: "ExpoEaseOut",
    })
     
    let tl2= gsap.timeline({scrollTrigger:{
      trigger:".animeonscroll4094",
      start:"20% 70%",
      end:"100% 10%",
      scrub:true,
      // markers:true,
    }})

    tl2.to(".animeonscroll4094",{
      top:"80%",
      duration:1,
      ease: "ExpoEaseOut",
    })


  },{scope:myRef})
  return (
     <div  ref = {myRef} >
      <div className='absolute  top-[70%] lg:right-[3%] sm:right-[10%]  text-[#ffffff] font-bold  smb animeonscroll4094 '  >
       <div  className='aboutme234 opacity-0'>
       <i class="ri-arrow-right-up-line text-[2.1rem] w-full h-full myarw"></i>
       <div className='lg:text-[1.6rem] font-[500] sm:text-[3rem] smbt1'>Web Designer &</div>
       <div className='lg:text-[1.8rem] font-[500]  sm:text-[3.5rem] smbt2'>FrontEnd React Devloper</div>
       </div>
    </div>
     </div>
  )
}

export default AboutMe