import { Link } from 'gatsby';
import React from 'react';
import './header.css';
import logo from './logo.png';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => (
  <div className="container">
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
          {siteTitle}
        </Link>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="nav-link--active">
            Yrityksille
            <div className="nav-link__border"></div>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/page-2/"
            className="nav-link"
            activeClassName="nav-link--active"
          >
            Tekijöille
            <div className="nav-link__border"></div>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
