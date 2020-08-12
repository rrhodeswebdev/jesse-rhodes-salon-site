import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
	margin-bottom: 40px;
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
	height: 75vh;
	object-fit: cover;
	object-position: center;
`;

const HeroImage = props => {
	return (
		<Container>
			<Image src={props.src} alt={props.alt} />
		</Container>
	);
};

HeroImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default HeroImage;
