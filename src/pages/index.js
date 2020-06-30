import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import StandardPage from '../components/layouts/StandardPage';
import HeroImage from '../components/media/HeroImage';
import TestimonialSlider from '../components/content/TestimonialSlider';
import { Button } from '../components/elements/Button';

const testimonials = [
	{
		id: 1,
		text:
			'Jesse does amazing work. She was able to give me the exact color hair I have been dreaming about for years.',
		person: 'Karen Rhodes',
	},
	{
		id: 2,
		text:
			'If you need extensions and have the means to travel to Jesse, you have to. She installed new extensions in my hair at a great price and provided professional quality work.',
		person: 'Shannon Rhodes',
	},
	{
		id: 3,
		text:
			'I have been going to Jesse for 15 years now and she has not once disappointed me. She is always at the top of her craft and goes above and beyond for me.',
		person: 'Lili Rhodes',
	},
];

const ButtonContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 0;
`;

const IndexPage = () => (
	<StandardPage>
		<SEO title="Home" />
		<HeroImage
			src="https://via.placeholder.com/1200x500"
			alt="Hero Image"
		/>
		<TestimonialSlider testimonials={testimonials} />
		<ButtonContainer>
			<Button>Book Appointment</Button>
			<Button>Book Education</Button>
		</ButtonContainer>
	</StandardPage>
);

export default IndexPage;
