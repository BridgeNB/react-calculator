import React, { Component } from 'react';

class Display extends Component {
    render() {
        // console.log(this.props.data, this.props.data.join(''));
        // let temp = this.props.data.join('');
        // console.log(temp);
        return <div className="display">{this.props.data}</div>;
    }
}

export default Display;