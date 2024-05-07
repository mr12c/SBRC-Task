import React from 'react'
import m2 from  '../../assets/m2.png'
import m3 from '../../assets/m3.png'
import RecentProjectDetails from './recentProjectDetails'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function RecentProject() {
  const myRef = useRef(null)

    useGSAP(()=>{
       
        
        let tl= gsap.timeline({
            
                scrollTrigger: {
                    trigger: ".myw0e",
                    start: "top top",
                    
                    end: "bottom top",
                    pin: true,
                    // markers:true
                  }
        
        })

        let tl2  = gsap.timeline({
          scrollTrigger:{
            trigger:'.detailtrigger',
            start:"100% 50%",
            end:"100% 50%",
            scrub:1,
            // markers: true,
            // pinReposition: true,
          }
        })


        tl2.to('.detailtriggerele',{
          marginTop:"-50%",
          
          duration:0.1,
          
        },'orange')
        tl2.to('.movekardo',{
          marginTop:"-59%",
          duration:0.1,
        },'orange')
        tl2.to('.vishal',{
          opacity:0,
          duration:0.03
        },'orange')

        tl2.to('.first-img',{
          opacity:0,
          duration:0.03
        },'orange')
    },{scope:myRef})
  return (
    <div className='w-screen h-screen bg-black' ref={myRef}>
      <div className='w-screen h-screen myw0e'>
      <div><h1 className='text-[#c5c2c2] pt-20 ml-20 text-[1.1  rem]'>Recent Works</h1></div>
      <div className='flex mt-[6%]'>
        <div className='w-[50%]   flex flex-col ml-[10rem] h-[19rem] overflow-hidden mt-[6%] detailtrigger'>
          <div className='detailtriggerele flex flex-col gap-4'>
          <RecentProjectDetails className={"vishal"} content={{heading:"nike air",paragraph:"The Nike website offers a dynamic experience showcasing athletic footwear, apparel, and accessories. Engaging hero sections, detailed product pages, streamlined cart, and compelling CTAs elevate user engagement and shopping convenience."}} ></RecentProjectDetails>
           <RecentProjectDetails className={'neha'} content={{
            heading:"open soft",paragraph:" Open Soft IIT Kharagpur (GC) is likely an event or initiative organized by the Indian Institute of Technology (IIT) Kharagpur, focusing on open-source software development. Open Soft events typically promote collaboration, innovation, and learning within the open-source community"
            }}></RecentProjectDetails>
          </div>
        </div>
        <div className='w-[70%] flex justify-center items-center'>
            <div className='w-[48%]  h-[14.1rem] overflow-hidden movie-border rounded-xl relative mt-%]'>
                <div className='flex flex-col gap-2 movekardo '>
                   
                  <img src={m2} alt="" className='rounded-xl first-img '/>
                    <img src={m3} alt="" className='rounded-xl' />
                 
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default RecentProject