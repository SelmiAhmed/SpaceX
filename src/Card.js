import React from 'react';

const Card=(props)=>{
return (
<div className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow50' style={{width:'400px',height:'500px',position:'realtive',display:'inline-grid'}}>
<div className style={{color:'white'}}>
<img alt="planets" src={props.image} style={{width:'200px',height:'200px'}}/>
<h1>{props.name}</h1>
<p>{props.description}</p>
<h2>Diametre: {props.diametre}</h2>
<h2>Volume: {props.Volume}</h2>
<h2>Mass: {props.Mass}</h2>

</div>


</div>



	);



}







export default Card;