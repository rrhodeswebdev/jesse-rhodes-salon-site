import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import { Button } from '../../components/elements/Button';
import ExtensionHeaderImg from '../../images/extension-header.jpg';

const extensionData = [
	{
		id: 1,
		title: 'Consultation',
		price: '$40',
		description: 'In-person meeting to discuss hair goals and budget.',
		time: '30 minutes',
	},
];

const extensionBeadedData = [
	{
		id: 2,
		title: 'The Partial',
		subTitle: 'Best for adding fullness',
		price: '$700',
		description:
			'Includes 4 wefts, 1 row installation, custom color and sculpting, heat styling',
	},
	{
		id: 3,
		title: 'The Full',
		subTitle: 'Best for adding length and fullness',
		price: '$1200',
		description:
			'Includes 8 wefts, 2 row installation, custom color and sculpting, heat styling',
	},
	{
		id: 4,
		title: 'The Extra Full',
		subTitle: 'Hair from the hair gods, long, full, and  luscious',
		price: '$1800',
		description:
			'Includes 12 wefts, 3 row installation, custom color and sculpting, heat styling',
	},
	{
		id: 5,
		title: 'Reinstalls',
		price: '$200/row',
		description:
			'Extensions completely removed and reinstalled with new bead and string',
	},
	{
		id: 6,
		title: 'Removal',
		price: '$100',
		description:
			'Includes full extensions removal, luxury shampoo, blowout and heat styling.',
	},
];

const extensionTapeData = [
	{
		id: 7,
		title: '14-18”',
		price: '$18/piece',
		description: 'Includes hair extensions and installation.',
	},
	{
		id: 8,
		title: '20-22”',
		price: '$22/piece',
		description: 'Includes hair extensions and installation.',
	},
	{
		id: 9,
		title: '24”',
		price: '$24/piece',
		description: 'Includes hair extensions and installation.',
	},
	{
		id: 10,
		title: 'Reinstalls',
		price: '$5/piece',
		description:
			'Includes removal of extensions, retabbing extensions with new tape, and reinstalling hair extensions.',
	},
	{
		id: 11,
		title: 'Sculpting',
		price: '$50',
		description: 'Blending and styling extensions.',
	},
	{
		id: 12,
		title: 'Removal',
		price: '$150',
		description:
			'Includes full removal of extensions and excess tape residue, luxury shampoo, conditioning treatment, blowout, and heat styling.',
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

const ServiceHeading = styled.h2`
	font-size: 36px;
	font-weight: 300;
	background-color: #e0ddd7;
	width: 100%;
	text-align: center;
	padding: 10px;
	margin-bottom: 40px;
`;

const Extensions = () => {
	return (
		<StandardPage>
			<SEO title="Extensions Services" />
			<SimplePageHeader text="Extensions" image={ExtensionHeaderImg} />
			<MainContainer>
				{extensionData.map(service => (
					<ServiceInfoBlock
						key={service.id}
						title={service.title}
						price={service.price}
						description={service.description}
						time={service.time}
					/>
				))}
				<ServiceHeading>Beaded Weft Extensions</ServiceHeading>
				{extensionBeadedData.map(service => (
					<ServiceInfoBlock
						key={service.id}
						title={service.title}
						subTitle={service.subTitle}
						price={service.price}
						description={service.description}
					/>
				))}
				<ServiceHeading>Tape In Extensions</ServiceHeading>
				{extensionTapeData.map(service => (
					<ServiceInfoBlock
						key={service.id}
						title={service.title}
						price={service.price}
						description={service.description}
					/>
				))}
				<Link to="/booking/appointment">
					<Button>Appointments</Button>
				</Link>
			</MainContainer>
		</StandardPage>
	);
};

export default Extensions;
