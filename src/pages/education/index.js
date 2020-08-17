import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import TestimonialSlider from '../../components/content/TestimonialSlider';
import ServiceCard from '../../components/content/ServiceCard';
import LacedEducationImg from '../../images/laced-education.jpg';
import MentorEducationImg from '../../images/mentor-education.jpg';

const testimonials = [
	{
		id: 1,
		text:
			'I met Jesse two years ago while interviewing at CC & Company for an apprenticeship program.  I thought this would be an incredible opportunity to be mentored at such an upscale salon.  Little did I know this was the start to an amazing journey.  After meeting Jesse, I instantly knew that God had us meet for a reason.  I had assisted her for about a year, and she inspires me everyday.  From shampooing, blowouts, and how to mix color properly, she has taught and encouraged me with great patience and I am overwhelmed with gratitude for her.  On days that I am insecure and my confidence is low, she believes in me and pushes me to achieve my potential.  I’m truly appreciative of her continued support.  Not only did she become my mentor but a friend, and someone I know I can always come to when I need something.  Jesse, you are sincerely the best!',
		person: 'Brooke Diorio',
	},
	{
		id: 2,
		text:
			'Jesse took me on as her assistant in my last semester of cosmetology school and man am I grateful!  I strongly believe not only being in the salon before graduating, but most importantly having such a good mentor is the key to success!  Watching and working alongside an experienced stylist like Jesse has been, I believe, one of the best things I’ve done for my career.  Jesse tends to your needs, informs to the best of her knowledge, and tries her hardest to help you succeed.  Overall I’m beyond grateful to have met and continue working alongside Jesse Rhodes',
		person: 'Ashley Irizarry',
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
					title="Salon Mentorship"
					image={MentorEducationImg}
					link="/education/mentor"
					text="More Information"
				/>
			</CardsContainer>
			<TestimonialSlider testimonials={testimonials} />
		</StandardPage>
	);
};

export default Education;
