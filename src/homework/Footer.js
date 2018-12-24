/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';


class Footer extends Component {
    render() {
        const data = this.props.data;
        return (
            <h3>{data.copyright}</h3>
        )
    }
}

export default Footer