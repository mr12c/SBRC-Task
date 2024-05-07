import React from 'react'
import { useEffect,useState } from 'react'
import BtnType1 from '../ButtonComponents/BtnType1'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ContactPage() {
    let [time,setTime] = useState()
    useEffect(()=>{
      // Get current date
const currentDate = new Date();

// Define month names array
const monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

// Format the date
const formattedDate = currentDate.getDate() + ' ' + monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
   setTime(formattedDate);
    })
    
    const myRef = useRef(null);
    useGSAP(()=>{
        let tl=gsap.timeline({
            scrollTrigger:{
                trigger:".contactPage",
                start:"top 70%",
                end:"bottom 30%",
                scrub:1,
                // markers: true
                // pinReposition: true,
            }
        })
        tl.to(".gtgola",{
            right:"14%",
            duration:1,
        },"orange")
        tl.to("#anime",{
            marginTop:"10%",
            opacity:1,
            duration:1,

        },"orange")
    })
    
  return (
    <div className='contactPage'> 
    <div className='w-screen h-[100vh] flex flex-col justify-between bg-[#121214]  ' ref={myRef}>
       
        <div className='w-full  flex justify-center items-center '>
        <div className='flex flex-col mr-[30%] mt-[14%] opacity-0 ' id="anime">
        <div className='flex gap-4'>
        <img src="" alt="" className='w-[6rem]  h-[6rem]  rounded-full bg-white' />
           <h1 className='text-white text-[4rem] capitalize'>have an Idea? </h1>
        </div>
        <h1 className='text-white text-[4rem]'>let's build Together.</h1>
        </div>
        
       </div>
       <div className='ml-[17%] mt-[-5%]  relative'>
            <hr  className='w-[85%] h-6 opacity-[0.4]'/>
            <div className='bg-blue w-[10rem] h-[10rem] rounded-full top-[-320%] right-[30%] text-white text-[1.3rem] absolute flex justify-center items-center gtgola bg-[#2d2db0] cursor-pointer hover:scale-[1.1]  gmt10'>Get In Touch </div>
        </div>
        <div className='flex ml-[17%] gap-4 mt-[-5%]'>
           <BtnType1 content={"vishal@kgpian.iitkgp.ac.in"}  csstyle={'w-[20%]'}/>
           <BtnType1 content={"+91 9142027752"}/>
        </div>
       <div className='w-full flex  justify-between px-4 pb-2'>
        <div className='flex gap-5'>
            <div className='flex flex-col gap-2'>
                 <p className='text-[#959595]'>Version</p>
                 <h1 className='text-white'>2024 </h1>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-[#959595]'>local Time</p>
                <h1 className='text-white'>{time}</h1>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-[#959595]'>socials</p>
            <div>
                <ul className='flex gap-5 text-white'>
                    
                    <li><a href="">Dribble</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    
                </ul>
            </div>
        </div>
       </div>
       
    </div>
    </div>
  )
}

export default ContactPage