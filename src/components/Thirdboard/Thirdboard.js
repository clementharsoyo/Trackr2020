import React , { Component } from 'react'
import "./Thirdboard.css"
import AddJobs from "../AddJobs.js"
import axios from 'axios'

class Thirdboard extends Component {

    state = {
        showForm: false
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
        console.log('dropped', id)
        let newJobData = this.props.jobList.filter((job) => {
            if (job.company === id) {
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
                if (job.company === id) {
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
        
        this.props.jobList.forEach(job => {
            jobData[job.status].push(
                <div key={job.id}
                    draggable
                    onDragStart={(e) => this.onDragStart(e, job.company)}
                    className="card">
                    {job.company}, {job.role}
                    <button
                        onClick={() => this.props.deleteJobs(job.id)} type="submit" name="action">
                        <i class="material-icons tiny right">clear</i>
                    </button>
                </div>
            );
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