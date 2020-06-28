import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
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
