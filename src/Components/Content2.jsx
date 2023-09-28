import React from 'react'
import page_3_1 from '../assets/web_images/page_3_1.webp'
import page_3_2 from '../assets/web_images/page_3_2.webp'
import { useState,useEffect,useRef } from 'react'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
const Content2 = () => {

  const [read,setRead]=useState(true)
  const [read2,setRead2]=useState(true)

  const box1=useRef(null)
  const box2=useRef(null)
  const imgref1=useRef(null)
  const imgref2=useRef(null)

  useEffect(()=>{
   

    

    const img1=imgref1.current
    gsap.fromTo(img1,{
        opacity:0,
        
    },{
      
      opacity:1,
      scrollTrigger:{
      trigger:img1,
      toggleActions:"restart reverse none none",
      scrub:2
    },duration:2},)

    const img2=imgref2.current
    gsap.fromTo(img2,{
        opacity:0,
        
    },{
      
      opacity:1,
      scrollTrigger:{
      trigger:img2,
      toggleActions:"restart reverse none none",
      scrub:2
    },duration:1},)

    const el1=box1.current
    gsap.fromTo(el1,{
      x:-100,
      opacity:0
    },{
      x:10,
      opacity:1,
      scrollTrigger:{
        trigger:img1,
        toggleActions:"restart reverse none none",
        scrub:true
      },duration:2
    })

    const el2=box2.current
    gsap.fromTo(el2,{
      x:100,
      opacity:0
    },{
      x:10,
      opacity:1,
      scrollTrigger:{
        trigger:img2,
        toggleActions:"restart reverse none none",
        scrub:true
      },duration:2
    })
  },[])

  function toggle()
  {
    setRead(!read)
  }
  function toggle2()
  {
    setRead2(!read2)
  }
  return (
    <div className='min-h-screen bg-black pt-5 md:pt-0 leading-6 pb-10'>

      <div className='md:pt-10 mt-5 md:mt-0 md:flex items-center overflow-hidden w-[80%] md:w-[100%] mx-auto leading-6 mb-8 '>
      <img src={page_3_1} ref={imgref1} alt="" className='md:mx-20 rounded-lg md:order-last order-first border-cyan-400 border-2 mx-auto' width={300}/>
      <div ref={box1}  className="mt-10 md:mt-0 bg-gray-800  backdrop-lg md:mx-20 md:order-first order-last gk:h-[380px] md:py-0 md:w-[70%] w-[95%] lg:h-[350px]  rounded-lg ">
      <div className='md:text-[28px] text-[24px] font-Quantico text-cyan-400 ml-6 md:mt-6 md:pt-0 text-center gk:mt-8 pt-5'>What is Blockchain?</div>
            <div className="text-white font-pop   gk:mt-6 p-3 md:p-5 md:pl-8 px-6 pb-5">Blockchain is a valuable tool for many sectors to increase efficiency and security since it is a decentralized, unchangeable digital ledger that records transactions in a safe and transparent manner.<span onClick={toggle} className={`cursor-pointer ${read?"flex":"hidden"} text-cyan-400 md:hidden`} >Read more...</span><br/>
<span className={`${read?"hidden":"flex"} md:flex`}>Due to its decentralised design, which prevents any one organisation from controlling the network, blockchain is more secure and impervious to fraud or hacking.
The next version of the internet, termed Web3.0 or the decentralised web, is built on blockchain technology with the goal of enabling individuals to take ownership of their data and digital identities as well as facilitating trust and collaboration in a peer-to-peer network.<br/>
More transparency, privacy, security, and the potential for a more fair distribution of value are some of the potential advantages of blockchain and Web3.0.</span><div onClick={toggle} className={`cursor-pointer ${read&&"hidden"}  text-cyan-400`} >Read Less</div></div>
        </div>
         
      </div>
      <div className='md:pt-10 mt-10 md:flex items-center overflow-hidden mx-auto md:w-[100%] w-[80%]'>
        <img src={page_3_2} ref={imgref2} alt="" className='md:mx-20 rounded-lg mx-auto border-cyan-400 border-2' width={350}/>
        <div ref={box2} className="mt-4 bg-gray-800 backdrop-lg md:mx-20 h-[20%] md:py-0 md:w-[70%] gk:h-[310px] lg:h-[300px] w-[95%]  rounded-lg ">
        <div className='font-Quantico text-cyan-400 md:text-[28px] text-[24px] ml-6 md:mt-6 pt-3 text-center pt-5 '>What is Ethereum?</div>
            <div className="text-white font-pop p-4 lg:pt-6 gk:pt-5 md:p-5 px-5 md:pl-8">
Ethereum is a decentralized blockchain platform that enables the creation of smart contracts and decentralized applications (DApps). It uses its cryptocurrency, Ether, to fuel transactions<span onClick={toggle2} className={`cursor-pointer ${read2?"flex":"hidden"} text-cyan-400 md:hidden`} >Read more...</span><span className={`${read2?"hidden":"flex"} md:flex`}>and incentivize participants to secure the network. The platform is highly programmable, allowing developers to build and deploy their own DApps and tokens on top of the Ethereum blockchain. Ethereum uses a virtual machine called the Ethereum Virtual Machine (EVM) to execute smart contracts, which are self-executing contracts with the terms of the agreement between buyer and seller being directly written into code.</span>
<div onClick={toggle2} className={`cursor-pointer ${read2&&"hidden"}  text-cyan-400`} >Read Less</div>
</div>
        </div>
      </div>
     
    </div>
  )
}

export default Content2
