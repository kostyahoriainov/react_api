/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import AgeSpan from './AgeSpan';
import './List.css'

class List extends Component {
    render() {
        const props = this.props.allProps;
        return (
            <li className={props.flag? 'none' : ''}>{props.name} : <AgeSpan age={props.age}/></li>
        )
    }
}

export default List;