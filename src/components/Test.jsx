import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 0,
          name: 'Buy milk'
        },
        {
          id: 1,
          name: 'Write unit tests'
        },
        {
          id: 2,
          name: 'Cook a meal'
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value, item) {
    console.log(`${value}, ${item} clicked`);
  }

  renderTodos() {
    return this.state.items.map((item, idx) => (
      <li className="list-group-item" key={idx}>
        {item.name}
        <button onClick={() => this.handleClick(item.id, item.name)}>X</button>
      </li>
    ));
  }

  render() {
    return <ul id="todo">{this.renderTodos()}</ul>;
  }
}
