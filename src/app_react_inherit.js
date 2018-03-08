import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {
    componentDidMount() {
        console.log('parent mounted')
    }
    render() {
        console.log((this.getMoreProp&&this.getMoreProp()), this.prototypeProp)
        return (
            <div>parent - {this.props.abc} - {this.props.moreProp}</div>
        )
    }
}

/**
 * 原理1-继承代理

class Child extends Parent {
    componentDidMount() {
        console.log('child mounted')
        super.componentDidMount()
    }
    render() {
        return (
            <div>child - {this.props.abc} {super.render()}</div>
        )
    }
}
 */



/**
 * 原理2-组合代理

class Child extends React.Component {
    render() {
        return (
            <Parent {...this.props} moreProp="222"/>
        )
    }
}
 */



/**
 * 原型mixin

function decorate(settings={}) {
    settings.getMoreProp = function() {return '333'}
    return function(Comp) {
        Object.assign(Comp.prototype, settings)
        return Comp
    }
}

let Child = decorate({prototypeProp: 'prototypeProp'})(Parent)
 */



/**
 * 装饰继承
 
function decorate() {
    return function(Comp) {
        return class extends Comp {
            getMoreProp() {return '444'}
        }
    }
}

let Child = decorate()(Parent)
*/



/**
 * 装饰代理

function decorate() {
    return function(Comp) {
        return class extends React.Component {
            render() {
                return (
                    <div>
                        <input /> <Comp {...this.props} />
                    </div>
                )
            }
        }
    }
}

let Child = decorate()(Parent)
*/ 



/**
 * 原理-HOC
 */
function decorate(settings={}) {
    settings.moreProp = '222'
    return function(Comp) {
        return React.cloneElement(Comp, settings)
    }
}

class Child extends React.Component {
    render() {
        return (
            <div>
            {decorate({
                ...this.props
            })(<Parent />)}
            </div>
        )
    }
}





class App extends React.Component {
    render() {
        return (
            <Child abc="111"/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));