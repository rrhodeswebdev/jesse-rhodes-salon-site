import styled from 'styled-components';

export const Divider = styled.div`
	height: ${props => (props.height ? props.height : '2px')};
	width: ${props => (props.width ? props.width : '50%')};
	background-color: ${props => (props.bg ? props.bg : '#b18e72')};
	margin: ${props => props.margin && props.margin};
`;
