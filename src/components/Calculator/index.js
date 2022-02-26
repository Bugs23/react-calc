import React, { useState }  from 'react';
import { Container, Screen, Previous, Current, Button } from './Styled';

export default function Calculator() {

	const [previous, setPrevious] = useState('');
	const [current, setCurrent] = useState('');
	const [operation, setOperation] = useState('');

	const appendValue = (el) => {
		// Make the value being passed in equal to the element that's being clicked on 
		const value = el.target.getAttribute('data');

		// If the value is a period or there's already a period in the current value, don't add another period
		if(value === '.' && current.includes('.')) return
		setCurrent(current + value);
		
	}	

	const handleDelete = () => {
		setCurrent(String(current).slice(0, -1));
	}

	// Set all states back to empty strings when all clear is clicked
	const handleAllClear = (el) => {
		setCurrent('');
		setPrevious('');
		setOperation('');
	}

	const chooseOperation = (el) => {
		// If the current value's has nothing in it, do nothing
		if(current === '') return;

		/* If previous is not empty then create variable called value and 
		compute that value with the two numbers and come back with result 
		and set previous with that result*/
		if(previous !== '') {
			let value = compute();
			setPrevious(value);
		} else {
			setPrevious(current);
		}

		setCurrent('');
		setOperation(el.target.getAttribute('data'));
	}

	const equals = () => {
		let value = compute();
		if(value == undefined || value == null) return;

		setCurrent(value);
		setPrevious('');
		setOperation('');
	}

	const compute = () => {

	}

	return (
		<Container>
			<Screen>
				<Previous>{previous} {operation}</Previous>
				<Current>{current}</Current>
			</Screen>
			<Button onClick={handleAllClear} gridSpan={2}>AC</Button>
			<Button onClick={handleDelete} control>DEL</Button>
			<Button data={'÷'} onClick={chooseOperation} operation>÷</Button>
			<Button data={'7'} onClick={appendValue}>7</Button>
			<Button data={'8'} onClick={appendValue}>8</Button>
			<Button data={'9'} onClick={appendValue}>9</Button>
			<Button data={'x'} onClick={chooseOperation} operation>×</Button>
			<Button data={'4'} onClick={appendValue}>4</Button>
			<Button data={'5'} onClick={appendValue}>5</Button>
			<Button data={'6'} onClick={appendValue}>6</Button>
			<Button data={'+'} onClick={chooseOperation} operation>+</Button>
			<Button data={'1'} onClick={appendValue}>1</Button>
			<Button data={'2'} onClick={appendValue}>2</Button>
			<Button data={'3'} onClick={appendValue}>3</Button>
			<Button data={'-'} onClick={chooseOperation} operation>-</Button>
			<Button data={'.'} period onClick={appendValue}>.</Button>
			<Button data={'0'} onClick={appendValue}>0</Button>
			<Button gridSpan={2} onClick={equals} equals>=</Button>
		</Container>
	)
}