import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import ReduxCompA from './components/ReduxCompA'



function reducer( previousState={
    users: [ {
        id: 1,
        name: 'jiajianrong',
        age: 22,
    } ],
}, action ) {

    switch (action.type) {

        case 'user-change':
            return {
                users: [ {
                    id: 2,
                    name: 'jiajianrong',
                    age: 23,
                } ],
            }
        
        default: 
            return previousState
    }

}



let createAppStore = applyMiddleware()(createStore);
let store = createAppStore(reducer/*, {}*/);

window.globalStore = store
window.globalReducer = reducer




class App extends React.Component {
    
    addUser = () => {
        store.dispatch({ 
            type: 'user-change',
            payload: null,
        })
    }
    
    
    render() {
        return (
            <Provider store={store}>
                <div>
                    <button onClick={this.addUser}>add user</button>
                    <ReduxCompA/>
                </div>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));