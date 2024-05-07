import React from 'react'

function TextScrooling() {
  return (
    <div className='TextScrool absolute top-[30%] flex gap-10 text-black tracking-light overflow-x-hidden givemefont  '  >
        <div className='lg:text-[12.2vw] sm:text-[16.7vw] smt'>Vishal Kumar</div>
        <div className='lg:text-[12.2vw] sm:text-[16.7vw] smt'>{"  Vishal Kumar"}</div>
        <div className='lg:text-[12.2vw] sm:text-[16.7vw] smt'>{"  Vishal Kumar"}</div>
        <div className='lg:text-[12.2vw] sm:text-[16.7vw] smt'>{"  Vishal Kumar"}</div>
        <div className='lg:text-[12.2vw] sm:text-[16.7vw] smt'>{"  Vishal Kumar"}</div>
    </div>
  )
}

export default TextScrooling