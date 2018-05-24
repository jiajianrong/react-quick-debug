import React from "react";
import { render } from "react-dom";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        input: 'init',
        textareaInput: 'init',
        selection: 2,
        checkboxInput1: false,
        checkboxInput2: false,
        checkboxInput3: true,
        radioInput: 2,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox'/* || target.type === 'radio'*/)
                    ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  
  render() {
      return (
      <form onSubmit={this.handleSubmit}>
          
          <label>Use value and checked to set initial value</label>
          <br />
          
          
          <input name="input" value={this.state.input} type="text" onChange={this.handleChange} />
          <br />
          
          
          <textarea name="textareaInput" value={this.state.textareaInput} onChange={this.handleChange} />
          <br />
          
          
          <select name="selection" value={this.state.selection} onChange={this.handleChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <br />
          
          
          <input name="checkboxInput1" type="checkbox"
                 checked={this.state.checkboxInput1} onChange={this.handleChange} />
          <input name="checkboxInput2" type="checkbox"
                 checked={this.state.checkboxInput2} onChange={this.handleChange} />
          <input name="checkboxInput3" type="checkbox"
                 checked={this.state.checkboxInput3} onChange={this.handleChange} />
          <br />
          
          
          <input type="radio" name="radioInput" value="1"
                 checked={this.state.radioInput=='1'} onChange={this.handleChange} />
          <input type="radio" name="radioInput" value="2"
                 checked={this.state.radioInput=='2'} onChange={this.handleChange} />
          <input type="radio" name="radioInput" value="3"
                 checked={this.state.radioInput=='3'} onChange={this.handleChange} />
          <br />
          
          
          <input type="submit" value="Submit" />
      </form>
      );
  }
}



render(<App />, document.getElementById("app"));
