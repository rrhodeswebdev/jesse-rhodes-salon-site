import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import TestimonialSlider from '../../components/content/TestimonialSlider';
import ServiceCard from '../../components/content/ServiceCard';
import LacedEducationImg from '../../images/laced-education.jpg';
import AssistantEducationImg from '../../images/assistant-education.jpg';

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
	return (
		<StandardPage>
			<SEO title="Education" />
			<SimplePageHeader text="Education" />
			<CardsContainer>
				<ServiceCard
					title="Laced Hair Academy"
					image={LacedEducationImg}
					link="/education/laced"
					text="More Information"
				/>
				<ServiceCard
					title="Assistant Program"
					image={AssistantEducationImg}
					link="/education/assistant"
					text="More Information"
				/>
			</CardsContainer>
			<TestimonialSlider testimonials={testimonials} />
		</StandardPage>
	);
};

export default Education;
