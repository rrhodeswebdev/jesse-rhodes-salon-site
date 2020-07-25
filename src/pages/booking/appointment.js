import React from 'react';
import SEO from '../../components/seo';
import styled from 'styled-components';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import HoursBlock from '../../components/content/HoursBlock';
import AppointmentForm from '../../components/forms/AppointmentForm';

const TextWrapper = styled.section`
	display: flex;
	justify-content: center;
	font-size: 16px;
	font-weight: 300;
	max-width: 800px;
	padding: 40px;
	margin: 0 auto;

	p {
		text-align: center;
	}
`;

const appointment = () => {
	return (
		<StandardPage>
			<SEO title="Appointment" />
			<SimplePageHeader text="Request Appointment" />
			<TextWrapper>
				<p>
					Thanks so much for your interest in booking an appointment
					with me! Please fill out the form below and let me know
					which service/s you are interested in! I will be in touch
					soon to confirm your appointment. I look forward to seeing
					you soon!
				</p>
			</TextWrapper>
			<AppointmentForm />
			<HoursBlock
				textAlign="center"
				dividerWidth="350px"
				dividerMargin="0 auto"
			/>
		</StandardPage>
	);
};

export default appointment;
