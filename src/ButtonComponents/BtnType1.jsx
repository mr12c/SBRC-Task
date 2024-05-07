import React, { useState } from 'react'
 

function BtnType1({content,csstyle}) {
    let [style,setStyle] = useState(false)
    let [style2,setStyle2] = useState(false)
    

    const handleOnClick = ()=>{
         setStyle(true);
             
         console.log(style)
    }
    const handleOnLeave=()=>{
       
        setStyle(false);
        console.log(style)
    }

    
  return (
    <div  className={`py-4 px-10 rounded-[4rem] btn-t1 ${csstyle}`} onMouseEnter={handleOnClick} onMouseLeave={handleOnLeave} >
        <a href="" className='text-white opacity-[1] '>{content}</a>
        <div className={`btn-t2-bf  h-[100%]  btnhover`}></div>
    </div>
  ) 
}

export default BtnType1;