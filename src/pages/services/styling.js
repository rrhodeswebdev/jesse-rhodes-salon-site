import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../../components/seo';
import StandardPage from '../../components/layouts/StandardPage';
import SimplePageHeader from '../../components/content/SimplePageHeader';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import { Button } from '../../components/elements/Button';
import StylingHeaderImg from '../../images/styling-header.jpg';

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

export const query = graphql`
	{
		allContentfulService(filter: { category: { eq: "Styling" } }) {
			edges {
				node {
					id
					name
					description {
						description
					}
					price
					estTime
				}
			}
		}
	}
`;

const Styling = ({ data }) => {
	return (
		<StandardPage>
			<SEO title="Styling Services" />
			<SimplePageHeader text="Styling" image={StylingHeaderImg} />
			<MainContainer>
				{data.allContentfulService.edges.map(({ node }) => (
					<ServiceInfoBlock
						key={node.id}
						title={node.name}
						price={node.price}
						description={node.description.description}
						time={node.estTime && node.estTime}
					/>
				))}
				<Disclaimer>
					*Additional time may result in additional charges to all services
					listed above
				</Disclaimer>
				<Link to="/booking/appointment">
					<Button>Appointments</Button>
				</Link>
			</MainContainer>
		</StandardPage>
	);
};

Styling.propTypes = {
	data: PropTypes.object,
};

export default Styling;
