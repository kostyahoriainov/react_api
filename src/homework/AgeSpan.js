/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class AgeSpan extends Component {
    render() {
        return (
            <span><b>{this.props.age}</b></span>
        )
    }
}

export default AgeSpan;