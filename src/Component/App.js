import React, { Component } from 'react';
import math from 'mathjs';
import update from 'immutability-helper';

import Button from './Button';
import Display from './Display';
import Console from './Console';

class App extends Component {
  constructor() {
    super();
    this.state = { formula: [] }
  }
  evalFormula = () => {
    let result = this.state.formula.join('');
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 7});
      result = String(result);
      this.setState({
        formula: [result],
      })
    }
  }
 
  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          formula: [],
        })
        break
      case 'equal':
        this.evalFormula()
        break
      default:
        const newOperations = update(this.state.formula, {
          $push: [value],
        })
        this.setState({
          formula: newOperations,
        })
        break
    }
  }
  render() {
    const result = this.state.formula.join('');
    // console.log(result);
    return (
      <main className="react-calculator">
        <Display data={result} />
        <Console>
          <Button onClick={this.handleClick} label="7" value="7" type="number" />
          <Button onClick={this.handleClick} label="8" value="8" type="number" />
          <Button onClick={this.handleClick} label="9" value="9" type="number" />
          <Button onClick={this.handleClick} label="+" value="+" type="function" />

          <Button onClick={this.handleClick} label="4" value="4" type="number" />
          <Button onClick={this.handleClick} label="5" value="5" type="number" />
          <Button onClick={this.handleClick} label="6" value="6" type="number" />
          <Button onClick={this.handleClick} label="-" value="-" type="function" />

          <Button onClick={this.handleClick} label="1" value="1" type="number" />
          <Button onClick={this.handleClick} label="2" value="2" type="number" />
          <Button onClick={this.handleClick} label="3" value="3" type="number" />
          <Button onClick={this.handleClick} label="*" value="*" type="function" />

          <Button onClick={this.handleClick} label="0" value="0" type="number" />
          <Button onClick={this.handleClick} label="." value="." type="function" />
          <Button label="" value="null" type="number" />
          <Button onClick={this.handleClick} label="/" value="/" type="function" />

          <Button onClick={this.handleClick} label="C" size="2" value="clear" type="function" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" type="function" />
        </Console>
      </main>
    );
  }
}

export default App;