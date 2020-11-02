import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import TestimonialSlider from '../../components/content/TestimonialSlider';
import ServiceCard from '../../components/content/ServiceCard';

const testimonials = [
	{
		id: 1,
		text:
			'I assisted Jesse for about a year, and she inspires me everyday. She has taught and encouraged me with great patience, and I am overwhelmed with gratitude for her. I’m truly appreciative of her continued support!',
	},
	{
		id: 2,
		text:
			'Watching and working alongside Jesse has been one of the best things I’ve done for my career. Jesse tends to your needs, informs to the best of her knowledge, and helps you succeed. Overall, I am beyond grateful to have met and continue working with Jesse.',
	},
];

const CardsContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 auto 40px;
	max-width: 1200px;
	padding: 0 40px;
`;

const Education = () => {
	const { assistantImage, lacedEducationImage } = useStaticQuery(graphql`
		query {
			assistantImage: contentfulAsset(
				contentful_id: { eq: "4WXPA0uwoVm0PqobtXhBo8" }
			) {
				file {
					url
				}
				title
			}
			lacedEducationImage: contentfulAsset(
				contentful_id: { eq: "6iZXtbguNN8qUvI5JTepYu" }
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
			<SEO title="Education" />
			<SimplePageHeader text="Education" />
			<CardsContainer>
				<ServiceCard
					title="Laced Hair Academy"
					image={lacedEducationImage.file.url}
					alt={lacedEducationImage.title}
					link="/education/laced"
					text="More Information"
				/>
				<ServiceCard
					title="Assistant Program"
					image={assistantImage.file.url}
					alt={assistantImage.title}
					link="/education/assistant"
					text="More Information"
				/>
			</CardsContainer>
			<TestimonialSlider testimonials={testimonials} />
		</StandardPage>
	);
};

export default Education;
