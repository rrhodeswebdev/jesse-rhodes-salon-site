import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import StandardPage from '../components/layouts/StandardPage';
import { Divider } from '../components/elements/Divider';
import ContactForm from '../components/content/ContactForm';

const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 1200px;
	margin: 0 auto;
`;

const ColumnContainer = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 40px auto;
	max-width: 1200px;
`;

const PageHeader = styled.h1`
	display: flex;
	justify-content: center;
	font-size: 42px;
	font-weight: 300;
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
			<HeaderContainer>
				<PageHeader>Let&apos;s Connect</PageHeader>
				<Divider width="100%" height="1px" />
				<img
					src="https://via.placeholder.com/1200x675.png/"
					alt="contact image"
					style={{ width: '100%', marginTop: '40px' }}
				/>
			</HeaderContainer>
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
					<ContactHeader>Hours</ContactHeader>
					<Divider width="100%" height="1px" bg="#e0ddd7" />
					<ColText>
						Wednesday 10-8
						<br />
						Thursday 10-8
						<br />
						Friday 9-4
						<br />
						Saturday 9-3
					</ColText>
				</Column>
				<Column width="50%" padding="40px 0 0 40px">
					<ContactForm />
				</Column>
			</ColumnContainer>
		</StandardPage>
	);
};

export default Contact;
