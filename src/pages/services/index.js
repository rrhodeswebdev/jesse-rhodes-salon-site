import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';
import { Link, useStaticQuery, graphql } from 'gatsby';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import TestimonialSlider from '../../components/content/TestimonialSlider';
import ServiceCard from '../../components/content/ServiceCard';
import { Button } from '../../components/elements/Button';

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
	const {
		stylingImage,
		coloringImage,
		extensionsImage,
	} = useStaticQuery(graphql`
		query {
			stylingImage: contentfulAsset(
				contentful_id: { eq: "mMCqx2vkQ7khBp3tkgp5k" }
			) {
				file {
					url
				}
				title
			}
			coloringImage: contentfulAsset(
				contentful_id: { eq: "2NrrMzh8ALAA3urdT7VQxt" }
			) {
				file {
					url
				}
				title
			}
			extensionsImage: contentfulAsset(
				contentful_id: { eq: "63stIzaW0mAhKjuftOj9yI" }
			) {
				file {
					url
				}
				title
			}
		}
	`);

	return (
		<StandardPage>
			<SEO title="Services" />
			<SimplePageHeader text="Services" />
			<CardsContainer>
				<ServiceCard
					title="Styling"
					image={stylingImage.file.url}
					alt={stylingImage.title}
					link="/services/styling"
					text="See Pricing"
				/>
				<ServiceCard
					title="Color"
					image={coloringImage.file.url}
					alt={coloringImage.title}
					link="/services/color"
					text="See Pricing"
				/>
				<ServiceCard
					title="Extensions"
					image={extensionsImage.file.url}
					alt={extensionsImage.title}
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
