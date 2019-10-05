import React from 'react';
import Card from './Card';
import {planets} from './planets';

const CardList=()=>{

return(
<div>
	<Card id={planets[0].id} name={planets[0].name} diametre ={planets[0].diametre} image={planets[0].image} Volume={planets[0].Volume} Mass={planets[0].Mass} description={planets[0].description}/>
	<Card id={planets[1].id} name={planets[1].name} diametre ={planets[1].diametre} image={planets[1].image} Volume={planets[1].Volume} Mass={planets[1].Mass} description={planets[1].description}/>
	<Card id={planets[2].id} name={planets[2].name} diametre ={planets[2].diametre} image={planets[2].image} Volume={planets[2].Volume} Mass={planets[2].Mass} description={planets[2].description}/>
	<Card id={planets[3].id} name={planets[3].name} diametre ={planets[3].diametre} image={planets[3].image} Volume={planets[3].Volume} Mass={planets[3].Mass} description={planets[3].description}/>
	<Card id={planets[4].id} name={planets[4].name} diametre ={planets[4].diametre} image={planets[4].image} Volume={planets[4].Volume} Mass={planets[4].Mass} description={planets[4].description}/>
	<Card id={planets[5].id} name={planets[5].name} diametre ={planets[5].diametre} image={planets[5].image} Volume={planets[5].Volume} Mass={planets[5].Mass} description={planets[5].description}/>
	<Card id={planets[6].id} name={planets[6].name} diametre ={planets[6].diametre} image={planets[6].image} Volume={planets[6].Volume} Mass={planets[6].Mass} description={planets[6].description}/>
	<Card id={planets[7].id} name={planets[7].name} diametre ={planets[7].diametre} image={planets[7].image} Volume={planets[7].Volume} Mass={planets[7].Mass} description={planets[7].description}/>
	<Card id={planets[8].id} name={planets[8].name} diametre ={planets[8].diametre} image={planets[8].image} Volume={planets[8].Volume} Mass={planets[8].Mass} description={planets[8].description}/>
	<Card id={planets[9].id} name={planets[9].name} diametre ={planets[9].diametre} image={planets[9].image} Volume={planets[9].Volume} Mass={planets[9].Mass} description={planets[9].description}/>
	<Card id={planets[10].id} name={planets[10].name} diametre ={planets[10].diametre} image={planets[10].image} Volume={planets[10].Volume} Mass={planets[10].Mass} description={planets[10].description}/>
	<Card id={planets[11].id} name={planets[11].name} diametre ={planets[11].diametre} image={planets[11].image} Volume={planets[11].Volume} Mass={planets[11].Mass} description={planets[11].description}/>


</div>




	);


}


export default CardList;