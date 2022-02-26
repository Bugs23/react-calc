import React, { useState }  from 'react';
import { Container, Screen, Previous, Current, Button } from './Styled';

export default function Calculator() {

	const [current, setCurrent] = useState('');

	const appendValue = (el) => {
		// Make the value being passed in equal to the element that's being clicked on 
		const value = el.target.getAttribute('data');

		// If the value is a period or there's already a period in the current value, don't add another period
		if(value === '.' && current.includes('.')) return
		setCurrent(current + value);
		
	}	

	return (
		<Container>
			<Screen>
				<Previous></Previous>
				<Current>{current}</Current>
			</Screen>
			<Button gridSpan={2}>AC</Button>
			<Button control>DEL</Button>
			<Button operation>÷</Button>
			<Button data={'7'} onClick={appendValue}>7</Button>
			<Button data={'8'} onClick={appendValue}>8</Button>
			<Button data={'9'} onClick={appendValue}>9</Button>
			<Button operation>×</Button>
			<Button data={'4'} onClick={appendValue}>4</Button>
			<Button data={'5'} onClick={appendValue}>5</Button>
			<Button data={'6'} onClick={appendValue}>6</Button>
			<Button operation>+</Button>
			<Button data={'1'} onClick={appendValue}>1</Button>
			<Button data={'2'} onClick={appendValue}>2</Button>
			<Button data={'3'} onClick={appendValue}>3</Button>
			<Button operation>-</Button>
			<Button data={'.'} period onClick={appendValue}>.</Button>
			<Button data={'0'} onClick={appendValue}>0</Button>
			<Button gridSpan={2}>=</Button>
		</Container>
	)
}