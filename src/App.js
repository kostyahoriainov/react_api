/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class App extends Component { 
  state = {val: 0}

  update = e => this.setState({val: this.state.val + 1})

  componentDidMount(){
    console.log('did mount')
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update, 1000)
    this.inc2 = setInterval(ReactDOM.unmountComponentAtNode(document.getElementById('a')), 4000)
  }

  componentWillUnmount(){
    console.log('will unmount')
    clearInterval(this.inc)
  }

  render() {
    console.log('render')
    return(
        <div id="a">
          <button onClick={this.update}>
            {this.state.val}
          </button>
        </div>
      )
  }
}

 
export default App;
