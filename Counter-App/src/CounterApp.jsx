import React, { Component } from 'react';

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  reset = () => {
    this.setState({
      value: 0
    });
  };
  render() {
    return (
      <div>
        <h1>CounterApp</h1>
        <span>{this.state.value}</span><br /><br /><br />
        <div id='buttons'>
          <button className='button' onClick={this.increment}> + </button>
          <button className='button' onClick={this.decrement}> - </button>
          <button className='button' onClick={this.reset}> reset </button>
        </div>
      </div>
    );
  }
}
