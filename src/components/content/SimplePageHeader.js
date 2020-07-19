import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider } from '../elements/Divider';

const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 40px;
`;

const PageHeader = styled.h1`
	display: flex;
	justify-content: center;
	font-size: 42px;
	font-weight: 300;
`;

const Image = styled.img`
	width: 100%;
	margin-top: 40px;
`;

const SimplePageHeader = props => {
	const { text, image, imageAlt } = props;
	return (
		<HeaderContainer>
			<PageHeader>{text}</PageHeader>
			<Divider width="100%" height="1px" />
			{image ? <Image src={image} alt={imageAlt} /> : null}
		</HeaderContainer>
	);
};

SimplePageHeader.propTypes = {
	text: PropTypes.string.isRequired,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
};

export default SimplePageHeader;
