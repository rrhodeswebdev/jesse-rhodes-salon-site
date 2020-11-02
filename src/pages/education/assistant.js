import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import AssistantApplicationForm from '../../components/forms/AssistantApplicationForm';

const TextWrapper = styled.div`
	display: flex;
	max-width: 1200px;
	width: 100%;
	margin: 0 auto 40px;
	padding: 0 40px;
`;

const Text = styled.p`
	font-size: 18px;
	font-weight: 300;
	text-align: center;
`;

const Mentor = () => {
	const { contentfulAsset: AssistantHeaderImg } = useStaticQuery(graphql`
		{
			contentfulAsset(contentful_id: { eq: "1BMRK0xHuAA4Yft13UEfhA" }) {
				file {
					url
				}
				title
			}
		}
	`);

	return (
		<StandardPage>
			<SEO title="Assistant Program" />
			<SimplePageHeader
				text="Assistant Program"
				image={AssistantHeaderImg.file.url}
				imageAlt={AssistantHeaderImg.title}
			/>
			<TextWrapper>
				<Text>
					Not only do I enjoy teaching through the Laced Academy, but I also
					enjoy working one-on-one with potential stylists and new stylists to
					teach them to be successful behind the chair. Through this program, I
					offer currently enrolled cosmetology students, or newly licensed
					stylists the opportunity to work hands on with me in the salon. They
					are able to assist me throughout the day with clients while asking
					questions and learning all my tips, tricks and techniques that have
					helped me find my own success in the beauty industry. This paid
					mentorship allows stylists the opportunity to pick my brain about
					anything and everything - from business and marketing, to cutting and
					coloring hair. I am passionate about sharing my knowledge with others,
					and I love helping stylists elevate their business and growing their
					clientele!
				</Text>
			</TextWrapper>
			<AssistantApplicationForm />
		</StandardPage>
	);
};

export default Mentor;
