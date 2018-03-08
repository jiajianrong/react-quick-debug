import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {
    render() {
        return (
            <div>children: {this.props.children}</div>
        )
    }
}

/*
function decorate(CompElement) {
    return React.cloneElement(CompElement, {}, <p><a href="">aaa</a>,<a href="">aaa</a></p>)
}
class App extends React.Component {
    render() {
        return (
            decorate(<Parent/>)
        )
    }
}
*/

function decorate(CompClass) {
    return class extends React.Component {
        render() {
            return (
                <CompClass>
                    <a href="">aaa</a>,<a href="">aaa</a>
                </CompClass>
            )
        }
    }
}
Parent = decorate(Parent)



ReactDOM.render(<Parent/>, document.getElementById('app'));