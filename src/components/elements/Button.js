import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${props => (props.bgColor ? props.bgColor : '#1A1713')};
	color: ${props => (props.color ? props.color : '#ffffff')};
	outline: none;
	border: ${props => (props.border ? props.border : 'none')};
	padding: 15px 20px;
	margin: ${props => (props.margin ? props.margin : '0 20px')};
	cursor: pointer;
	min-width: 250px;
	font-weight: 300;
	font-size: 16px;
	transition: 0.25s ease;
	text-transform: uppercase;
	letter-spacing: 1px;
	width: ${props => props.width && props.width};

	a {
		text-decoration: none;
		color: #ffffff;
	}

	:hover {
		background-color: #b18e72;
		color: ${props => props.hoverColor && props.hoverColor};
	}
`;
