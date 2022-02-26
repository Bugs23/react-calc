import React from 'react';
import { Container, Screen, Previous, Current } from './Styled';

export default function Calculator() {
	return (
		<Container>
			<Screen>
				<Previous></Previous>
				<Current></Current>
			</Screen>
		</Container>
	)
}