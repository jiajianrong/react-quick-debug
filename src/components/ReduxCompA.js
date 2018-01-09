import React from 'react';
import {connect} from 'react-redux';


let count = 0

class ReduxCompA extends React.Component {
    
    render() {
        
        console.log('redux_comp_a reducer call: ' + (++count))
        
        return (
            <div className="Main">
                    
                    <b>ReduxCompA</b>
                    <ul>
                    
                    {
                        this.props.users.map((user, index) => {
                            return (
                                <li key={user.id}>{user.id} | {user.name}</li>
                            )
                        })
                    }
                    
                    </ul>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {users: state.users}
};

export default connect(mapStateToProps)(ReduxCompA);