import React from 'react';
import styled from 'styled-components';
import StandardPage from '../../components/layouts/StandardPage';
import SEO from '../../components/seo';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import ClassCard from '../../components/content/ClassCard';
import { Button } from '../../components/elements/Button';

const TextGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 40px;
	max-width: 1200px;
	margin: 0 auto 40px;
`;

const Text = styled.p`
	font-size: 18px;
	font-weight: 300;
`;

const ImageGroup = styled.div`
	display: flex;
	margin: 0 auto 40px;
	justify-content: space-between;
	max-width: 1200px;
	padding: 0 40px;
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
	max-width: 300px;
	height: auto;
`;

const H2 = styled.h2`
	font-size: 36px;
	font-weight: 300;
	text-align: center;
	margin: 40px 0;
`;

const ClassCardGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto 40px;
	padding: 0 40px;
	max-width: 1200px;
	width: 100%;
`;

const NoClassGroup = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const NoClassText = styled.span`
	font-size: 18px;
	font-weight: 300;
	padding: 0 40px;
	margin-bottom: 40px;
`;

const A = styled.a`
	text-align: center;
`;

const classes = [
	{
		id: 1,
		date: 'December 7, 2020',
		time: '9:30 AM - 5:00 PM',
		salon: 'CC & Company Salon',
		location: 'Concord, NC',
		category: 'Beaded Weft Training Course',
		description:
			'The Laced Beaded Weft Training Course is 8 hours of hands-on training designed to teach students two of the most sought after extension application methods available: hand tied beaded wefts, and machine sewn beaded wefts. Laced Hair Academy keeps class sizes small to better provide individualized learning. The Beaded Weft Training Course dives deep into the proper application of hand tied and machine sewn extensions based on clients needs and wants from start to finish. Upon completion, stylists will be able to add this luxury service to their service menus!',
		isAvailable: true,
		classLink:
			'https://lacedhair.com/products/laced-hair-beaded-weft-extension-training-course-concord-nc-20201207#',
	},
];

const Laced = () => {
	return (
		<StandardPage>
			<SEO title="Laced Hair Academy" />
			<SimplePageHeader text="Laced Hair Academy" />
			<TextGroup>
				<Text>
					As a Laced Hair Educator, I enjoy traveling to salons all
					over the US to teach stylists the art of hair extensions.
					Laced Hair Extensions proudly offers six unique extension
					methods (keratin bond, i-tip, tape-ins, clip ins, hand tied
					wefts, and machine sewn wefts) to be able to customize and
					serve your client’s individual needs. Extensions are not a
					“one-size fits all” service!
				</Text>
				<Text>
					In any Laced Academy training course, you can expect class
					sizes to remain small. This ensures each attendee is able to
					ask questions and receive one-on-one instruction and
					critique from their Laced Educator. My goal as an educator
					is to teach the fundamentals of proper extension
					installation, removal, and blending techniques so stylists
					are able to incorporate this luxury service into their
					service menus.
				</Text>
				<Text>
					Check out the upcoming Laced Academy line-up to sign up for
					a class near you! Don’t see your city in the line-up? No
					worries! We are always looking for host salons all over the
					country! Send me a message and let’s get your salon
					scheduled for a certification class!
				</Text>
			</TextGroup>
			<ImageGroup>
				<Image src="https://via.placeholder.com/300" />
				<Image src="https://via.placeholder.com/300" />
				<Image src="https://via.placeholder.com/300" />
			</ImageGroup>
			<ClassCardGroup>
				<H2>Upcoming classes</H2>
				{classes.length > 0 ? (
					classes.map(card => (
						<ClassCard
							key={card.id}
							date={card.date}
							time={card.time}
							location={card.location}
							category={card.category}
							description={card.description}
							isAvailable={card.isAvailable}
							classLink={card.classLink}
							salon={card.salon}
						/>
					))
				) : (
					<NoClassGroup>
						<NoClassText>
							I do not have any classes scheduled at this moment.
						</NoClassText>
						<A
							href="https://lacedhair.com/pages/laced-academy"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button width="250px" margin="0 auto">
								View More
							</Button>
						</A>
					</NoClassGroup>
				)}
			</ClassCardGroup>
		</StandardPage>
	);
};

export default Laced;
