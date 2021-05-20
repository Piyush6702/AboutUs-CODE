import Gate from '../assets/gatePrepare.svg'
import coding from '../assets/coding.svg'
import development from '../assets/development.svg'
function WhatWeDo() {
    return (
      <div>
           <section className="WhatweDo">

<h2>
    What We Do
</h2>

 <div  className="cards-WhatweDo-div" >
  
   <div className="cards">
       <img src={development} className="cardsImage"alt="devSvg"></img>
       <div className="cardsTitle"> Development </div>
       <div className="cardsDesc">
          We build a team of developer who are passionate for their working skills and delivers
       </div>
   </div>
   <div className="cards">
   <img src={Gate} className="cardsImage" alt="devSvg"></img>
       <div className="cardsTitle">  Mentorship for Interviews</div>
       <div className="cardsDesc">
          We build a team of developer who are passionate for their working skills and delivers
       </div>
   </div>
   <div className="cards">
   <img src={coding} className="cardsImage"  alt="devSvg"></img>
       <div className="cardsTitle"> GATE preparation</div>
       <div className="cardsDesc">
          Provides help in circullum of GATE  preparations 
       </div>
   </div>
    <div className="cards">
   <img src={coding} className="cardsImage"  alt="devSvg"></img>
       <div className="cardsTitle"> Training & PLacements</div>
       <div className="cardsDesc">
          Provides help in circullum of GATE  preparations 
       </div>
   </div>
   <div className="cards">
   <img src={coding} className="cardsImage"  alt="devSvg"></img>
       <div className="cardsTitle"> Interships / Jobs</div>
       <div className="cardsDesc">
          Provides help in circullum of GATE  preparations 
       </div>
   </div>
</div>
</section>
      </div>
    );
  }
  
  export default WhatWeDo;
  