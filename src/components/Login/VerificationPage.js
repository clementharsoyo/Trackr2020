import React, { Component } from 'react';
import Logo from './logo.png';
import './Login.css';
import axios from 'axios';

class VerificationPage extends Component {

    sendVerificationEmail = () => {
        axios.defaults.headers.common["authorization"] = localStorage.getItem('authtoken')
        return axios.get("http://localhost:5000/api/users/sendVerificationEmail")
    }

    render() {
      return (
      <div className="login">
        <div className="login__Aside">
          <img className="centerLogo" src={Logo} height="375" width="500"></img>
        </div>
        <div className="App__Form">
            <h3>Welcome to Trackr!</h3>
            <h5>For your own security, please verify your email by clicking the button below</h5>
            <button class="btn waves-effect waves-light" onClick={this.sendVerificationEmail}>Verify Email
                <i class="normal material-icons right">send</i></button>
        </div>
      </div>
      )
    }
}

export default VerificationPage