import React from 'react'
 

function NavPage({isNavPageVisible}) {

  return (
    <div className={`h-[130vh] bg-[#1C1D20]  navPageAnime  right-[0] fixed top-[-10%] z-[85]   ${isNavPageVisible? "w-[40vw]  " : " w-[0vw] giveradical"}`}>
        <div className='w-full h-full py-40 px-20'>
            <div>
                <h1 className='text-[#ffffffaa] capitalize mb-2 '>navigation</h1>
                <hr className='bg-[#ffffffb6]' />
            </div>
            <ul className='flex flex-col text-[4vw]  text-[white] capitalize mt-10'>
                <li className=' gmt px-4 group'><a href="" className=' group-hover:ml-[10%] flex gmt group items-center hover:text-[#4A4AEC] gap-4'><span className='w-2 h-2 overflow-hidden rounded-full bg-[#979696] group-hover:bg-[white]'>p</span>Work</a></li>
                <li className='gmt group  px-4'><a href=""   className='flex group-hover:ml-[10%] gmt group  items-center  hover:text-[#4A4AEC] gap-4'><span className='w-2 h-2 rounded-full  overflow-hidden bg-[#b7b6b6] group-hover:bg-white'>p</span>Abouts</a></li>
                <li className='group  px-4'><a href=""  className='flex  group-hover:ml-[10%] group  gmt items-center  hover:text-[#4A4AEC] gap-4'> <span className='w-2 h-2 rounded-full overflow-hidden bg-[#a4a4a4] groutp-hover:bg-white'>p </span>Projects</a></li>
                <li className=' group px-4'><a href=""  className='flex   group-hover:ml-[10%] items-center gmt   hover:text-[#4A4AEC] gap-4'> <span className='w-2 h-2 rounded-full overflow-hidden bg-white'>p</span>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default  NavPage;