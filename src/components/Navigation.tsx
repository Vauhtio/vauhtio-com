import { Link } from 'gatsby';
import React from 'react';
import './header.css';
import logo from './logo.png';
import styled from 'styled-components';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => (
  <div className="container">
    <nav className="nav">
      <div className="logo">
        <LogoLink to="/">
          <Logo src={logo} alt="Logo" />
          {siteTitle}
        </LogoLink>
      </div>

      <Links>
        <li className="nav-item">
          <NavLink to="/" activeClassName="nav-link--active">
            Yrityksille
            <div className="nav-link__border"></div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rekry/" activeClassName="nav-link--active">
            Tekijöille
            <div className="nav-link__border"></div>
          </NavLink>
        </li>
      </Links>
    </nav>
  </div>
);

const LogoLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #302f3c;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const Logo = styled.img`
  margin: 0;
  margin-right: 8px;
  width: 24px;

  @media (min-width: 576px) {
    width: auto;
    margin-right: 16px;
  }
`;

const Links = styled.ul`
  display: grid;
  grid-gap: 16px;
  list-style: none;
  margin: 0;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (min-width: 576px) {
    grid-gap: 48px;
  }
`;

const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #302f3c;
  position: relative;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
