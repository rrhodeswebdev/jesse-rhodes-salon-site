import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import styled from 'styled-components';
import { Button } from '../../components/elements/Button';
import NotifyLacedForm from '../forms/NotifyLacedForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCalendar,
	faClock,
	faMapMarkerAlt,
	faCut,
} from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
	background-color: #e0ddd7;
	display: flex;
	flex-direction: column;
	padding: 40px;
	margin-bottom: 40px;
	height: auto;
`;

const CardColContainer = styled.div`
	display: flex;
`;

const CardCol = styled.div`
	display: flex;
	flex-direction: column;
	width: ${props => props.width && props.width};
	padding: 0 40px;
`;

const CardHeader = styled.h3`
	display: flex;
	justify-content: center;
	margin: 0 0 40px;
	font-size: 24px;
	letter-spacing: 1px;
`;

const Icon = styled(FontAwesomeIcon)`
	margin-right: 10px;
`;

const Span = styled.span`
	font-size: ${props => props.size && props.size};
	font-weight: 300;
	margin-bottom: ${props => props.marginBottom && props.marginBottom};
	padding-bottom: 8px;
`;

const Para = styled.p`
	font-size: 18px;
	font-weight: 300;
	margin: 0;
`;

const ClassCard = props => {
	const [notificationForm, setNotificationForm] = useState(false);
	const {
		date,
		time,
		location,
		category,
		description,
		isAvailable,
		classLink,
		salon,
	} = props;

	const onNotifyClick = () => {
		setNotificationForm(!notificationForm);
		gsap.fromTo(
			'.laced-notification-form',
			{ height: 0 },
			{
				duration: 0.5,
				ease: 'circ.out',
				opacity: 1,
				height: 'auto',
			}
		);
	};

	return (
		<Card>
			<CardHeader>{category}</CardHeader>
			<CardColContainer>
				<CardCol width="350px">
					<Span size="18px">
						{' '}
						<Icon icon={faCalendar} />
						<strong>Date: </strong>
						{date}
					</Span>
					<Span size="18px">
						<Icon icon={faClock} />
						<strong>Time: </strong>
						{time}
					</Span>
					<Span size="18px">
						<Icon icon={faCut} />
						<strong>Salon: </strong>
						{salon}
					</Span>
					<Span size="18px" marginBottom="20px">
						<Icon icon={faMapMarkerAlt} />
						<strong>Location: </strong>
						{location}
					</Span>
					{isAvailable ? (
						<a
							href={classLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button margin="0" width="100%">
								Enroll Here
							</Button>
						</a>
					) : notificationForm ? (
						<Button
							margin="0"
							width="100%"
							bgColor="transparent"
							border="1px solid #000"
							color="#000"
							hoverBgColor="#000"
							hoverColor="#fff"
							onClick={onNotifyClick}
						>
							Close
						</Button>
					) : (
						<Button margin="0" width="100%" onClick={onNotifyClick}>
							Notify Me
						</Button>
					)}
				</CardCol>
				<CardCol width="100%">
					<Para>{description}</Para>
				</CardCol>
			</CardColContainer>
			<div className="laced-notification-form">
				{notificationForm && (
					<NotifyLacedForm id="laced-notification-form" />
				)}
			</div>
		</Card>
	);
};

ClassCard.propTypes = {
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isAvailable: PropTypes.bool.isRequired,
	classLink: PropTypes.string,
	salon: PropTypes.string.isRequired,
};

export default ClassCard;
