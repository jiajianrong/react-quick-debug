import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import ReduxCompA from './components/ReduxCompA'
import ReduxCompB from './components/ReduxCompB'


class App extends React.Component {
    
    addUser = () => {
        store.dispatch({ 
            type: 'user-add',
            payload: {id: Math.random(), name: 'user'}
        })
    }
    
    
    addProduct = () => {
        store.dispatch({ 
            type: 'product-add',
            payload: {id: Math.random(), name: 'product'}
        })
    }
    
    
    render() {
        return (
            <Provider store={store}>
                <div>
                    <button onClick={this.addUser}>add user</button>
                    <button onClick={this.addProduct}>add product</button>
                    <ReduxCompA/>
                    <ReduxCompB/>
                </div>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));