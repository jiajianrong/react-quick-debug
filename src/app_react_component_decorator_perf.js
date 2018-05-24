import React from "react";
import { render } from "react-dom";



class Target extends React.Component {
  constructor(props) {
    super(props);
    console.log('target instanced')
  }
  render() {
    console.log('target rendered')
    return <a>target</a>;
  }
}



function decorate(settings={}) {
    settings.moreProp = '222'
    return function(Comp) {
        return React.cloneElement(Comp, settings)
    }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 1
    }
  }
  componentDidMount() {
      setTimeout(()=>{
          this.setState({count: 2})
      }, 3000)
  }
  render() {
    return <a>{decorate({aProp: 111})(<Target />)}</a>;
  }
}


render(<App />, document.getElementById("app"));
