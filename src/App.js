/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Header from './homework/Header';
import Footer from './homework/Footer';
import header_data from './homework/data/header_data';
import footer_data from './homework/data/footer_data';
import Content from './homework/Content';
import users from './homework/data/users_data';


class App extends Component {
    render() {
        return(
            <div>
                <Header data={header_data}/>
                <Content data={users}/>
                <Footer data={footer_data}/>
            </div>
        )
    }
}
 
export default App;