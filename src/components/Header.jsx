import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

require('../styles/header.css');

const Header = props => (
  <header>
    <div className="header-right">
      <div className="avatar">
        <div className="status-indicator" />
      </div>
      <div className="bot-info">
        <p className="bot-name">Ecobank bot</p>
        <p className="status">Active</p>
      </div>
    </div>
    <div className="header-left">
      <button className="button-close" onClick={props.toggleOpen}>
        <Ionicon
          icon="ios-close"
          fontSize="35px"
          color="rgba(0, 0, 0, 0.12)"
          className="close-icon"
        />
      </button>
    </div>
  </header>
);

Header.propTypes = {
  toggleOpen: PropTypes.func.isRequired
};

export default Header;
