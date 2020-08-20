import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../images/jesserhodes-logo.png';

const HeaderWrapper = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
	height: auto;

	@media (max-width: 860px) {
		padding: 20px 40px;
	}
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

	@media (max-width: 860px) {
		flex-direction: column;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		justify-content: center;
		background-color: #e0ddd7;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		transition: 0.25s linear;
		padding: 40px;
		z-index: 15;
	}
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

	@media (max-width: 860px) {
		height: auto;
		padding: 20px 40px;
	}
`;

const Burger = styled.div`
	display: none;
	position: ${({ open }) => open && 'fixed'};
	justify-content: space-around;
	flex-flow: column nowrap;
	height: 35px;
	cursor: pointer;
	outline: none;
	z-index: 20;

	div {
		background-color: black;
		height: 1px;
		width: 35px;
		transform-origin: 1px;
		transition: all 0.25s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		&:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transition: 0s linear;
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}

	@media (max-width: 860px) {
		display: flex;
	}
`;

const Links = () => {
	const [burgerDisplay, setBurgerDisplay] = useState(false);
	return (
		<LinkContainer>
			<Burger
				open={burgerDisplay}
				onClick={() => setBurgerDisplay(!burgerDisplay)}
			>
				<div></div>
				<div></div>
				<div></div>
			</Burger>
			<LinkList open={burgerDisplay}>
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
