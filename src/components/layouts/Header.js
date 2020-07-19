import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../images/jesserhodes-logo.png';

const HeaderWrapper = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
`;

const Logo = styled.img`
	max-width: 200px;
`;

const LinkContainer = styled.nav`
	align-items: center;
	display: flex;
	justify-content: center;
	height: 100%;
`;

const LinkList = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
	height: 100%;
`;

const LinkItem = styled.li`
	font-size: 16px;
	font-weight: 300;
	text-transform: uppercase;
	list-style: none;
	display: flex;
	padding: 0 20px;
	height: 100%;
	align-items: center;

	a {
		color: #1a1713;
		text-decoration: none;
		padding-bottom: 10px;

		&:hover {
			color: #b18e72;
			border-bottom: 1px solid #b18e72;
		}

		&.active-link {
			color: #b18e72;
			border-bottom: 1px solid #b18e72;
		}
	}
`;

const Links = () => {
	return (
		<LinkContainer>
			<LinkList>
				<LinkItem>
					<Link to="/" activeClassName="active-link">
						Home
					</Link>
				</LinkItem>
				<LinkItem>
					<Link to="/about" activeClassName="active-link">
						About
					</Link>
				</LinkItem>
				<LinkItem>
					<Link to="/services" activeClassName="active-link">
						Services
					</Link>
				</LinkItem>
				<LinkItem>
					<Link to="/education" activeClassName="active-link">
						Education
					</Link>
				</LinkItem>
				<LinkItem>
					<Link to="/contact" activeClassName="active-link">
						Contact
					</Link>
				</LinkItem>
			</LinkList>
		</LinkContainer>
	);
};

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to="/">
				<Logo src={logo} alt="Jesse Rhodes Logo" />
			</Link>
			<Links />
		</HeaderWrapper>
	);
};

export default Header;
