import React from 'react';
import ChatBubble from './ChatBubble';

require('../styles/chatui.css');

class ChatUI extends React.Component {
  render() {
    return (
      <main className="chatui">
        <ChatBubble
          chat="Single-origin coffee health goth poutine paleo thundercats umami meh occupy
                  post-ironic green juice cliche etsy hella"
        />
        <ChatBubble fromMe chat="Single-origin coffee health" />
        <ChatBubble chat="Single-origin" />
        <ChatBubble fromMe chat={`${this.props.action}`} />
      </main>
    );
  }
}

export default ChatUI;
