import React, { Component as C } from 'react';

class Counter extends C {
  constructor(props) {
    super();
    const { votes } = props;
    this.state = { votes };
  }
  plus() {
    const votes = +this.state.votes + 1;
    this.setState({ votes });
  }
  minus() {
    const votes = this.state.votes > 0 ? +this.state.votes - 1 : 0;
    this.setState({ votes });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.plus()}><span>+</span></button>
        <button onClick={() => this.minus()}>-</button>
        <Stars length={this.state.votes} />
      </div>);
  }
}
const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

export default () => (
  <div>
    <Counter votes="3" />
    <Counter votes="10" />
  </div>);
