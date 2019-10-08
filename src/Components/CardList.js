import React from 'react'
import Card from './Card'


// const {robots} =props;
function CardList({robots}){
	/*const cardComponent = robots.map((user,i) => {
		return (
		<Card 
		key={i} 
		id={user.id} 
		name={user.name} 
		email={user.email}
		/>
		);
	})

	and use {cardComponent} inside return <div> below*/

	return(
		<div>
			
			{
				robots.map((user,i) => {
					return (
						<Card 
						key={i} 
						id={user.id} 
						name={user.name} 
						email={user.email}
						/>
					);
				})
			}
	    </div>


		);
}

export default CardList;