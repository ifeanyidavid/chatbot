import React from 'react';
import ChatBubble from './ChatBubble';

require('../styles/chatui.css');

const ChatUI = () => (
  <main className="chatui">
    <ChatBubble
      chat="Single-origin coffee health goth poutine paleo thundercats umami meh occupy
                post-ironic green juice cliche etsy hella"
    />
    <ChatBubble fromMe chat="Single-origin coffee health" />
    <ChatBubble chat="Single-origin" />
  </main>
);

export default ChatUI;
