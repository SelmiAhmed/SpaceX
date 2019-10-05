import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CardList from './CardList';
import 'tachyons';
import {planets} from './planets';
import SearchBox from './SearchBox';

const p=(props) =>{

return (
<div className='tc ' >
	<h1 className='f1' >SpaceX</h1>
	<SearchBox/>
	<CardList/></div>
	);



};
export default p;