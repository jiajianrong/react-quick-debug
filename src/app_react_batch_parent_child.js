import React from 'react';
import ReactDOM from 'react-dom';
//import ReactUpdates from '../node_modules/react-dom/lib/ReactUpdates.js';



class Child extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            y: 3
        }
    }
  
    render() {
        console.log(`child render, this.props.x=${this.props.x}, this.state.y=${this.state.y}`)
        return (
            <div>
                x in child: {this.props.x}
                <br />
                y in child: {this.state.y}
                <br />
                <a href="javascript:;" onClick={this.clickHandler}>change</a>
            </div>
        );
    }
    
    clickHandler = () => {
        this.setState({
            y: 4
        })
        this.props.clickHandler()
    }
  
}





class Parent extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            x: 1
        }
    }
  
    render() {
        console.log(`parent render, this.state.x=${this.state.x}`)
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
            x: 2
        })
    }
  
}


ReactDOM.render(<Parent />, document.getElementById('app'));