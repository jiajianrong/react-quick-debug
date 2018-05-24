import React from "react";
import { render } from "react-dom";



class Target extends React.Component {
  constructor(props) {
    super(props);
    console.log('target2 instanced')
  }
  render() {
    console.log('target2 rendered')
    return <a>target ${this.props.demoProp}</a>;
  }
}



class Route extends React.Component {
  render() {
    let target = this.props.comp;
    return React.createElement(target, {demoProp: this.props.demoProp});
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
    return <a> <Route comp={Target} demoProp={this.state.count} /> </a>;
  }
}



render(<App />, document.getElementById("app"));
