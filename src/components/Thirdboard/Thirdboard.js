import React , { Component } from 'react'
import "./Thirdboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { trash } from "@fortawesome/free-solid-svg-icons";
import AddJobs from "../AddJobs.js"
import EditJobs from "../EditJobs.js"
import Thirdcard from "./Thirdcard.js"
import axios from 'axios'


class Thirdboard extends Component {

    state = {
        showForm: false,
        jobs: []
    }

    onDragStart = (e, id) => {
        console.log('dragged', id)
        e.dataTransfer.setData("id", id)
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e, newStatus) => {
        let id = e.dataTransfer.getData("id")
        console.log('dropped' + id)
        /*let newJobData = this.props.jobList.filter((job) => {
            if (job.id === id) {
                job.status = newStatus
            }
            return job
        })*/
        let newJobData = this.state.jobs.filter((job) => {
            if (job.id === id) {
                job.status = newStatus
            }
            return job
        })
        console.log(newJobData)
        /*this.props.editJobs(newJobData)*/
        this.editJobs(newJobData)
        const newObj = {
            updated: true,
            /*updatedJob: this.props.jobList.find((job) => {
                if (job.id === id) {
                    return true
                }
            }),*/
            updatedJob: this.state.jobs.find((job) => {
                if (job.id === id) {
                    return true
                }
            }),
            update: {
                jobs: newJobData
            }
        }
        console.log(newObj)
        axios.put("http://localhost:5000/api/users/", newObj)
    }

    togglePopup = () => {
        this.setState({
            showForm: !this.state.showForm
        })
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
          delete: true,
          updatedJob: deletedJob,
          update: {
              jobs: filteredJobs
          }
        }
        axios.put("http://localhost:5000/api/users/", newObj)
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

      addNewJobs = (newJob) => {
        newJob.id = Math.random().toString()
        let newJobsArray = [...this.state.jobs, newJob]
        this.setState({
          jobs: newJobsArray
        })
        return newJobsArray
      }

      editJobs = (arr) => {
        this.setState({
          ...this.state,
          jobs: arr
        })
      }

    componentDidMount() {
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
      } 

    render() {
        
        let jobData = {
            toApply: [],
            applied: [],
            interview: [],
            offer: []
        }
        
        /* this.props.jobList.forEach(job => {
            jobData[job.status].push(
                <div key={job.id}
                    draggable
                    onDragStart={(e) => this.onDragStart(e, job.id)}
                    className="jobcard">
                    <p className="jobcard-title"> {job.company} </p>
                    <p className="jobcard-content"> {job.role} </p>
                    <i class="tiny material-icons right"  onClick={() => this.props.deleteJobs(job.id)}>delete</i>
                    <i class="tiny material-icons left" onClick={()=> this.toggleEditForm}>border_color</i>
                    {this.state.editForm ? 
                    <EditJobs editExistingJob={this.props.editExistingJob} closeEditForm={this.toggleEditForm}
                            username={this.props.username} company={job.company}
                    />
                    : null}              
                </div>
            );
        }); */

        /*this.props.jobList.forEach(job => {
            if (job.company) {
            jobData[job.status].push(
                <Thirdcard key={job.id} job={job} deleteJobs={this.props.deleteJobs} editExistingJob={this.props.editExistingJob}
                />
            );
            }
        });*/

        this.state.jobs.forEach(job => {
            if (job.company) {
            jobData[job.status].push(
                <Thirdcard key={job.id} job={job} deleteJobs={this.deleteJobs} editExistingJob={this.editExistingJob}
                />
            );
            }
        });
        
        return(
            <div className="base board">
                    <div className="board-lists">
                        <div className="board-list" 
                            onDragOver= {(e) => this.onDragOver(e)}
                            onDrop= {(e) => this.onDrop(e, "toApply")}>
                            <div className="list-title">
                                To Apply
                            </div>
                            {jobData.toApply}
                            <button onClick={this.togglePopup}>
                                + Add job
                            </button>
                        </div>
                        <div className="board-list"
                            onDragOver= {(e) => this.onDragOver(e)}
                            onDrop= {(e) => this.onDrop(e, "applied")}>
                            <div className="list-title">
                                Applied
                            </div>
                            {jobData.applied}
                            <button onClick={this.togglePopup}>
                                + Add job
                            </button>
                        </div>
                        <div className="board-list"
                            onDragOver= {(e) => this.onDragOver(e)}
                            onDrop= {(e) => this.onDrop(e, "interview")}>
                            <div className="list-title">
                                Interview
                            </div>
                            {jobData.interview}
                            <button onClick={this.togglePopup}>
                                + Add job
                            </button>
                        </div>
                        <div className="board-list"
                            onDragOver= {(e) => this.onDragOver(e)}
                            onDrop= {(e) => this.onDrop(e, "offer")}>
                            <div className="list-title">
                                Offered
                            </div>
                            {jobData.offer}
                            <button onClick={this.togglePopup}>
                                + Add job
                            </button>
                        </div>
                        {/*{this.state.showForm ? 
                        <AddJobs addNewJobs={this.props.addNewJobs} closePopup={this.togglePopup}
                            username={this.props.username}
                        />
                        : null}*/}
                        {this.state.showForm ? 
                        <AddJobs addNewJobs={this.addNewJobs} closePopup={this.togglePopup}
                            username={this.props.username}
                        />
                        : null}
                    </div>
                </div>
        );
    }
}
   

export default Thirdboard