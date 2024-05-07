import React from 'react'
import NavBar from './NavBar'
import TextScrooling from './TextScrooling'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import power1 from gsap
import {Power1} from 'gsap'


// import {ScrollTrigger} from "@gsap/react";
import {useState} from "react"
import { useRef } from "react";
// import SocialLink from "../AppComponents/SocialLink"
gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger) 
 
import AboutMe from './AboutMe';

function HomePage({setIsNavPageVisible,isNavPageVisible}) {
  const myRef= useRef(null);
  useGSAP(()=>{
   let tl10= gsap.timeline();
   tl10.to('.homepage',{
    top:0,
    duration:0.5,
    delay:1.1,
     ease: Power1.easeInOut
    
   });
  },{scope:myRef})
 
   
 



  return (
  <div  className='overflow-x-hidden' ref={myRef}>
  <div className='w-screen h-[100vh] bg-[#cecece] homepage relative top-[100%]'>
        <NavBar setIsNavPageVisible={setIsNavPageVisible} isNavPageVisible={isNavPageVisible}/>
        <TextScrooling/>
         
        <AboutMe/>

        
  </div>
     </div>
  )
}

export default HomePage