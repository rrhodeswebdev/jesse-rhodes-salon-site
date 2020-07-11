import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${props => (props.bgColor ? props.bgColor : '#1A1713')};
	color: ${props => (props.color ? props.color : '#ffffff')};
	outline: none;
	border: none;
	padding: 15px 20px;
	margin-right: 20px;
	margin-left: 20px;
	cursor: pointer;
	min-width: 250px;
	font-weight: 300;
	font-size: 18px;
	transition: 0.25s ease;
	text-transform: uppercase;
	letter-spacing: 1px;

	:hover {
		background-color: #b18e72;
	}
`;
