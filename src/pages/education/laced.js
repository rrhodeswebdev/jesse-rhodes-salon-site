import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import StandardPage from '../../components/layouts/StandardPage';
import SEO from '../../components/seo';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import ClassCard from '../../components/content/ClassCard';
import { Button } from '../../components/elements/Button';
import LacedHeaderImg1 from '../../images/laced-header-1.jpg';
import LacedHeaderImg2 from '../../images/laced-header-2.jpg';
import LacedHeaderImg3 from '../../images/laced-header-3.jpg';

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

	@media (max-width: 425px) {
		text-align: center;
	}
`;

const ImageGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto 40px;
	justify-content: space-between;
	max-width: 1200px;
	padding: 0 40px;
	width: 100%;

	@media (max-width: 1024px) {
		justify-content: center;
	}
`;

const Image = styled.img`
	width: 100%;
	max-width: 300px;
	object-fit: cover;
	height: auto;

	:nth-child(1) {
		margin-right: 20px;
	}

	:nth-child(3) {
		margin-left: 20px;
	}

	@media (max-width: 1024px) {
		margin-bottom: 40px;
	}

	@media (max-width: 680px) {
		max-width: 350px;
		max-height: 425px;
		object-position: bottom;

		:nth-child(1) {
			margin-right: 0;
		}

		:nth-child(3) {
			margin-left: 0;
		}
	}
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

export const query = graphql`
	{
		allContentfulLacedClass {
			edges {
				node {
					id
					category
					salon
					description {
						description
					}
					classDate
					classTime
					isAvailable
					classLink
					classLocation
				}
			}
		}
	}
`;

const Laced = ({ data }) => {
	return (
		<StandardPage>
			<SEO title="Laced Hair Academy" />
			<SimplePageHeader text="Laced Hair Academy" />
			<TextGroup>
				<Text>
					As a Laced Hair Educator, I enjoy traveling to salons all over the US
					to teach stylists the art of hair extensions. Laced Hair Extensions
					proudly offers six unique extension methods (keratin bond, i-tip,
					tape-ins, clip-ins, hand-tied wefts, and machine-sewn wefts) to be
					able to customize and serve your client’s individual needs. Extensions
					are not a “one-size fits all” service!
				</Text>
				<Text>
					In any Laced Academy training course, you can expect class sizes to
					remain small. This ensures each attendee is able to ask questions and
					receive one-on-one instruction and critique from their Laced Educator.
					My goal as an educator is to teach the fundamentals of proper
					extension installation, removal, and blending techniques so stylists
					are able to incorporate this luxury service into their service menus.
				</Text>
				<Text>
					Check out the upcoming Laced Academy line-up to sign up for a class
					near you! Don’t see your city in the line-up? No worries! We are
					always looking for host salons all over the country! Send me a message
					and let’s get your salon scheduled for a certification class!
				</Text>
			</TextGroup>
			<ImageGroup>
				<Image src={LacedHeaderImg1} />
				<Image src={LacedHeaderImg2} />
				<Image src={LacedHeaderImg3} />
			</ImageGroup>
			<ClassCardGroup>
				<H2>Upcoming Classes</H2>
				{data.allContentfulLacedClass.edges.length > 0 ? (
					data.allContentfulLacedClass.edges.map(({ node }) => (
						<ClassCard
							key={node.id}
							date={node.classDate}
							time={node.classTime}
							location={node.classLocation}
							category={node.category}
							description={node.description.description}
							isAvailable={node.isAvailable}
							classLink={node.classLink}
							salon={node.salon}
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

Laced.propTypes = {
	data: PropTypes.object,
};

export default Laced;
