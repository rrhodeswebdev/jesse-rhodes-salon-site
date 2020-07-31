import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	margin-bottom: 40px;
	width: 100%;
	border-bottom: 1px solid #e0ddd7;
	padding-bottom: 40px;
`;

const Title = styled.h2`
	font-size: 36px;
	font-weight: 300;
	text-align: center;
	margin: 0;
	padding-bottom: 20px;
`;

const SubTitle = styled.span`
	font-size: 18px;
	font-weight: 300;
	font-style: italic;
	text-align: center;
	padding-bottom: 20px;
`;

const Price = styled.p`
	font-size: 28px;
	font-weight: 300;
	text-align: center;
	margin: 0;
	padding: 10px;
`;

const Time = styled.p`
	font-size: 14px;
	font-weight: 300;
	text-align: center;
	margin: 0;
	padding: 5px;
`;

const Description = styled.p`
	font-size: 18px;
	font-weight: 300;
	text-align: center;
	margin: 0;
	padding: 10px;
`;

const ServiceInfoBlock = props => {
	const { title, price, time, description, subTitle } = props;
	return (
		<Container>
			<Title>{title}</Title>
			{subTitle && <SubTitle>{subTitle}</SubTitle>}
			<Price>{price}</Price>
			<Description>{description}</Description>
			{time && <Time>Est time: {time}</Time>}
		</Container>
	);
};

ServiceInfoBlock.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	price: PropTypes.string.isRequired,
	time: PropTypes.string,
	description: PropTypes.string.isRequired,
};

export default ServiceInfoBlock;
