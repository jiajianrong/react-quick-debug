import React from 'react';
import shallowEqual from '../libs/shallowEqual'

export default class PurePerfChild extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
    
    render() {
        console.log('PurePerfChild render')
        
        return (
            <div>PurePerfChild</div>
        );
    }
}