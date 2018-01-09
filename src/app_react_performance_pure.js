import React from 'react';
import ReactDOM from 'react-dom';
import PurePerfChild from './components/PurePerfChild'


class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            x: 1
        }
    }
    
    componentDidMount() {
        setTimeout( () => {
            this.setState({
                x: 2
            })
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