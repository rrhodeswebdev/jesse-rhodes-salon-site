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
		title: 'Consultation',
		price: '$40',
		description: 'In-person meeting to discuss hair goals and budget.',
		time: '30 minutes',
	},
	{
		id: 2,
		title: 'Root Touch Up',
		price: '$65+',
		description:
			'Includes single color on new growth (up to 2 inches), luxury shampoo and blowout.',
		time: '90 minutes',
	},
	{
		id: 3,
		title: 'All Over Color',
		price: '$85+',
		description:
			'Includes single color from root to end, luxury shampoo, and blowout.',
		time: '90 minutes',
	},
	{
		id: 4,
		title: 'Partial Foil',
		price: '$85+',
		description:
			'Includes sides, top, and crown colored using foils, luxury shampoo, blowout.',
		time: '90 minutes',
	},
	{
		id: 5,
		title: 'Full Foil',
		price: '$110+',
		description:
			'Includes coloring all hair using foils, luxury shampoo, blowout.',
		time: '120 minutes',
	},
	{
		id: 6,
		title: 'Balayage',
		price: '$130+',
		description:
			'Includes free hand painting of color, luxury shampoo, blowout.',
		time: '120 minutes',
	},
	{
		id: 7,
		title: 'Color Add Ons',
		price: 'TBD',
		description: 'Ie: shadow root, extra toners, root melt, fantasy color',
		time: 'TBD',
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
			<SEO title="Color Services" />
			<SimplePageHeader
				text="Color"
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
