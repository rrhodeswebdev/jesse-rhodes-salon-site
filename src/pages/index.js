import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import StandardPage from '../components/layouts/StandardPage';
import HeroImage from '../components/media/HeroImage';
import TestimonialSlider from '../components/content/TestimonialSlider';
import { Button } from '../components/elements/Button';
import { Link } from 'gatsby';
import HomePageBannerImg from '../images/home-page-header.jpg';

const testimonials = [
	{
		id: 1,
		text:
			'When it was time to cut and style my hair, Jesse listened to what I wanted and needed. I walked out of the salon feeling confident with my chic new cut.',
	},
	{
		id: 2,
		text:
			'Jesse is an excellent colorist and hairdresser. I can always count on her to put a big old smile on my face after working her magic on me at the salon!',
	},
	{
		id: 3,
		text:
			'She is truly a fabulous stylist. She always knows what I want…even if I am not quite sure! My cut is always spot on. The color is always perfect. I always get many compliments!',
	},
];

const ButtonContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 0;

	@media (max-width: 600px) {
		flex-direction: column;

		Button {
			margin-bottom: 40px;
		}
	}
`;

const IndexPage = () => (
	<StandardPage>
		<SEO title="Home" />
		<HeroImage src={HomePageBannerImg} alt="Hero Image" />
		<TestimonialSlider testimonials={testimonials} />
		<ButtonContainer>
			<Link to="/booking/appointment">
				<Button>Appointments</Button>
			</Link>
			<Link to="/education/laced">
				<Button>Classes</Button>
			</Link>
		</ButtonContainer>
	</StandardPage>
);

export default IndexPage;
