import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class X extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
    
    setTimeout( () => {
        this.setState({a:2}, ()=>{
            this.setState({a:3})
        })
    }, 2000 )
  }
  render() {
    return <a>{this.state.a}</a>;
  }
}

const App = () => (
  <div style={styles}>
    <X />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("app"));
