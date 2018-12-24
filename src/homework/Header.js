/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Header extends Component {
    render() {
        const data = this.props.data;
        return (
            <h1>{data.title}</h1>
        )
    }
}

export default Header;