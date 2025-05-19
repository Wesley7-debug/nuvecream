"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";


const Hero = () => {
  //end: `${window.innerHeight }%` ,
  const productref = useRef(null);
  const abTl = useRef();
  const tl = useRef();
  const almostTl = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const aloeref = useRef(null);
  useEffect(() => {
    gsap.set(".squalene",{x:200, y:-100, opacity:0
    });
    gsap.set(".aloevera",{x:20, y:-300, opacity:0
    });
    gsap.set(".vitamin",{x:100, y:100, opacity:0
    });
    gsap.set(".shea",{x:-100, y:200, opacity:0
    });
    gsap.set(".otter",{x:-150, opacity:0
    });
    gsap.set(aloeref.current,{yPercent:100});
    gsap.set(productref.current,{yPercent:200, opacity:0})
    gsap.set(".text",{opacity:0.2})
    gsap.to(aloeref.current,{ yPercent:0, duration:2, ease:"power4.inOut"})
 
  
tl.current = gsap.timeline({
scrollTrigger:{
  trigger:".home",
  start:"top top",
  end:"+=50%",
  scrub:2,
  pin:true,
  anticipatePin:1,
}
})

tl.current
.to(aloeref.current,{
  yPercent:500,
  opacity:0,
  ease:"power4.inOut",

},"<")
.to(".text",{
  opacity:1,
  ease:"back.inOut"

},"<")
.to(productref.current,{
  yPercent:0,
  duration:0.5,
  opacity:1,
  ease:"power4.inOut"
},"<")
  

 

       

  }, []);

  useEffect(() => {
   abTl.current = gsap.timeline({
      scrollTrigger:{
        trigger:".about",
        start:"top 20%",
        end:"top 90%",
        scrub:1,

     
  }});
    
   
    
   
      gsap.to(productref.current,{scale:0.8, duration:1,  ease:"power4.inOut",scrollTrigger:{trigger:".about",
        start:"top 50%",
        end:"top 60%",
        scrub:1,}})
        abTl.current
  
      
     .to(productref.current,{yPercent:-10,  ease:"power4.inOut"},"<")
      .to(".squalene",{x:0, y:0, opacity:1, duration: 1, ease:"circ.inOut"
      },"+=0.1")
      .to(".aloevera",{x:0, y:0, opacity:1, duration: 1, ease:"circ.inOut"
      },"+=0.1")
      .to(".vitamin",{x:0, y:0, opacity:1,duration: 1 , ease:"circ.inOut" },"+=0.1")

      .to(".shea",{x:0, y:0, opacity:1, duration:1, ease:"circ.inOut"
      },"+=0.1")
     .to(".otter",{x:0, opacity:1, duration: 0.5, ease:"circ.inOut"
      },"+=0.1")
    
  

  }, []);
  useEffect(() => {

const mm = gsap.matchMedia();


mm.add("(max-width: 900px)",()=>{
  gsap.from(".greenelem",{yPercent:10, rotate:20, duration:1, opacity:0,
    scrollTrigger:{
    trigger:".almost",
    start:"top 60%",
    end:"+=5%",
    scrub:1,
    markers:true,
   } })
  almostTl.current = gsap.timeline({
    scrollTrigger:{
     trigger:".almost",
      start:"top 60%",
      end:"+=1%",
      scrub:1,
     }});

      almostTl.current
      .to(".squalene",{x:200, y:-100, opacity:0
      })

      .to(".aloevera",{x:20, y:-300, opacity:0
      })
    
      .to(".vitamin",{x:100, y:100, opacity:0
      })
   
      .to(".shea",{x:-100, y:200, opacity:0
      })
    
      .to(".otter",{x:-150, opacity:0
      })

.to(productref.current,{xPercent:30 , yPercent:-10, rotate:-15, duration:1, delay:0.5 , },"+=0.05");

})
mm.add("(min-width: 900px)",()=>{
  gsap.from(".greenelem",{yPercent:10, rotate:20, duration:1, opacity:0,
    scrollTrigger:{
    trigger:".almost",
    start:"top 50%",
    end:"+=5%",
    scrub:1,

   } })
  almostTl.current = gsap.timeline({
    scrollTrigger:{
     trigger:".almost",
      start:"top 75%",
      end:"+=1%",
      scrub:1,
     }});

      almostTl.current
      .to(".squalene",{x:200, y:-100, opacity:0
      })

      .to(".aloevera",{x:20, y:-300, opacity:0
      })
    
      .to(".vitamin",{x:100, y:100, opacity:0
      })
   
      .to(".shea",{x:-100, y:200, opacity:0
      })
    
      .to(".otter",{x:-150, opacity:0
      })

.to(productref.current,{xPercent:50 , yPercent:-10, rotate:-15, duration:1, delay:0.5 , },"+=0.05");

})
    

  }, []);
  useEffect(() => {

    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)",()=>{
      const footTl = gsap.timeline({
        scrollTrigger:{
          trigger:".footer",
          start:"top 30%",
          end:"top 90%",
          scrub:1,
        
       
        }});
      footTl.to(productref.current,{scale:1,xPercent:0,rotate:0, yPercent:15 });
  
    })
   
      const footTl = gsap.timeline({
        scrollTrigger:{
          trigger:".footer",
          start:"top 10%",
          end:"top 90%",
          scrub:1,
        
       
        }});
      footTl.to(productref.current,{scale:1,xPercent:0,rotate:0, yPercent:30 });
  
   
    

  }, []); 
  
  
  
  return (
  <>
    <div ref={productref} className='pointer-events-none fixed left-[17%] lg:left-[30%] top-1/2 lg:top-[20%] z-20 w-[250px] lg:w-[600px] h-fit'>
      <Image className='w-full h-full object-cover' width={400} height={300} alt='product-img' src='/images/product.png'/>
    </div>
    <section  className='home w-screen h-screen bg-bg overflow-hidden sticky '>
<div className="text  absolute top-1/2 left-1/2 -translate-1/2 text-[7rem] lg:text-[19rem] text-lime-400 font-cinzel">
  <h1>NUVE</h1>
</div>
<div ref={aloeref} className="absolute bottom-[-5%] w-full h-full z-10">
  <img className="w-full h-full object-cover" src="/images/aloebg.png" alt="" />
</div>
 </section>
 <section className='sticky top-0 about w-screen h-screen bg-bg  overflow-hidden text-bold'>

<div className=' aloevera absolute bottom-9  left-1/2  -translate-x-1/2  l  p-2  flex flex-col justify-center items-center'>
  <div className='lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] p-4 border-4 rounded-full'>
  <Image className='w-full h-full object-cover' width={100} height={100} src='/images/aloevera.jpg' alt='aloeveraextract'/>
  </div>
  <div className='flex flex-col justify-center items-center text-center p-2'>
  <h2 className='text-xl lg:text-2xl font-semibold '>AloeVera </h2>
  <p className='font-bold  text-sm lg:text-lg p-2 w-[15ch] lg:w-[30ch]'> Hydrating skin care, avoiding issues    </p>
  </div>
</div>
<div className='squalene absolute top-[40%] lg:top-1/2 left-[15%] -translate-x-1/2  lg:p-2  flex flex-col justify-center items-center'>
  <div className='lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] p-4 border-4 rounded-full'>
  <Image className='w-full h-full object-cover rounded-full' width={100} height={100} src='/images/sqa.jpg' alt='aloeveraextract'/>
  </div>
  <div className='flex flex-col justify-center items-center text-center p-2'>
  <h2 className='text-xl lg:text-2xl font-semibold '>Squalane</h2>
  <p className='font-bold  text-sm lg:text-lg p-2 w-[15ch] lg:w-[30ch]'> Lightweight moisturizer for a healthy skin</p>
  </div>
</div>
<div className='vitamin absolute top-[10%] left-[20%] -translate-x-1/2  lg:p-2  flex flex-col justify-center items-center'>
  <div className='lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] p-4 border-4 rounded-full'>
  <Image className='w-full h-full object-cover' width={100} height={100} src='/images/vitamine.png' alt='aloeveraextract'/>
  </div>
  <div className='flex flex-col justify-center items-center text-center p-2'>
  <h2 className='text-xl lg:text-2xl font-semibold '>Vitamin E</h2>
  <p className='font-bold  text-sm lg:text-lg p-2 w-[15ch] lg:w-[30ch]'> Protective antioxidant, safe for skin  </p>
  </div>
</div>
<div className='shea absolute top-[10%] right-[0%] lg:right-[15%]   lg:p-2  flex flex-col justify-center items-center'>
  <div className='lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] p-4 border-4 rounded-full'>
  <Image className='w-full h-full object-cover ' width={100} height={100} src='/images/hazels.jpg' alt='aloeveraextract'/>
  </div>
  <div className='flex flex-col justify-center items-center text-center p-2'>
  <h2 className='text-xl lg:text-2xl font-semibold '>Shea Butter</h2>
  <p className='font-bold  text-sm lg:text-lg p-2 w-[15ch] lg:w-[30ch]'> Nourishing waterproof blend  </p>
  </div>
</div>
<div className='otter mt-5 absolute top-[40%] right-[0%] lg:right-[5%]  lg:p-2  flex flex-col justify-center items-center'>
  <div className='lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] p-4 border-4 rounded-full'>
  <Image className='w-full h-full object-cover' width={100} height={100} src='/images/tea.png' alt='aloeveraextract'/>
  </div>
  <div className='flex flex-col justify-center items-center text-center p-2'>
  <h2 className='text-xl lg:text-2xl font-semibold '>Green Tea</h2>
  <p className='font-bold  text-sm lg:text-lg p-2 w-[15ch] lg:w-[30ch]'>antioxidant reducing inflammation  </p>
  </div>
</div>

   </section>
       <section className=" almost w-full h-[110vh]  bg-amber-100  text-bold p-4">
       <div className="flex relative w-full h-full bg-amber-100 bg- flex-col lg:flex-row-reverse justify-center items-center">
     <div>
     
     </div>
     <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center relative p-3">
   
     <div className=" greenelem absolute left-[30%] lg:left-0 w-[300px] lg:w-[700px] rounded-full h-full lg:h-[700px] border bg-green-900">
    <img className='rotate-y-200 -rotate-x-50 lg:scale-185 scale-140 w-full h-full object-cover' src="/images/hand.png" alt="" />
     </div>
   
     </div>
     <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col lg:justify-center lg:items-center p-3'>
   <div className='mb-4 lg:w-[700px] w-full h-fit flex flex-row justify-center items-center '>
       <div className='lg:w-[150px] w-[80px] h-full lg:h-[150px]  border-4 rounded-full'>
       <Image className='w-full h-full object-cover rounded-full' width={100} height={100} src='/images/hydration.jpg' alt='aloeveraextract'/>
       </div>
       <div className='flex flex-col text-start p-2'>
       <h2 className='text-xl lg:text-2xl font-semibold '>Deep Hydration</h2>
       <p className='font-bold  text-sm lg:text-xl p-2 w-fit '> Moisture-boosting blend with antioxidants for plump, dewy skin   </p>
       </div>
       
   </div>
   <div className='mb-5 lg:w-[700px] w-full h-fit flex flex-row-reverse justify-center items-center '>
       <div className='lg:w-[150px] w-[80px] h-full lg:h-[150px]  border-4 rounded-full'>
       <Image className='w-full h-full object-cover rounded-full' width={100} height={100} src='/images/female1.jpg' alt='aloeveraextract'/>
       </div>
       <div className='flex flex-col text-end px-2'>
       <h2 className='text-xl lg:text-2xl font-semibold '>Soothes Irritated Skin </h2>
       <p className='font-bold  text-sm lg:text-xl p-2 lg:w-[40ch]'> Calms redness and strengthens skin's barrier with gentle, restorative ingredients.   </p>
       </div>
       
   </div>
   <div className=' mb-5 lg:w-[700px] w-full h-fit flex flex-row justify-center items-center'>
       <div className='lg:w-[150px] w-[80px] h-full lg:h-[150px] p-4 border-4 rounded-full'>
       <Image className='w-full h-full object-cover rounded-full' width={200} height={200} src='/images/antioxidant.png' alt='aloeveraextract'/>
       </div>
       <div className='flex flex-col  text-start p-2'>
       <h2 className='text-xl lg:text-2xl font-bold '>Rich in Antioxidants </h2>
       <p className='font-bold  text-sm lg:text-xl p-2 lg:w-[40ch]'> Vitamin-enriched to neutralize free radicals and maintain healthy skin.      </p>
       </div>
       
   </div>
   <div className=' lg:w-[700px] w-full h-fit flex flex-row-reverse justify-center items-center'>
       <div className='lg:w-[150px] w-[80px] h-full lg:h-[150px]  border-7 rounded-full'>
       <Image className='w-full h-full object-cover rounded-full' width={100} height={100} src='/images/female2.jpg' alt='aloeveraextract'/>
       </div>
       <div className='flex flex-col  text-end p-2'>
       <h2 className='text-xl lg:text-2xl font-semibold '>Promotes Skin Healing</h2>
       <p className='font-bold  text-sm lg:text-xl p-2 lg:w-[40ch] '> Anti-inflammatory formula repairs damage while protecting from environmental stressors    </p>
       </div>
       
   </div>
   </div>
       </div>
      
   
      </section>
      <footer className='mt-10 footer w-screen h-screen relative overflow-hidden text-lime-700'>
<div className='absolute top-0 left-0 w-full h-full overflow-hidden  '>
<img className='w-full h-full object-cover' src="/images/footerbg.png" alt="" />

</div>
<div className='relative flex flex-col justify-center items-center z-10  text-center mt-10'>
    <h1 className='text-4xl lg:text-7xl'>GET YOUR <br />NUVE SKIN CARE</h1>
    <button className='mt-5 border rounded-xl px-4 py-4 font-poppins bg-green-800 text-2xl lg:text-3xl
     text-white uppercase'>Add to cart</button>
</div>
    </footer>
 </>

  );

}

export default Hero