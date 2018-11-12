/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// 2.1
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>   
//       </div>
//     );
//   }
// }

// 2.2
// class App extends Component {
//   render() {
//     return [
//       <div key="first">Node 1</div>,
//       <div key="second">Node 2</div>
//     ];
//   }
// }

// 2.3
// class App extends Component {
//   render() {
//     return <React.Fragment>
//       <div>node1</div>,
//       <div>node2</div>
//     </React.Fragment>;
//   }
// }

// 3
// class App extends Component {
//   state = {
//     value: ''
//   }

//   handleChange = ({ target }) => (
//     this.setState({ value: target.value })
//   )

//   render() {
//     return (
//       <div>
//         <h1>{this.state.value}</h1>
//         <Widget change={this.handleChange}/>
//       </div>
//     )
//   }
// }

// const Widget = props => <input onChange={props.change} type="text"/>

// 4
// class App extends Component {
//   render() {
//     return (
//       <h1>{this.props.text}</h1>
//     )
//   }
// }

// App.defaultProps = {
//   text: 'test'
// }

// App.propTypes = {
//   text: PropTypes.string.isRequired
// }

//5
// class App extends Component {
//   render() {
//     return(
//       <h1>{this.props.text}</h1>
//     )
//   }
// }

// App.defaultProps = {
//   text: 'test'
// }

// App.propTypes = {
//   text(props, propName, componentName) {
//     if (typeof props[propName] !== "string") {
//       console.log(`Should pass the string for ${propName}
//       in ${componentName + props +  propName} but get type ${typeof props[propName]}`)
//   }
// }
// }

// const propsValidation = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== "string") {
//       console.log(`Should pass the string for ${propName}
//       in ${componentName + props +  propName} but get type ${typeof props[propName]}`)
//     }
//   }
// }

// App.propTypes = {
//   text: propsValidation.string
//   text1: propsValidation.string
// }

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title txt={'asds'} />
      </div>
    )
  }
}

const Title = (props) => <h1>{props.txt}</h1>



Title.propTypes = {
  // eslint-disable-next-line react/require-default-props
  txt(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (typeof props[propName] !== "string") {
      return new Error(`Should pass the string for ${propName}`)
    }
    if (props[propName].length < 5) {
      return new Error(`Too short ${propName}`)
    }

  }

}

export default App;
