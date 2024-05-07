import React from 'react'
import BtnType1 from '../../ButtonComponents/BtnType1'

function    RecentProjectDetails({className,content }) {
  return (
    <div className={`${className}`}>
         <div className='flex items-center gap-4
         '>
            <h1 className='text-[3.5rem] text-[#c0bcbc] font-bold capitalize'>{content.heading}</h1>
            <span className='text-[1.4rem] font-semibold mt-4 text-[#b7b7b7]'>2024</span>
         </div>
         <div>
            <p className='text-[#cdcaca] text-[0.79rem] no-wrap w-[70%] mt-[10px]'>
            {content.paragraph}
            </p>
         </div>
         <div className='flex items-center gap-4'>
            <BtnType1 content={"visit website"} csstyle={'mt-[40px]'}></BtnType1>
             <div className='mt-10 cursor-pointer'><a href=""><i class="ri-github-fill text-[2rem] bg-white rounded-full p-2"></i></a></div>
         </div>
    </div>
  )
}

export default RecentProjectDetails