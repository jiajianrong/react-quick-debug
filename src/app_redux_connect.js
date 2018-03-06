import React from 'react';
import ReactDOM from 'react-dom';


let store = {
    users: [{
        id: '1234567',
        name: 'jiajianrong',
    },{
        id: '2345678',
        name: 'abcde',
    }],
    onlineUserId: '1234567',
}


class Container extends React.Component {
    render() {
        let id = this.props.onlineUserId
        let allUsers = this.props.users
        let onlineUserName = ( allUsers.filter(user=>(user.id===id)) )[0].name
        return (
            <div> current online user is: {onlineUserName} </div>
        )
    }
}


function connect(mapStateToProps) {
    let state = mapStateToProps(store)
    return (Comp) => {
        return class extends React.Component {
            render() {
                return <Comp {...state} />
            }
        }
    }
}


Container = connect((store)=>{
    return {
        users: store.users,
        onlineUserId: store.onlineUserId,
    }
})(Container)



class App extends React.Component {
    render() {
        return (
            <Container />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));