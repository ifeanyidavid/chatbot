import React from 'react';

class ChatBubble extends React.Component {
  render() {
    const fromMe = this.props.fromMe ? 'fromMe' : '';
    const display = this.props.chat.length === 0 ? 'hidden' : 'show';
    return (
      <div className={`chat ${fromMe} ${display}`}>
        <div className="chatbubble-wrapper">
          <div className="avatar" />
          <div>
            <div className="chatbubble">
              <p>{this.props.chat}</p>
            </div>
            <p className="timestamp fromMe">3 min ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBubble;
