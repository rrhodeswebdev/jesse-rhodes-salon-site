import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';
import { Link } from 'gatsby';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import TestimonialSlider from '../../components/content/TestimonialSlider';
import ServiceCard from '../../components/content/ServiceCard';
import { Button } from '../../components/elements/Button';
import ColorService from '../../images/color-service.jpg';
import ExtensionService from '../../images/extension-service.jpg';
import StylingService from '../../images/styling-service.jpg';

const testimonials = [
	{
		id: 1,
		text:
			'I’ve been going to Jesse for almost 10 years and that’s a big deal for me since I usually only stayed with a hairstylist a time or two before switching to a new one. I’m grateful I found Jesse and I appreciate her styling talents that help me look my best.',
	},
	{
		id: 2,
		text:
			'For years I was always notorious for switching up stylists every year or so. I was on the hunt for another stylist when I came across Jesse and I’ve been a client now for a few years. I trust her advice, love her service she provides and refer everyone I can to her!',
	},
	{
		id: 3,
		text:
			'I came to Jesse three years ago after jumping from salon to salon and a really bad haircut. I just couldn’t find the right stylist that knew what she was doing with color. Jesse sees your vision and makes it look good on you. I’m in love with my hair every time I go to see her. I can’t recommend her enough.',
	},
];

const ButtonContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 0;
`;

const CardsContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 auto 40px;
	max-width: 1200px;
	padding: 0 40px;
`;

const Services = () => {
	return (
		<StandardPage>
			<SEO title="Services" />
			<SimplePageHeader text="Services" />
			<CardsContainer>
				<ServiceCard
					title="Styling"
					image={StylingService}
					link="/services/styling"
					text="See Pricing"
				/>
				<ServiceCard
					title="Color"
					image={ColorService}
					link="/services/color"
					text="See Pricing"
				/>
				<ServiceCard
					title="Extensions"
					image={ExtensionService}
					link="/services/extensions"
					text="See Pricing"
				/>
			</CardsContainer>
			<TestimonialSlider testimonials={testimonials} />
			<ButtonContainer>
				<Link to="/booking/appointment">
					<Button>Appointments</Button>
				</Link>
			</ButtonContainer>
		</StandardPage>
	);
};

export default Services;
