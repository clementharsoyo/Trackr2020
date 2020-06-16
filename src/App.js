import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import axios from 'axios';

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    jobs: []
  }

  changeState = (name) => {
    this.setState({
      username: name,
      loggedIn: !this.state.loggedIn
    })
  }

  logOut = () => {
    this.setState({
      username: ""
    })
  }

  addNewJobs = (newJob) => {
    newJob.id = Math.random();
    let newJobsArray = [...this.state.jobs, newJob]
    this.setState({
      jobs: newJobsArray
    })
    return newJobsArray
  }

  deleteJobs = (id) => {
    console.log(this.state.jobs)
    const filteredJobs = this.state.jobs.filter(job => {
      return job.id !== id
    });
    this.setState({
      jobs: filteredJobs
    })
    const newObj = {
      username: this.state.username,
      update: {
          jobs: filteredJobs
      }
    }
    axios.put("http://localhost:5000/api/users/", newObj)
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/users/", { data : { username : this.state.username } })
    .then(response => {
      this.setState({
        jobs: response.data.jobs
      })
    })
    .catch(error => {
      console.log(error.response.data)
    })
  } 
  
  render() {
    return (
      <Router>
        <div>
          <Navbar username={this.state.username} logOut={this.logOut}/>
          <Route exact path="/" component = { Homepage } />
          <Route path="/login" render={(props)=> <Login changeState = {this.changeState}/>} />
          <Route path="/dashboard" render={(props)=> <Dashboard addNewJobs = {this.addNewJobs} 
              deleteJobs = {this.deleteJobs} jobList={this.state.jobs} username = {this.state.username} />} />
          <Route path="/activity" component = { Activity }/>
        </div>
      </Router>
    );
  }
}


export default App

