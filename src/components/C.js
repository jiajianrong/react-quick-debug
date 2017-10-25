import React from 'react';

export default class C extends React.Component {
  
    constructor(props) {
        super(props)
        console.log('c constr')
    }
    
    render() {
        
        return (
            <div>C</div>
        );
    }
}