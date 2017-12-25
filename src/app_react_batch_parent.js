import React from 'react';
import ReactDOM from 'react-dom';
import ReactUpdates from '../node_modules/react-dom/lib/ReactUpdates.js';
import Child from './app_react_batch_child';


class App extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {
          x: 1
      }
  }
  
  render() {
      console.log('parent render')
      return ( 
          <div>
              x in parent: {this.state.x}
              <br />
              <Child x={this.state.x} clickHandler={this.clickHandler} />
          </div>
      );
  }
  
  clickHandler = () => {
      this.setState({
          x: 111
      })
  }
  
}


ReactDOM.render(<App />, document.getElementById('app'));