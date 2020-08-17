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
