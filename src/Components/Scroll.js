import React from 'react';

/* we can add styles in jsx using double square brackets */
function Scroll(props){

	return(
		<div style={{overflowY: 'scroll', border: '1px dashed blue', height: '500px'}}>
			{props.children}

		</div>

		); 

}

export default Scroll;