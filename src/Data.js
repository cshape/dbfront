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

  componentDidMount() {
    axios.get("https://webhooks-test-696969.herokuapp.com/newdata")
      .then (data => {
        console.log(data);
        this.setState({
          name: data.data.name,
          data1: data.data.data1,
          data2: data.data.data2
        })
      })
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
    alert("congratulations! your shit was saved.")
  }

  render() {
    return (
      <form className="verticalForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input className="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          DataThing1:
          <input className="data1" type="text" value={this.state.data1} onChange={this.handleChange} />
        </label>
        <label>
          DataThing2:
          <input className="data2" type="text" value={this.state.data2} onChange={this.handleChange} />
        </label>
        <input className="input-thing" type="submit" value="Save" />
      </form>
    );
  }
}

export default Form;