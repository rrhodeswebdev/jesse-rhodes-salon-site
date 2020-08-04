import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Testimonial from './Testimonial';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	padding: 0 40px;
	max-width: 1200px;
	margin: 0 auto;
`;

const TestimonialSlider = props => {
	const { testimonials } = props;

	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		draggable: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		pauseOnHover: false,
	};

	return (
		<Container>
			<Slider {...settings}>
				{testimonials.map(testimonial => (
					<Testimonial
						key={testimonial.id}
						quote={testimonial.text}
						person={testimonial.person}
					/>
				))}
			</Slider>
		</Container>
	);
};

TestimonialSlider.propTypes = {
	testimonials: PropTypes.array.isRequired,
};

export default TestimonialSlider;
