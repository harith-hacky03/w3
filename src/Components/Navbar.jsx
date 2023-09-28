import React,{useState} from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../assets/web_images/logo.webp'



const Navbar = () => {
    const [nav,setNav]=useState(false)
    const NavTog=()=>{
        setNav(!nav)
    }

    
  return (
    <div>
      <div class="flex justify-between md:px-24  px-5 items-center font-Quantico text-white pb-8 pt-6 bg-transparent backdrop-blur-lg">
        <div class=" font-semibold ">
          <img src={logo} className='absolute -top-[60px] -left-10 md:left-1 md:-top-12 w-40 '  alt=''/>
        </div>
        <div class="text-paleGray font-Jose hidden md:flex">
            <a href='#About' class="mr-20 cursor-pointer transition-scale ease-in duration-300 hover:scale-150 text-white font-Quantico">About</a>
            <a href='#Contact' class="mr-20 cursor-pointer transition-scale ease-in duration-300 hover:scale-150 text-white font-Quantico">Contact</a>
            <a href='#Members' class="mr-5 cursor-pointer transition-scale ease-in duration-300 hover:scale-150 text-white font-Quantico">Members</a>
            
        </div>
        
        <div onClick={NavTog} className='md:hidden  cursor-pointer'>
            {
                nav?< AiOutlineClose  size={20}/>:< AiOutlineBars  size={20}/>
            }
            
        </div>
    </div>
    {nav&&
    <div class="font-Quantico text-white absolute pl-8 right-0 w-[100%] top-20 bg-transparent backdrop-blur-lg min-h-screen">
      <ul className='w-[25%] mx-auto'>
        <div className='mt-20'>
        <a href='#About' onClick={NavTog} class="pb-10 ">About</a>
        </div>
        <div className='mt-10'>
        <a href='#Contact' onClick={NavTog} class="pb-10">Contact</a>
        </div>
        <div className='mt-10'>
        <a href='#Members' onClick={NavTog} class="pb-10">Members</a>
        </div>
      </ul>
    </div>
}
    </div>

  )
}

export default Navbar
