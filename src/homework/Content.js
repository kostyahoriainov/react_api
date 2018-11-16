/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import List from './List';
import Option from './Option';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.getInitialState()
        }
    }

    getInitialState = () => {
        this.props.data.forEach((item) => {
            item.flag = false;})
        return this.props.data
    }

    sortNameData = (a, b) => {
        if (a.name < b.name) 
            { return -1; }
        if (a.name > b.name) 
            { return 1; }
        return 0;
    }

    unique = (arr) => {
        const newArr = ['All'];
        for (let i = 0; i < arr.length; i++) {
            const age = arr[i].age;
            if (newArr.indexOf(age) === -1) {
                newArr.push(age);
            }
        }
        return newArr
    }

    filterUsers = () => {
        if (this.selectTest.value !== 'All')
        {
            const selectedValue = parseInt(this.selectTest.value);
            const usersData = this.getInitialState();
            const newState = [];

            usersData.forEach((item) => {
                newState.push(item);
                if (item.age !== selectedValue) {
                    item.flag = true;
                }
            })


            this.setState({
                users: newState
            })
        } else {
            this.setState({
                users: this.getInitialState()
            })
        }


    }

    render() {
        const users = this.state.users;
        const dataSortedName = users.sort(this.sortNameData);
        const userList = dataSortedName.map((item) => <List key={item.id} allProps={item}/>);

        const selectArray = this.unique( users.sort((a,b) => a.age - b.age ));
        const selectList = selectArray.map((item) => <Option key={item} props={item}/>);

        return (
            <div>
                <select ref={(select) => this.selectTest = select} onChange={this.filterUsers}>
                    {selectList}
                </select>
                <ul>
                    {userList}
                </ul>
            </div>
        )
    }
}

export default Content;