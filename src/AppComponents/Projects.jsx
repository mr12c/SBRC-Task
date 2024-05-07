import React from 'react'
import ProjectPageDetail from './Project/ProjectPageDetail'
import rp2 from '../assets/rp2.png'
import rp6 from '../assets/rp6.png'
import rp11 from '../assets/rp11.png'

import rp10 from '../assets/rp10.png'
import rp12 from '../assets/rp12.png'


function Projects() {
  let projects = [{
    title:"Blink It",
    description:"The ecommerce website is a comprehensive platform showcasing diverse products with a captivating hero section, intuitive cart functionality, authentic testimonials, and seamless navigation, offering a superior online shopping experience",
    img:rp10
  },
 {
    title:"fanta",
    description:"The to-do app simplifies task management by enabling users to add, delete, and mark tasks as complete, ensuring efficient organization and productivity.",
    img:rp6
  },
 {
    title:"TO Do",
    description:"The to-do app simplifies task management by enabling users to add, delete, and mark tasks as complete, ensuring efficient organization and productivity.",
    img:rp2

  },
  {
    title:"Admin Panel",
    description:"The website serves as an efficient admin panel tailored for managing movies, allowing the administrator to perform CRUD operations seamlessly. From adding and editing to deleting movies, the platform ensures comprehensive control and organization.",
    img:rp12
  }
]

  return (
    <div className='relative'>
        
      <div className='w-screen min-h-screen  flex justify-centre bg-black items-center flex-col'>
          <h1 className='text-[#a5a3a3] text-left text-[1.2rem] capitalize mb-10 mr-[70%]'>and Many more</h1>
         <div className='w-[80%] min-h-[100vh]  '>
         
              
             <div className='  flex-col flex  gap-[8rem] py-10 relative'>
                  
                   {projects.map((project,index)=>
                    {
                     if(index==0 && index%2==0){
                       return  <div className='flex justify-center '>
                       <div><img src={project.img} className='w-[64%] rounded-xl' alt="" /></div>
                       <div>
                         <h1 className='text-white text-[2.7rem] font-bold'>{project.title}</h1>
                         <p className='text-[#959595] mt-[1.4rem] capitalize'>{project.description}</p>
                       </div>
                      </div>
                     }
                     else if(index%2==0){
                        return <div className='flex justify-center items-center'>
                       <div><img src={project.img} className='w-[55%] rounded-xl' alt="" /></div>
                       <div>
                         <h1 className='text-white  text-[2.8rem] font-bold'>{project.title}</h1>
                         <p className='text-[#d6d2d2] mt-[1.4rem] capitalize'>{project.description}</p>
                       </div>
                      </div>
                     }
                     else{
                     return   <div className='flex justify-center items-center '>
                         <div>
                         <h1 className='text-white text-[2.8rem] font-bold'>{project.title}</h1>
                         <p className='text-[#cecccc] mt-[1.4rem] capitalize'>{project.description}</p>
                       </div>
                         
                       <div><img src={project.img} className='w-[55%] ml-[30%] rounded-xl' alt="" /></div>
                        
                      </div>
                     }
                    }
                    
                    
                 )}
             </div>
         </div>
     </div>
    </div>
  )
}

export default Projects