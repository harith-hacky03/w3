// Import Swiper React components
import Card from "./Card";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel_.css';

// Import Swiper styles


// import required modules


class Carouselc extends React.Component {
    // const members=this.props.mem.map(member=>
    //     <SwiperSlide><Card name={member.name}/></SwiperSlide>
    //     );
    render(){
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (

  <div className="section__">
  
<h1 className='inline-block pl-4 font-Quantico md:text-4xl mt-8 text-white text-4xl mb-10  md:mb-5'>
  {this.props.teamname}
</h1>

    <Carousel 
      
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={2000}
      transitionDuration={500}>
      {this.props.team.map(mem=>{
      return(
        <Card  pic={mem.pic} name={mem.name} role={mem.role}/>
      )
      })}
    </Carousel>
  </div>
  );
    }
  
}
export default Carouselc;
