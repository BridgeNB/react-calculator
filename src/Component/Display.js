import React, { Component } from 'react';

class Display extends Component {
    render() {
        console.log(this.props.data);
        return <div className="display">{this.props.data}</div>;
    }
}

export default Display;