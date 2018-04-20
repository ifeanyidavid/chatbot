import React from 'react';
import PropTypes from 'prop-types';

require('../styles/button.css');

class ChatButton extends React.Component {
  constructor(props) {
    super(props);

    this.addActionToParent = this.addActionToParent.bind(this);
  }

  addActionToParent() {
    this.props.addAction(this.props.option);
  }

  render() {
    return (
      <div className="action-btn-wrapper">
        <button className="button" onClick={this.addActionToParent}>
          {this.props.option}
        </button>;
      </div>
    );
  }
}

ChatButton.propTypes = {
  option: PropTypes.string
};

ChatButton.defaultProps = {
  option: ''
};

export default ChatButton;
