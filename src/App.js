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
      isOpen: false,
      action: '',
      resonseFromServer: true,
      message: ''
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.addAction = this.addAction.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  addAction(action) {
    this.setState({
      action
    });
  }

  submitMessage(message) {
    this.setState({
      message
    });
  }

  render() {
    // show buttons if response from server array is not empty
    const actions = [
      { id: 0, name: 'Exchange rate' },
      { id: 1, name: 'Send money' },
      { id: 2, name: 'GoTV Subscription' },
      { id: 3, name: 'Startimes Subscription' }
    ];

    const option = actions.map(action => (
      <ChatButton key={action.id} option={action.name} addAction={this.addAction} />
    ));
    if (this.state.isOpen) {
      return (
        <div className="chatui-container">
          <Header toggleOpen={this.toggleOpen} />
          <ChatUI action={this.state.action} message={this.state.message} />
          {this.state.action.length !== 0 && this.state.resonseFromServer ? (
            ''
          ) : (
            <div className="button-chat">{option}</div>
          )}
          <ChatInput submitMessage={this.submitMessage} />
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
