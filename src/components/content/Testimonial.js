import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TestimonialTextWrapper = styled.div`
	outline: none;
	max-width: 1200px;
	margin: 0 auto;
`;

const TestimonialText = styled.p`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
`;

const TestimonialPerson = styled.p`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
`;

const Testimonial = props => {
	const { quote, person } = props;
	return (
		<TestimonialTextWrapper>
			<TestimonialText>
				<em>{`"${quote}"`}</em>
			</TestimonialText>
			<TestimonialPerson>{`- ${person}`}</TestimonialPerson>
		</TestimonialTextWrapper>
	);
};

Testimonial.propTypes = {
	quote: PropTypes.string.isRequired,
	person: PropTypes.string.isRequired,
};

export default Testimonial;
