import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import Thirdboard from './components/Thirdboard/Thirdboard';
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

  editJobs = (arr) => {
    this.setState({
      ...this.state,
      jobs: arr
    })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      username: '',
    })
  }

  addNewJobs = (newJob) => {
    newJob.id = Math.random().toString()
    let newJobsArray = [...this.state.jobs, newJob]
    this.setState({
      jobs: newJobsArray
    })
    return newJobsArray
  }

  deleteJobs = (id) => {
    console.log(this.state.jobs)
    const deletedJob = this.state.jobs.find(job => {
      return job.id === id
    })
    console.log(deletedJob)
    const filteredJobs = this.state.jobs.filter(job => {
      return job.id !== id
    });
    this.setState({
      jobs: filteredJobs
    })
    const newObj = {
      username: localStorage.getItem('username'),
      delete: true,
      updatedJob: deletedJob,
      update: {
          jobs: filteredJobs
      }
    }
    axios.put("http://localhost:5000/api/users/", newObj)
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/users/", { data : { username : localStorage.getItem('username') } })
    .then(response => {
      this.setState({
        jobs: response.data.jobs
      })
    })
    .catch(error => {
      console.log(error)
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
          <Route path="/thirdboard" render={(props)=> <Thirdboard addNewJobs = {this.addNewJobs} 
              deleteJobs = {this.deleteJobs} jobList={this.state.jobs} 
              editJobs = {this.editJobs} username = {this.state.username} />} />
        </div>
      </Router>
    );
  }
}


export default App

