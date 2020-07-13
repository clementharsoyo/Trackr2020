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
            <h3 className="center">Welcome to Trackr!</h3>
            <h5 className="center">For your own security, please check your email to confirm your account</h5>
            <button className="btn waves-effect waves-light sendEmail" onClick={this.sendVerificationEmail}>Resend Verification Email
                <i class="normal material-icons right">send</i></button>
        </div>
      </div>
      )
    }
}

export default VerificationPage