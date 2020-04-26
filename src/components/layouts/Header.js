import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/jesserhodes-logo.png"

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`

const Logo = styled.img`
  max-width: 150px;
`

const LinksWrapper = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  li {
    align-items: center;
    display: flex;
    font-size: 16px;
    font-weight: 300;
    height: 100%;
    list-style: none;
    padding: 0 20px;
    a {
      color: #1a1713;
      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        color: #b18e72;
      }
      &.active-link {
        color: #b18e72;
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Jesse Rhodes Logo" />
      </Link>
      <LinksWrapper>
        <li>
          <Link to="/about" activeClassName="active-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" activeClassName="active-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/education" activeClassName="active-link">
            Education
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active-link">
            Contact
          </Link>
        </li>
      </LinksWrapper>
    </HeaderWrapper>
  )
}

export default Header
