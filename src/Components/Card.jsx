import React from 'react';
import './Card.css';

class Card extends React.Component
{
	render()
	{
		
		
		return(
			<div className='card justify-center text-black'>
				
				<div className='imgcont'>
				<img src={this.props.pic} className={`imgp ${this.props.name}`} alt="" />
				</div>
				<div className='font-pop mt-3 text-white text-center  max-sm:text-[14px]'>{this.props.name}</div>
				<div className='font-pop mt-3 text-white max-sm:text-[14px]'>{this.props.role}</div>
				
			</div>
			);
	}
}

export default Card;