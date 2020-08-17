import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Button } from '../elements/Button';

const Card = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

const ImgContainer = styled.div`
	position: relative;
	margin-bottom: 40px;
`;

const CardImg = styled.img`
	position: relative;
	width: 100%;
`;

const ImgOffsetBorder = styled.div`
	position: absolute;
	border: 3px solid #e0ddd7;
	width: 100%;
	height: 100%;
	top: 14px;
	left: 16px;
`;

const CardTitle = styled.span`
	text-align: center;
	padding: 10px 0;
	margin-bottom: 20px;
	font-size: 28px;
	font-weight: 300;
	letter-spacing: 1px;
`;

const ServiceCard = props => {
	const { title, image, link, text } = props;
	return (
		<Card>
			<CardTitle>{title}</CardTitle>
			<ImgContainer>
				<ImgOffsetBorder />
				<CardImg src={image} />
			</ImgContainer>
			<Link to={link}>
				<Button
					margin="0"
					width="106%"
					border="1px solid #b18e72"
					bgColor="transparent"
					color="#b18e72"
					hoverColor="#ffffff"
				>
					{text}
				</Button>
			</Link>
		</Card>
	);
};

ServiceCard.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default ServiceCard;
