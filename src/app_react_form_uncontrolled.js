import React from "react";
import { render } from "react-dom";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
    console.log(this.textareaInput.value);
    console.log(this.fileInput.files[0] && this.fileInput.files[0].name);
    console.log(this.selection.value);
    
    console.log(this.checkboxInput1.checked, this.checkboxInput1.value);
    console.log(this.checkboxInput2.checked, this.checkboxInput2.value);
    console.log(this.checkboxInput3.checked, this.checkboxInput3.value);
    
    console.log(this.radioInput1.checked, this.radioInput1.value);
    console.log(this.radioInput2.checked, this.radioInput2.value);
    console.log(this.radioInput3.checked, this.radioInput3.value);
  }
  
  
  render() {
      return (
      <form onSubmit={this.handleSubmit}>
          
          <label>Use defaultValue and defaultChecked to set initial value</label>
          <br />
          
          
          <input defaultValue="input" type="text" ref={(input) => this.input = input} />
          <br />
          
          
          <textarea defaultValue="textarea" ref={input => {this.textareaInput = input}} />
          <br />
          
          
          <input type="file" ref={input => {this.fileInput = input}} />
          <br />
          
          
          <select defaultValue="2" ref={input => {this.selection = input}} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>
          <br />
          
          
          <input type="checkbox" value="1" ref={input => {this.checkboxInput1 = input}} />
          <input type="checkbox" value="2" ref={input => {this.checkboxInput2 = input}} defaultChecked />
          <input type="checkbox" value="3" ref={input => {this.checkboxInput3 = input}} />
          <br />
          
          
          <input type="radio" name="radio" value="1" ref={input => {this.radioInput1 = input}} />
          <input type="radio" name="radio" value="2" ref={input => {this.radioInput2 = input}} defaultChecked />
          <input type="radio" name="radio" value="3" ref={input => {this.radioInput3 = input}} />
          <br />
          
          
          <input type="submit" value="Submit" />
      </form>
      );
  }
}



render(<App />, document.getElementById("app"));
