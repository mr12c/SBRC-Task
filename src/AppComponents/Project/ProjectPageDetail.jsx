import React from 'react'
import Pro1 from '../../assets/pro1.png'

function ProjectPageDetail({img}) {
  return (
    <div >
        <div >
            <img src={img} alt="" className='w-[30rem] h-[18rem] rounded-lg' />
        </div>
    </div>
  )
}

export default ProjectPageDetail