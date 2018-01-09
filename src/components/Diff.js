import React from 'react';
import B from './B';
import C from './C';

export default class Diff extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {fake:false}
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({fake: true})
        }, 3000)
    }
    
    render() {
        
        return (
            <div className="Main">
                
                { this.state.fake ? 
                    (<div><B key=".0"/><C key=".1"/></div>) : 
                    (<div><C key=".1"/><B key=".0"/></div>) }
                
            </div>
        );
    }
}