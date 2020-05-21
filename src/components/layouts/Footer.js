import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagramSquare,
	faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	justify-content: center;
	padding: 20px 40px;
`;

const SocialWrapper = styled.div`
	padding: 20px 40px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: #1a1713;
	margin: 0 20px;
	&:hover {
		color: #b18e72;
	}
`;

const LegalWrapper = styled.div`
	padding: 20px 40px;
	span {
		font-weight: 300;
		a {
			color: #b18e72;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<FooterWrapper>
			<SocialWrapper>
				<a
					href="https://facebook.com/jesserhodeshair"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SocialIcon icon={faFacebookSquare} size="2x" />
				</a>
				<a
					href="https://instagram.com/jesserhodes_hair"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SocialIcon icon={faInstagramSquare} size="2x" />
				</a>
			</SocialWrapper>
			<LegalWrapper>
				<span>
					Copyright © {currentYear} | Made by{' '}
					<a href="https://ryanrhodes.io">Ryan Rhodes IO</a>
				</span>
			</LegalWrapper>
		</FooterWrapper>
	);
};

export default Footer;
