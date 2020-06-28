import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
	padding: 40px;
`;

const TestimonialText = styled.p`
	font-size: 18px;
	font-weight: 300;
	text-align: center;
`;

const TestimonialTextWrapper = styled.div`
	outline: none;
`;

const TestimonialSlider = () => {
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
	};
	return (
		<Container>
			<Slider {...settings}>
				<TestimonialTextWrapper>
					<TestimonialText>Here is a testimonial</TestimonialText>
				</TestimonialTextWrapper>
				<TestimonialTextWrapper>
					<TestimonialText>
						Here is another testimonial
					</TestimonialText>
				</TestimonialTextWrapper>
			</Slider>
		</Container>
	);
};

export default TestimonialSlider;
