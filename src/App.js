import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import TemporaryPage from './components/TemporaryPage';
import Thirdboard from './components/Thirdboard/Thirdboard';
import VerificationPage from './components/Login/VerificationPage.js';
import UsernameForm from './components/UsernameForm.js';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  state = {
    username: '',
    jobs: []
  }

  changeState = (name) => {
    this.setState({
      username: name,
    })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      username: '',
    })
  }

  async getNewAuthToken() {
    axios.defaults.headers.common["authorization"] = localStorage.getItem('refreshtoken')
    return axios.post("http://localhost:5000/api/users/refreshAuthToken")
          .then(newToken => {
            localStorage.setItem('authtoken', newToken.data.authToken)
            axios.defaults.headers.common["authorization"] = newToken.data.authToken
          })
          .catch(err => {console.log(err)})
    }

  componentDidMount() {
    setInterval(this.getNewAuthToken, 897000)
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar username={this.state.username} logOut={this.logOut}/>
          <Route exact path="/" component = { Homepage } />
          <Route path="/login" render={(props)=> <Login changeState = {this.changeState}/>} />
          <Route path="/linkedin" component={() => { global.window && (global.window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=86zqfh241jqet5&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fusers%2Flinkedin');
          return null;}}
          />
          <Route path="/board" render={(props)=> <Thirdboard username = {this.state.username} />} />
          <Route path="/verification" component = { VerificationPage }/>
          <Route path="/usernameForm" component = { UsernameForm } />
          <Route path="/temporaryPage" component = { TemporaryPage } />
        </div>
      </Router>
    );
  }
}


export default App

