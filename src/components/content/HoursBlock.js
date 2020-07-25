import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider } from '../elements/Divider';

const Header = styled.h2`
	font-size: 28px;
	font-weight: 300;
	margin-top: 0;
	margin-bottom: 10px;
	text-align: ${props => props.textAlign && props.textAlign};
`;

const Text = styled.p`
	font-size: 18px;
	font-weight: 300;
	text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
	line-height: 28px;
`;

const HoursBlock = props => {
	const { textAlign, dividerWidth, dividerMargin } = props;
	return (
		<React.Fragment>
			<Header textAlign={textAlign}>Hours</Header>
			<Divider
				width={dividerWidth}
				height="1px"
				bg="#e0ddd7"
				margin={dividerMargin}
			/>
			<Text textAlign={textAlign}>
				Wednesday 10-8
				<br />
				Thursday 10-8
				<br />
				Friday 9-4
				<br />
				Saturday 9-3
			</Text>
		</React.Fragment>
	);
};

HoursBlock.propTypes = {
	textAlign: PropTypes.string,
	dividerWidth: PropTypes.string,
	dividerMargin: PropTypes.string,
};

export default HoursBlock;
