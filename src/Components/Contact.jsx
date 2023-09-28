import React from 'react'
import instagram from '../assets/svgs/instagram.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import './MobCaro.css'

const Contact = () => {
  return (
    <div className=' font-Quantico bg-black text-white'>
        <h1 className='pl-4 font-caveat md:text-6xl text-4xl md:ml-20'>Contact</h1>


    <div className='md:flex md:justify-between'>
    <div className='hidden font-pop md:block w-[40%] mt-20 mx-auto text-[18px] leading-9'>
    <span>Thank you for visiting our website.<br/> We hope you have found the information you were looking for and enjoyed your browsing experience.

We value your feedback and suggestions, and we are always happy to hear from you.<br/> If you have any questions, comments, or concerns, please do not hesitate to contact us.<br/>



Thank you for your interest in our services. We look forward to hearing from you.<br/>

Best regards,<br/>
<span className='ml-32 text-[20px]'>Web 3.0</span></span>
      
    </div>

    <div className=' flex justify-center w-[85%] mx-auto py-6 mt-20 border-gray-400 rounded-lg border-4 md:w-[25%] md:mx-auto md:py-8'>

      <form action="https://formsubmit.co/web3clubsastra@gmail.com" method="POST">
        <div className='w-full mb-5' >
        <label className='mr-8 ' >Name:</label>
        <input className='border-gray-400 border-2 text-Jose px-2 text-black' type={Text} name='Name' placeholder='name' required></input>
        </div> 
        <div className='mb-5'>
        <label className='mr-9 font-neon'>Email:</label>
        <input className='border-gray-400 border-2 text-Jose px-2 text-black' type={'email'} name="Email" placeholder='name@email.com' required/>
        </div>
        <div>
        <div className='font-neon mb-4'>Message:</div>
        <textarea className='border-gray-400 border-2 w-64 h-32 text-Jose px-2 text-black' name="Message"  required></textarea>
        </div>
        <div className='flex justify-end mt-4'>
        <button className=' bg-white rounded-md w-12 text-black font-poppins transition-scale ease-in duration-300 hover:scale-150' type='submit'>Send</button>
        </div>
      </form>
     </div>
     </div>
     <div className='grid grid-rows-2 md:flex md:justify-between w-[70%] mx-auto md:mt-24'>
        <div className='md:mt-10 mt-5 md:order-first order-last max-sm:mx-auto text-center max-sm:w-[98%]'>All Rights Reserved at © Web 3.0</div>
        <div className='order-first md:order-last md:mt-0 mt-5'>
          <div className='w-[30%] md:w-[100%] mx-auto ps-4'>Social</div>
          <div className='flex md:w-[100%] w-[80%] mx-auto items-center justify-center'>
          
          <a href='https://instagram.com/web3sastra?igshid=YmMyMTA2M2Y='><img src={instagram} className='p-4' alt=''/></a>
          <a href='https://www.linkedin.com/company/web3-club-sastra/'><img src={linkedin} className='p-4' alt=''/></a>
          </div>
        </div>
     </div>
     </div>
  )
}

export default Contact
