import React from 'react';
import ReactDOM from 'react-dom';



class Child extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {y: 1}
    }
    
    componentWillMount() {
        console.log('child componentWillMount', this.state)
        this.setState({y: 2}) // merge state, 而不是re-render
        console.log('child componentWillMount', this.state)
    }
    
    componentDidMount() {
        console.log('child componentDidMount', this.state)
    }
    
    /*getDefaultProps() {
        console.log('child getDefaultProps')
    }
    
    getInitialState() {
        console.log('child getInitialState')
    }*/
    
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps', this.state)
        this.setState({y: 3}) // merge state, 而不是re-render
        console.log('child componentWillReceiveProps', this.state)
    }
    
    shouldComponentUpdate() {
        console.log('child shouldComponentUpdate', this.state)
        return true
    }
    
    componentWillUpdate() {
        console.log('child componentWillUpdate', this.state)
    }
    
    componentDidUpdate() {
        console.log('child componentDidUpdate', this.state)
        console.log('y' , this.state.y)
    }
    
    render() {
        console.log('child render', this.state)
        return (
            <div><span>child</span></div>
        )
    }
    
}



class Parent extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {x: 1}
    }
  
    render() {
        return ( 
            <div><Child x={this.state.x}/></div>
        )
    }
  
    componentDidMount() {
        setTimeout( e => this.setState({x: 2}), 3000 )
    }
  
}



ReactDOM.render(<Parent />, document.getElementById('app'));