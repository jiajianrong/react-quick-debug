import React from 'react';

import ReactDOM from 'react-dom';

import Diff from './components/Diff'
import Skip from './components/Skip'

class App extends React.Component {
  render(){ // Every react component has a render method.
    return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <div>
        Hello World
		<Diff/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));