import React from 'react';

export default class B extends React.Component {
  
    constructor(props) {
        super(props)
        console.log('b constr')
    }
    
    render() {
        
        return (
            <div>B - {this.props.xxx}</div>
        );
    }
}