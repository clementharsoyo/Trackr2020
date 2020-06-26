import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Activity from './components/Activity';
import Thirdboard from './components/Thirdboard/Thirdboard';
import VerificationPage from './components/Login/VerificationPage.js';
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

  editExistingJob = (editedJob) => {
    const filteredJobs = this.state.jobs.filter(job => {
      return job.id !== editedJob.id
    })
    let newJobsArray = [...filteredJobs, editedJob]
    console.log(newJobsArray)
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

  async getNewAuthToken() {
    axios.defaults.headers.common["authorization"] = localStorage.getItem('authtoken')
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

  /*componentDidMount() {
    axios.defaults.headers.common["authorization"] = localStorage.getItem('authtoken')
    axios.get("http://localhost:5000/api/users/")
    .then(response => {
      this.setState({
        jobs: response.data.jobs
      })
    })
    .catch(error => {
      console.log(error)
    })
  }*/
  
  render() {
    return (
      <Router>
        <div>
          <Navbar username={this.state.username} logOut={this.logOut}/>
          <Route exact path="/" component = { Homepage } />
          <Route path="/login" render={(props)=> <Login changeState = {this.changeState}/>} />
          <Route path="/activity" component = { Activity }/>
          <Route path="/thirdboard" render={(props)=> <Thirdboard addNewJobs = {this.addNewJobs} 
              deleteJobs = {this.deleteJobs} jobList={this.state.jobs} editExistingJob={this.editExistingJob}
              editJobs = {this.editJobs} username = {this.state.username} />} />
          <Route path="/verification" component = { VerificationPage }/>
        </div>
      </Router>
    );
  }
}


export default App

