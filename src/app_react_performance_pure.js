import React from 'react';
import ReactDOM from 'react-dom';
import shallowEqual from './libs/shallowEqual';


export default class PurePerfChild extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
    
    render() {
        console.log('PurePerfChild render')        
        return (
            <div>PurePerfChild</div>
        )
    }
}



class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {x: 1}
    }
    
    componentDidMount() {
        setTimeout( () => {
            this.setState({x: 2})
        }, 3000 )
    }
    
    render() {
        console.log('PurePerfParent render')
        
        // better not to write below code(makes immutable disfunctional), 
        // replace it by
        // <PurePerfChild clickHandler={this.clickHandler}/>
        return (
            <PurePerfChild clickHandler={ ()=>this.clickHandler() }/>
        )
    }
    
    clickHandler = () => {
        // empty
    }
}


ReactDOM.render(<App />, document.getElementById('app'));