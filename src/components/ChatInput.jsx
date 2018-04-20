import React from 'react';
import Ionicon from 'react-ionicons';

require('../styles/chatinput.css');

const ChatInput = () => (
  <div className="chat-input">
    <input type="text" placeholder="Write message here" />
    <Ionicon icon="ios-send" fontSize="35px" color="rgba(0, 0, 0, 0.12)" className="send-icon" />
  </div>
);

export default ChatInput;
