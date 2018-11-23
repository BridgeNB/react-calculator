import React, { Component } from 'react'

class Console extends Component {
  render() {
    return <div className="console"> {this.props.children} </div>
  }
}

export default Console;