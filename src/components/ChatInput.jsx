import React from 'react';
import Ionicon from 'react-ionicons';

require('../styles/chatinput.css');

class ChatInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit() {
    const { value } = this.state;
    this.props.submitMessage(value);
  }

  render() {
    return (
      <div className="chat-input">
        <input
          type="text"
          placeholder="Write message here"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn-send" onClick={this.handleSubmit}>
          <Ionicon
            icon="ios-send"
            fontSize="35px"
            color="rgba(0, 0, 0, 0.12)"
            className="send-icon"
          />
        </button>
      </div>
    );
  }
}

export default ChatInput;
