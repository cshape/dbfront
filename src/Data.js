import React from 'react';
import './App.css';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data1: '',
      data2: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let cName = event.target.className;
    this.setState({[cName]: event.target.value});
  }

  handleSubmit(event) {
    console.log("some shit was submitted");
    axios.post("https://webhooks-test-696969.herokuapp.com/newdata", {
      name: this.state.name,
      data1: this.state.data1,
      data2: this.state.data2,
      date: Date.now()
    })
    .then(function (response) {
      console.log(response);
    })
    .then (function (error) {
      console.log(error);
    })
    event.preventDefault();
  }

  render() {
    return (
      <form className="verticalForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input className="name" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          DataThing1:
          <input className="data1" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          DataThing2:
          <input className="data2" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="input-thing" type="submit" value="Save" />
      </form>
    );
  }
}

export default Form;