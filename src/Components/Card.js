import React from 'react';

/* function Card({id,name,email})*/

function Card(props)
{
	const {id, name, email} = props;

	return(
		
		<div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
			<img alt= "robot-photo" src={`https://robohash.org/${id}?size=200x150`} />
			<div className= ' '>
				<h3> {name}</h3>
				<p> {email} </p>
			</div>
		</div>


		);
}

export default Card;