import React from 'react';
 const SearchBox =({searchfield, searchchange}) => {
return (
	<div className='pa2'>
<input className='pa3 ba '
 type='search'
  placeholder='search planets'
  onChange={searchchange}
  />
</div>


	);


 }
 export default SearchBox;