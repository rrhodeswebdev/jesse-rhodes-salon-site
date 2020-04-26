import React, { useState } from "react"
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
  max-width: 200px;
`

const LinksWrapper = styled.nav`
  background-color: rgba(26, 23, 19, 0.75);
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const LinkContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  right: 0;
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
`

const Links = () => {
  return (
    <LinksWrapper>
      <LinkContainer>
        <li>
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
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
      </LinkContainer>
    </LinksWrapper>
  )
}

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  const onBurgerClick = e => {
    const burger = document.getElementsByClassName("hamburger")
    burger[0].classList.toggle("is-active")
    setMenuActive(!menuActive)
  }

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Jesse Rhodes Logo" />
      </Link>
      <button
        className="hamburger hamburger--collapse"
        type="button"
        onClick={onBurgerClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {menuActive && <Links />}
    </HeaderWrapper>
  )
}

export default Header
