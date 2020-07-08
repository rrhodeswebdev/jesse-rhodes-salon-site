import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const StandardPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const ContentWrapper = styled.main`
	flex: 1 0 auto;
`;

const StandardPage = ({ children }) => {
	return (
		<StandardPageWrapper>
			<GlobalStyles />
			<Header />
			<ContentWrapper>{children}</ContentWrapper>
			<Footer />
		</StandardPageWrapper>
	);
};

StandardPage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StandardPage;
