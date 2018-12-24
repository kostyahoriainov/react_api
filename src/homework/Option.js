/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
            <option value={this.props.props}>{this.props.props}</option>
        )
    }
}

export default Option;