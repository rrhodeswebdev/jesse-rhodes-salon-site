import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TransitionLink from 'gatsby-plugin-transition-link';
import { gsap } from 'gsap';
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
	background-color: #e0ddd7;
	display: none;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	position: absolute;
	right: -500px;
	top: 0;
	width: 500px;
	li {
		font-size: 42px;
		font-weight: 300;
		list-style: none;
		padding: 20px;
		a {
			color: #1a1713;
			text-decoration: none;
			&:hover {
				color: #b18e72;
			}
			&.active-link {
				color: #b18e72;
			}
		}
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Links = ({ state }) => {
	const ref = useRef();

	useEffect(() => {
		if (state) {
			gsap.to(ref.current, {
				x: -500,
				duration: 0.75,
				ease: 'power2.out',
				display: 'flex',
			});
		}

		if (!state) {
			gsap.to(ref.current, {
				x: 500,
				duration: 0.75,
				ease: 'power2.in',
				display: 'none',
			});
		}
	}, [state]);

	return (
		<LinkContainer ref={ref}>
			<li>
				<TransitionLink
					to="/"
					activeClassName="active-link"
					exit={{
						trigger: () =>
							gsap.to(ref.current, {
								x: 500,
								duration: 0.75,
								ease: 'power2.in',
								display: 'none',
							}),
						length: 0.75,
					}}
					entry={{
						delay: 0.75,
					}}
				>
					Home
				</TransitionLink>
			</li>
			<li>
				<TransitionLink
					to="/about"
					activeClassName="active-link"
					exit={{
						trigger: () =>
							gsap.to(ref.current, {
								x: 500,
								duration: 0.75,
								ease: 'power2.in',
								display: 'none',
							}),
						length: 0.75,
					}}
					entry={{
						delay: 0.75,
					}}
				>
					About
				</TransitionLink>
			</li>
			<li>
				<TransitionLink
					to="/services"
					activeClassName="active-link"
					exit={{
						trigger: () =>
							gsap.to(ref.current, {
								x: 500,
								duration: 0.75,
								ease: 'power2.in',
								display: 'none',
							}),
						length: 0.75,
					}}
					entry={{
						delay: 0.75,
					}}
				>
					Services
				</TransitionLink>
			</li>
			<li>
				<TransitionLink
					to="/education"
					activeClassName="active-link"
					exit={{
						trigger: () =>
							gsap.to(ref.current, {
								x: 500,
								duration: 0.75,
								ease: 'power2.in',
								display: 'none',
							}),
						length: 0.75,
					}}
					entry={{
						delay: 0.75,
					}}
				>
					Education
				</TransitionLink>
			</li>
			<li>
				<TransitionLink
					to="/contact"
					activeClassName="active-link"
					exit={{
						trigger: () =>
							gsap.to(ref.current, {
								x: 500,
								duration: 0.75,
								ease: 'power2.in',
								display: 'none',
							}),
						length: 0.75,
					}}
					entry={{
						delay: 0.75,
					}}
				>
					Contact
				</TransitionLink>
			</li>
		</LinkContainer>
	);
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onBurgerClick = () => {
		const burger = document.getElementsByClassName('hamburger');
		burger[0].classList.toggle('is-active');
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<HeaderWrapper>
			<TransitionLink to="/">
				<Logo src={logo} alt="Jesse Rhodes Logo" />
			</TransitionLink>
			<button
				className="hamburger hamburger--collapse"
				type="button"
				onClick={onBurgerClick}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
			<Links state={isMenuOpen} update={onBurgerClick} />
		</HeaderWrapper>
	);
};

Links.propTypes = {
	state: PropTypes.bool.isRequired,
};

export default Header;
