import React,{useEffect,useRef} from "react";
import page_2 from '../assets/web_images/page_2.webp'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"
import './Content.css';
gsap.registerPlugin(ScrollTrigger)




const Content = () => {
  const box1=useRef(null)
  const box2=useRef(null)
  const imgref=useRef(null)

  useEffect(()=>{
    

    const img=imgref.current
    gsap.fromTo(img,{
        opacity:0,
      
    },{
      
      opacity:1,
      scrollTrigger:{
      trigger:img,
      toggleActions:"restart reverse none none",
      scrub:true
    },duration:1},)

    const el=box2.current
    gsap.fromTo(el,{
        x:-100,
        opacity:0
    },{
      x:10 ,
      opacity:1,
      scrollTrigger:{
      trigger:img,
      toggleActions:"restart reverse none none",
      scrub:true
    },duration:1},)

    const el2=box1.current
    gsap.fromTo(el2,{
        x:100,
        opacity:0
    },{
      x:10 ,
      opacity:1,
      scrollTrigger:{
      trigger:img,
      toggleActions:"restart reverse none none",
      scrub:true
    },duration:1},)
  },[])

  return (
    <div className=" w-full font-Quantico  overflow-hidden  min-h-screen bg-black">
      <h1 className='inline-block pl-4 font-caveat md:text-6xl md:ml-20 text-white text-4xl mb-10  md:mb-5'>Web 3.0</h1>
      <div  ref={imgref} className="mx-10">
      <img src={page_2} alt="" height={150} width={700} className="md:absolute md:mt-0  right-0 mb-12 md:mb-0"/>
      </div>
      <div className=" items-center ">
        <div ref={box2} className="bg-gray-800 backdrop-lg mx-auto w-[80%]  py-10 md:py-0 lg:w-[37%] gk:w-[40%]  md:h-[220px] md:mx-20 rounded-lg  mt-[5%]">
            <div className=" text-white font-pop leading-7 px-2 md:text-xl  md:py-8 px-5"><span className="heading  ">The objective of Sastra's Web3 Club is to inspire students and the local community to learn about, embrace, and use web3 technologies.</span> Our goal is to give people a place to learn, collaborate, and develop in the quickly changing world of decentralised technologies.
</div>
        </div>
        <div ref={box1} className="bg-gray-800 backdrop-lg  mx-auto w-[80%] py-10 md:py-0 md:w-[37%] md:h-[220x] md:mx-20 rounded-lg  mt-[5%] mb-30px">
            <div className="text-white font-pop leading-7 px-2 md:text-xl md:p-4 px-5"><span className="heading">Our mission is to enable everyone to actively participate in the decentralised web revolution.</span> We aim to establish a thriving community of innovators that tests the limits of web3 technology. In the future, we see decentralised technology enabling better transparency, security, and privacy across all spheres of existence.</div>
        </div>
        </div>
    </div>
  )
}

export default Content
