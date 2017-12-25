import React from 'react';
import ReactDOM from 'react-dom';
import ReactUpdates from '../node_modules/react-dom/lib/ReactUpdates.js';


export default class Child extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {
          x: props.x
      }
  }
  
  render() {
      console.log('child render')
      return (
          <div>
    		      x in child: {this.state.x}
    		      <br />
    		      <a href="javascript:;" onClick={this.clickHandler}>child_change</a>
          </div>
      );
  }
  
  clickHandler = () => {
      //this.setState({
      //    x: 2
      //})
      this.props.clickHandler()
  }
  
  componentDidMount() {
      /*setTimeout(()=>{
          
         this.setState({x:2, obj: {
             a: 'b'
         }})
      }, 3000)*/
  }
  
}

