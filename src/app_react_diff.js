import React from 'react';

import ReactDOM from 'react-dom';

import Diff from './components/Diff'
import Skip from './components/Skip'

class App extends React.Component {
  render(){
    return(
        <div>
            Hello World
            <Diff/>
        </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));