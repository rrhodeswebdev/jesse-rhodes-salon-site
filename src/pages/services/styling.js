import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import { Button } from '../../components/elements/Button';

const stylingData = [
	{
		id: 1,
		title: 'Haircut',
		price: '$40+',
		description:
			'Includes a luxury shampoo, custom haircut, blowdry and heat finishing.',
		time: '45 minutes',
	},
	{
		id: 2,
		title: 'Blowout',
		price: '$30+',
		description: 'Includes a luxury shampoo, blowout, and heat finishing.',
		time: '30 minutes',
	},
	{
		id: 3,
		title: 'Conditioning Treatment',
		price: '$15+',
		description: 'Includes a custom moisture treatment.',
		time: '15 minutes',
	},
	{
		id: 4,
		title: 'Smoothing System',
		price: '$125/oz',
		description:
			'Rejuvenol smoothing system to help improve manageability, shine, and condition hair.',
		time: '60 minutes',
	},
];

const MainContainer = styled.section`
	display: flex;
	margin: 0 auto 40px auto;
	padding: 0 40px;
	flex-direction: column;
	align-items: center;
	max-width: 1200px;
	width: 100%;
`;

const Disclaimer = styled.span`
	font-size: 14px;
	font-weight: 300;
	font-style: italic;
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`;

const Styling = () => {
	return (
		<StandardPage>
			<SEO title="Styling Services" />
			<SimplePageHeader
				text="Styling"
				image="https://via.placeholder.com/1200x675.png"
			/>
			<MainContainer>
				{stylingData.map(style => (
					<ServiceInfoBlock
						key={style.id}
						title={style.title}
						price={style.price}
						description={style.description}
						time={style.time && style.time}
					/>
				))}
				<Disclaimer>
					*Additional time may result in additional charges to all
					services listed above
				</Disclaimer>
				<Link to="/booking/appointment">
					<Button>Appointments</Button>
				</Link>
			</MainContainer>
		</StandardPage>
	);
};

export default Styling;
