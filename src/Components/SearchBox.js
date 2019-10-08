import React from 'react';

/* pure function */

function SearchBox({searchfield, searchChange}){
	return(
		<div className="pa2">

			<input className="pa3 tc ba br4 ba--light-blue bg-light-green" type="search" placeholder="search robots" onChange={searchChange} />
		</div>

		);
}

export default SearchBox;