import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Banner = styled.div`
	background-color: #1a1713;
	margin-bottom: 20px;
	padding: 20px;
`;

const Text = styled.span`
	color: #ffffff;
	font-size: 16px;
	font-weight: 300;
	text-align: center;
	display: inline-block;
`;

const FormSuccess = props => {
	const { message } = props;
	return (
		<Banner>
			<Text>{message}</Text>
		</Banner>
	);
};

FormSuccess.propTypes = {
	message: PropTypes.string.isRequired,
};

export default FormSuccess;
