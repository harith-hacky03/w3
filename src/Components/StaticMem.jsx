import React, { useRef } from 'react'
import Card from './Card'
import Shreyas from '../assets/team_members/Shreyas.webp'
import Siddharath from '../assets/team_members/Siddharath.webp'
import Gagan from '../assets/team_members/Gagan.webp'
import Peshwar from '../assets/team_members/Peshwar.webp'
import Aswath from '../assets/team_members/Ashwath.webp'



const StaticMem = () => {


    const MainMem=[
        {name:"Shreyas Ravishankar",role:"Web3 Lead",pic:Shreyas},
        {name:"Arman Aurobindo",role:"Web3 Member",pic:""},
        {name:"Gagan Khatri",role:"Web2 Lead",pic:Gagan},
        {name:"	Ashwath Krishna K",role:"",pic:Aswath},
        {name:"	Peshwar Rajesh",role:"Graphics Team Lead",pic:Peshwar},
        {name:"	Siddhartha Madhav Gollapinni",role:"Web3 Member",pic:Siddharath}
    ]

  return (
    <div className='text-white'>
        <div className='inline-block pl-4 font-caveat md:text-6xl md:ml-20 text-white text-4xl mb-10  md:mb-20 '>Team Members</div>
        <div  className='grid md:gap-20 md:grid-cols-3 grid-rows-1 gap-10 '>
           {MainMem.map(member=><Card domain={member.domain} role={member.role} name={member.name} pic={member.pic}/>)}
        </div>
    
    </div>
  )
}

export default StaticMem
