import React from 'react';
import ReactDOM from 'react-dom';
//import ReactUpdates from '../node_modules/react-dom/lib/ReactUpdates.js';


class App extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            x: 1
        }
    }
  
    render() {
        console.log('app render')
        return (
            <div>
                {this.state.x}
                <a href="javascript:;" onClick={()=>this.onClick()}>click</a>
            </div>
        );
    }
  
    componentDidMount() {
        setTimeout( () => {
            this.setState({x:4})
            console.log(this.state)
            this.setState({x:5})
            console.log(this.state)
        }, 3000)
        
        this.setState({x:2})
        console.log(this.state)
        this.setState({x:3})
        console.log(this.state)
    }
  
    onClick() {
        this.setState({x:6})
        console.log(this.state)
        this.setState({x:7})
        console.log(this.state)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));