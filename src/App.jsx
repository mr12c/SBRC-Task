import React, { useState } from 'react'
import LoadingPageAnimation from './AppComponents/loadingPageAnimation'
import HomePage from './AppComponents/HomePage'

import LocomotiveScroll from "locomotive-scroll";
import NavPage from './AppComponents/NavPage';
import ContactPage from './AppComponents/ContactPage';
import RecentProject from './AppComponents/Project/RecentProject';
import Projects from './AppComponents/Projects';
import Skills from './AppComponents/Skills';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  let [isNavPageVisible,setIsNavPageVisible] = useState(false);
  window.addEventListener('beforeunload', function (event) {
    
    window.scrollTo(0, 0);
});
  
  return (
 
    <div className='mainroot'>
        
       <NavPage isNavPageVisible={isNavPageVisible}></NavPage>
       <LoadingPageAnimation/>
       <HomePage setIsNavPageVisible= {setIsNavPageVisible} isNavPageVisible={isNavPageVisible}/>
       <RecentProject/>
       <div className='w-screen h-screen bg-black'></div>
       <Projects/>
       <Skills/>
       <ContactPage/>
       
    </div>
   
  )
}

export default App