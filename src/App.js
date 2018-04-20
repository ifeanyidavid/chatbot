import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Header from './components/Header';
import ChatUI from './components/ChatUI';
import ChatButton from './components/ChatButton';
import ChatInput from './components/ChatInput';

require('./styles/main.css');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const actions = ['Exchange rate', 'Balance Enquiry', 'Send Money', 'GoTV Subscription'];
    const option = actions.map((action, i) => <ChatButton key={i} option={action} />);
    if (this.state.isOpen) {
      return (
        <div className="chatui-container">
          <Header toggleOpen={this.toggleOpen} />
          <ChatUI />
          <div className="button-chat">{option}</div>
          <ChatInput />
        </div>
      );
    }
    return (
      <div>
        <button className="chat-widget-icon" onClick={this.toggleOpen}>
          <Ionicon icon="ios-chatbubbles-outline" fontSize="32px" color="rgb(255, 255, 255)" />
        </button>
      </div>
    );
  }
}

export default App;
