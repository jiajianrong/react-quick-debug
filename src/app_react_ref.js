import React from "react";
import { render } from "react-dom";


class App extends React.Component {
  
  constructor (props) {
      super(props)
  }
  
  componentDidMount() {
      console.log(this._name)
      console.log(this._name.value)
  }
  render() {
      return (
          <div> 
              <input value="abc" ref={ input => this._name = input } />
          </div>
      );
  }
}



render(<App />, document.getElementById("app"));
