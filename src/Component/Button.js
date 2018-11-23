import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { type } = this.props;
        const classType = type === "number" ? 
            "button-type-number" : "button-type-function";

        return (
            <button className={classType}
                onClick={this.props.onClick}
                data-size={this.props.size}
                data-value={this.props.value}
                data-type={this.props.type}
            >
                {this.props.label}
            </button>
        );
    }
}

export default Button;