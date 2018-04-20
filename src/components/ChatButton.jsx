import React from 'react';
import PropTypes from 'prop-types';

require('../styles/button.css');

const ChatButton = props => (
  <div className="action-btn-wrapper">
    <button className="button">{props.option}</button>;
  </div>
);

ChatButton.propTypes = {
  option: PropTypes.string
};

ChatButton.defaultProps = {
  option: ''
};

export default ChatButton;
