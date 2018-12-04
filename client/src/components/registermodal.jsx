import React, { Component } from 'react';
import { Button } from 'react-materialize';
import axios from 'axios';
class Registermodal extends Component {
  state = {
    email: "",
    password: ""
  }

  handleRegister = (event)=>{
    event.preventDefault();
    console.log(this.state);
    const user = this.state;
    axios.post('/api/users', user).then(res => {
      window.location = "/";
    })
  
  }
  handleInput = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="First Name" onChange={this.handleInput} name="firstName" id="firstName" type="text" class="validate" />
              <label for="email">First Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" name="lastName" onChange={this.handleInput} id="lastName" type="text" class="validate" />
              <label for="password">Last Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="E-mail" name="email" id="email" onChange={this.handleInput} type="email" class="validate" />
              <label for="email">E-mail</label>
            </div>
            <div className="input-field col s6">
              <input name="password" placeholder="Create Password" onChange={this.handleInput} id="password" type="password" class="validate" />
              <label for="email">Password</label>
            </div>
            <Button waves='light' id="button" onClick={this.handleRegister}>REGISTER</Button>
          </div>
        </form>
      </div>
    );

  }
};


export default Registermodal;