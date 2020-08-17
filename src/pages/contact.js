import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import StandardPage from '../components/layouts/StandardPage';
import { Divider } from '../components/elements/Divider';
import ContactForm from '../components/forms/ContactForm';
import SimplePageHeader from '../components/content/SimplePageHeader';
import HoursBlock from '../components/content/HoursBlock';
import ContactHeaderImg from '../images/contact-header.jpg';

const ColumnContainer = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 40px auto;
	max-width: 1200px;
	padding: 0 40px;
`;

const ContactHeader = styled.h2`
	font-size: 24px;
	font-weight: 300;
	margin-top: 0;
	margin-bottom: 10px;
`;

const Column = styled.div`
	padding: ${props => props.padding && props.padding};
	width: ${props => props.width && props.width};
`;

const ColGroup = styled.div`
	width: 100%;
	margin-bottom: 30px;
`;

const ColText = styled.p`
	font-size: 16px;
	font-weight: 300;
`;

const Link = styled.a`
	color: #b18e72;
	text-decoration: none;
`;

const Contact = () => {
	return (
		<StandardPage>
			<SEO title="Contact" />
			<SimplePageHeader
				text="Let's Connect"
				image={ContactHeaderImg}
				imageAlt="Contact Us Image"
			/>
			<ColumnContainer>
				<Column width="40%" padding="40px 40px 0 0">
					<ColGroup>
						<ContactHeader>Email</ContactHeader>
						<Divider width="100%" height="1px" bg="#e0ddd7" />
						<ColText>
							<Link href="mailto:jesse@jesserhodes.style">
								jesse@jesserhodes.style
							</Link>
						</ColText>
					</ColGroup>
					<ColGroup>
						<ContactHeader>Phone</ContactHeader>
						<Divider width="100%" height="1px" bg="#e0ddd7" />
						<ColText>
							<Link href="tel:7047969365">704.796.9365</Link>
						</ColText>
					</ColGroup>
					<ContactHeader>Salon Address</ContactHeader>
					<Divider width="100%" height="1px" bg="#e0ddd7" />
					<ColText>
						<Link
							href="https://goo.gl/maps/Rqg7wXzG18krgAeZ8"
							target="_blank"
							rel="noopener noreferrer"
						>
							CC & Company Salon and Spa
							<br />
							160 Manor Avenue
							<br />
							Concord, NC 28025
						</Link>
					</ColText>
					<HoursBlock textAlign="left" dividerMargin="0" dividerWidth="100%" />
				</Column>
				<Column width="50%" padding="40px 0 0 40px">
					<ContactForm />
				</Column>
			</ColumnContainer>
		</StandardPage>
	);
};

export default Contact;
