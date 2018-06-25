import React from 'react';
import Counter from './Counter';

const Review = (props) => (
	<div>
		<br/>
		<b>{props.str}</b>
		<Counter stars={props.stars} />
		<br/>
	</div>
);

const Reviews = () => (
	<div>
		<Review str="Отлично!" stars="5" />		
		<Review str="Хорошо!" stars="4" />
		<Review str="Удовлетворительно" stars="3" />
		<Review str="Неудовлетворительно" stars="2" />
	</div>
);

export default Reviews;