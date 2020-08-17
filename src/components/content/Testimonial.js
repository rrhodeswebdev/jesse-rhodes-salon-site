import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TestimonialTextWrapper = styled.div`
	outline: none;
	max-width: 1200px;
	margin: 0 auto 40px;
	padding: 0 40px;
`;

const TestimonialText = styled.p`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
`;

const Testimonial = props => {
	const { quote } = props;
	return (
		<TestimonialTextWrapper>
			<TestimonialText>
				<em>{`"${quote}"`}</em>
			</TestimonialText>
		</TestimonialTextWrapper>
	);
};

Testimonial.propTypes = {
	quote: PropTypes.string.isRequired,
};

export default Testimonial;
