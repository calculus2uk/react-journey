import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item m-2">
          <Link to="/" className="navbar-link">
            <i className="fas fa-home" /> Home
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link to="/contacts/add" className="navbar-link">
            <i className="fas fa-plus" />
            Add Contact
          </Link>
        </li>
        <li className="nav-item m-2">
          <Link to="/about" className="navbar-link">
            <i className="fas fa-question" />
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My Contact App Manager'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
