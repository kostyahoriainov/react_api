/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types'
import './App.css';

// 2.1
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//       </div>
//     );
//   }
// }

// 2.2
// class App extends Component {
//   render() {
//     return [
//       <div key="first"> Node 1</div>,
//       <div key="second"> Node 2</div>
//     ];
//   }
// }

// 2.3
// class App extends Component {
//   render() {
//     return <React.Fragment>
//       <div> Node 1</div>
//       <div> Node 2</div>
//     </React.Fragment>
//   }
// }

// 3
// class App extends Component {
//   state = {
//     value: ''
//   }

//   handleChange = ({target}) => {
//     this.setState({value: target.value})
//   }

//     render() {
//       return (
//         <div>
//           <h1>{this.state.value}</h1>
//           <Widget change={this.handleChange} />
//         </div>
//       )
//     }
//   }

//   const Widget = props => <input onChange={props.change} type="text" />

// 4
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


/**
 *  Написать custom валидацию  prop  по имени  txt  передаваемого в компонент 
   - проверить наличие prop по имени name
   - проверить  тип string 
   - проверить  чтобы длина prop по имени name была не менее 5 символов  
class App extends Component {
  render() {
    return(
      <div className="container">
        <Title txt={'asdssa'} txt1={'asd'}/>
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
    if(props[propName].length < 5) {
      return new Error(`Too short ${propName}`)
    }

  }
  
}
*/

/** Передача стилей bad practice */
/*
class App extends Component {
  render() {
    return (
      <div className="container" style={{paddingLeft: 30}}>
        <span>  
          test
        </span>
      </div>
    )
  }
}
*/
/** Передача стилей good practice */
/*
class App extends Component {
  static styles = {
    className: 'container',
    style: {paddingLeft: 30}
  }
  render() {
    return (
      <div>
        <span className='testetset' {...App.styles}>  
          test
        </span>
        <Title  styles={App.styles}/>
      </div>
    )
  }
}

const Title = (props) => <h1 {...props.styles}>tittle</h1>
*/

/** В компоненте Box уже имеются props  className и style
     Написать код, чтобы можно было дополнительно их компонента App в компонент Box передавать  style, className и они НЕ перезаписывались а добавлялись к стилям и классаи компонента Box
 */
/**
 * class App extends Component {
  render() {
    return (
      <div className="container">
        <Box className="inner" style={{ backgroundColor: 'lightblue' }} />
      </div>
    );
  }
}

const Box = ({style, className='', ...rest}) =>
  <div className={`box ${className}`} style={{ paddingLeft: 30, ...style}}   {...rest}>Small box</div>
 */


 /** context no */
// const Tail =  props => <h1>{props.name}</h1>

// const Lift = props => <Tail  name={props.name}/>

// class App extends React.Component {
//     state = {
//         name: 'Bill'
//     }

//     render(){
//         return <Lift name={this.state.name}/>
//     }
// }

 /** context yes */
// const Context = React.createContext();

// class ContextProvider extends Component {
//   state = {
//     name: 'Bill'
//   }

//   render(){
//     return <Context.Provider value={{state: this.state}}>
//       {this.props.children}
//     </Context.Provider>

//   }
// }
// const Tail = () => <Context.Consumer>
//   {(context) => (<h1>{context.state.name}</h1>)}
// </Context.Consumer>

// const Lift = () => <Tail />

// const App = () => (
//      <ContextProvider>
//       <Lift />
//     </ContextProvider>)
       


// onClick, onDoubleClick, onKeyPress, onKeyUp,
// onCopy, onCut, onPaste,
// onFocus, onBlur,
// onMouseDown, onMouseUp, onMouseOver,
// onTouchStart, onTouchMove, onTouchEnd  (for mobile)

// class App extends Component {
//   state = { currentEvent: ''}
//   update = e => this.setState({currentEvent: e.type})
//   render() {
//       return (
//           <div className="container">
//               <textarea  onClick={this.update} />
//              <h1>{this.state.currentEvent}</h1>
//           </div>
//       );
//   }
// }

// class App extends Component {
//   state = {
//     val: ''
//   }

//   handleChange = ({target}) => this.setState({val: target.value})

//   render() {
//     const {val} = this.state;
//     return (
//       <div>
//         <h1>{val}</h1>
//         <input type="text" value={val} onChange={this.handleChange} />
//       </div>
//     )
//   }
// }

// class App extends Component {
//    state = {
//      a: '',
//      b: '',
//      c: '',
//      d: ''
//    }

//    update = e => {
//      this.setState({
//        a: this.a.value,
//        b: this.refs.b.value,
//        c: ReactDOM.findDOMNode(this.c).value,
//        d: this.d.refs.ind.value
//      })
//    }


//    render(){ 
//      // 1 самый правильный и верный вариант, 2 устаревший так делать не надо, 3 так просто делать не надо 4 ссылка на втутр. рефсу компонента смотри стейт
//       return ( <div>
//          <input ref={(node) => this.a = node} type="text" onChange={this.update}/> {this.state.a}
//          <input ref="b" type="text" onChange={this.update}/> {this.state.b}
//          <input ref={(node) => this.c = node} type="text" onChange={this.update}/> {this.state.c}
//          <Widget ref={(node) => this.d = node}   update={this.update}/> {this.state.d}

//       </div>
//      );   
//    } 
// }
// class Widget extends Component {
//   render() {
//     return (<input ref="ind"  onChange={this.props.update} type="text" />)
//   }
// }

 
export default App;
