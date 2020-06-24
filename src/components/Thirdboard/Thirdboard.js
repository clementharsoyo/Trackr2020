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
        let newJobData = this.props.jobList.filter((job) => {
            if (job.id === id) {
                job.status = newStatus
            }
            return job
        })
        console.log(newJobData)
        this.props.editJobs(newJobData)
        const newObj = {
            username: localStorage.getItem('username'),
            updated: true,
            updatedJob: this.props.jobList.find((job) => {
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

        this.props.jobList.forEach(job => {
            if (job.company) {
            jobData[job.status].push(
                <Thirdcard key={job.id} job={job} deleteJobs={this.props.deleteJobs} editExistingJob={this.props.editExistingJob}
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
                        {this.state.showForm ? 
                        <AddJobs addNewJobs={this.props.addNewJobs} closePopup={this.togglePopup}
                            username={this.props.username}
                        />
                        : null}
                    </div>
                </div>
        );
    }
}
   

export default Thirdboard