import React from 'react';
import B from './B';
import C from './C';
import D from './D';

export default class Skip extends React.Component {
    
	constructor(props) {
		super(props)
		this.state = {
			xxx: 222
		}
		setTimeout(()=>{this.setState({xxx: 111})}, 5000)
	}
    
    render() {
        
        return (
            <div className="Main">
                
				<D>
					<B xxx={this.state.xxx}/><C/>
				</D>
                
            </div>
        );
    }
}