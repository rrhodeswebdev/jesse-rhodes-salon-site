import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import StandardPage from '../components/layouts/StandardPage';
import SimplePageHeader from '../components/content/SimplePageHeader';
import AboutMeImg from '../images/about-me.jpg';

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 40px;
	max-width: 1200px;
	margin: 0 auto;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	width: 60%;
	padding-top: 40px;
`;

const Paragraph = styled.p`
	font-size: 16px;
	font-weight: 300;
	margin: 0;
	padding-bottom: 20px;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-right: 20px;
	padding-top: 40px;
	width: 40%;
`;

const About = () => {
	return (
		<StandardPage>
			<SEO title="About" />
			<SimplePageHeader text="About Me" />
			<Container>
				<ImageContainer>
					<img
						src={AboutMeImg}
						alt="About Me Image"
						style={{ width: '100%' }}
					/>
				</ImageContainer>
				<TextContainer>
					<Paragraph>
						First and foremost, I am a wife and a mother. My husband Ryan and I
						met in kindergarten, and he is literally the love of my life! My
						daughter Liliana is the most joyful little girl! She is my biggest
						blessing, and I thank God every day for these two amazing and
						inspiring individuals!
					</Paragraph>
					<Paragraph>
						I have been a licensed cosmetologist in Concord, NC since 2009. I am
						passionate about helping women feel and look beautiful by providing
						luxury services in a laid back and friendly environment.
					</Paragraph>
					<Paragraph>
						I specialize in color and extensions, and utilize both to help my
						guests achieve their dream hair! Over ten years ago, I discovered
						the life changing confidence boost hair extensions invoke. Since
						then, it has been my goal to help other women experience the magic
						of extensions!
					</Paragraph>
					<Paragraph>
						When I’m not giving my guests the hair of their dreams, I am
						teaching other stylists around the US how to enhance their service
						menu through the art of hair extensions. I am proud to be an
						educator for Laced Hair Extensions. Not only do I have the
						opportunity to travel around the US teaching all things extensions,
						I am able to meet and connect with so many talented stylists!
					</Paragraph>
					<Paragraph>
						Not only do I enjoy teaching other stylists, I love being a student!
						I am an education junkie and am always looking to enhance my skills
						and knowledge.
					</Paragraph>
					<Paragraph>
						During my down time, I spend as much time with my family as
						possible. My husband and I are secret disc golf nerds, and I love
						creating art and science projects with my daughter - she’s such a
						creative little girl! We have three dogs and two cats, and sometimes
						I feel like we run a small zoo! I am so grateful for the life I
						live, and I thank God every day for bringing me so much joy!
					</Paragraph>
					<Paragraph>
						I want to share my joy and passion with you! Whether you are looking
						to book an appointment, or inquire about extension education, I’d
						love to connect with you!
					</Paragraph>
				</TextContainer>
			</Container>
		</StandardPage>
	);
};

export default About;
