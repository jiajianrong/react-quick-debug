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
            this.setState({fake: !this.state.fake})
        }, 3000)
    }
    
    render() {
        
        return (
            <div className="Main">
                
				<B/>
				
                { this.state.fake && (<B xxx="111"/>) }
				
				<B/>
                
            </div>
        );
    }
}