import React, { useEffect } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useState} from "react"
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
// Import GSAP
import { Power1, Power2, Power3 } from "gsap";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";

function LoadingPageAnimation() {

  const myRef = useRef(null);
  let [word, setWord] = useState(
  "JavaScript"
  );
  let [img ,setImg] = useState(i1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Change the word here
        setWord(prevWord => {
          
            if (prevWord == "JavaScript") {
              //  setImg(i2)
               return "React"
            } else if (prevWord == "React") {
              
               return "gsap"
            } else if (prevWord == "gsap") {
              //  setImg(i4)
               return "HTML"
            } else if (prevWord == "HTML") {
              // setImg(i3)
               return "Tailwind CSS"
            } else if(prevWord == "Tailwind CSS") {
              // setImg(i1)
               return "Tailwind CSS"
            }
         
        });
      }, 240);
      return () => clearInterval(interval);
    }, []);



    useEffect(() => {
      const interval = setInterval(() => {
        // Change the word here
        setImg(prevWord => {
          
            if (prevWord == i1) {
              //  setImg(i2)
               return i2
            } else if (prevWord == i2) {
              
               return i5
            } else if (prevWord == i5) {
              //  setImg(i4)
               return i4
            } else if (prevWord == i4) {
              // setImg(i3)
               return i3
            } else if(prevWord == i3) {
              // setImg(i1)
               return i3
            }
         
        });
      }, 240);

      
      
      
      return () => clearInterval(interval);
    }, []);




 
  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.to("#vishal", {
        height:0,
        borderBottomLeftRadius:"400%",
        borderBottomRightRadius:"400%",
        duration: 0.5,
        delay:1.2,
        ease: Power1.easeOut,
      });
      tl.to(".mytxt",{
        opacity: 0,
        delay:-0.4,
      })
    },
    { scope: myRef }
  );
  
  return (
    <div ref={myRef} className='relative z-[100] left-[-100%]'>
      <div className="absolute w-[300vw] h-screen bg-[#100f0f]  top-0  flex justify-center items-center" id="vishal" >
        <h1 className='text-white text-[2.3rem] flex items-center justify-center gap-4 mytxt' >{word} <span><img src={img} alt="" className=' myimg w-30 h-[2.3rem]' /></span></h1>
      </div>
    </div>
  )
}

export default LoadingPageAnimation;