import React, { Component } from 'react'
import "./Thirdboard.css"
import EditJobs from "../EditJobs.js"

class Thirdcard extends Component {

    state = {
        editForm: false
    }

    onDragStart = (e, id) => {
        console.log('dragged', id)
        e.dataTransfer.setData("id", id)
    }

    toggleEdit = () => {
        this.setState({
            editForm: !this.state.editForm
        })
    }

    render() {
        if (this.props.job.status === "toApply") {
        return(
        <div key={this.props.job.id}
        draggable
        onDragStart={(e) => this.onDragStart(e, this.props.job.id)}
        className="jobcard-toApply">
        <p className="jobcard-title"> {this.props.job.company} </p>
        <p className="jobcard-content"> {this.props.job.role} </p>
        <p className="jobcard-content"> {this.props.job.interviewDate.split("T")[0]}, {this.props.job.interviewDate.split("T")[1]} </p> 
        <i class="tiny material-icons right"  onClick={() => this.props.deleteJobs(this.props.job.id)}>delete</i>
        <i class="tiny material-icons left" onClick={this.toggleEdit}>border_color</i> 
        { this.state.editForm ? 
        <EditJobs job={this.props.job} closeEditForm={this.toggleEdit} 
            editExistingJob={this.props.editExistingJob}
        /> : null }
        </div>)
        } else if (this.props.job.status === "applied") {
            return(
                <div key={this.props.job.id}
                draggable
                onDragStart={(e) => this.onDragStart(e, this.props.job.id)}
                className="jobcard-applied">
                <p className="jobcard-title"> {this.props.job.company} </p>
                <p className="jobcard-content"> {this.props.job.role} </p>
                <p className="jobcard-content"> {this.props.job.interviewDate.split("T")[0]}, {this.props.job.interviewDate.split("T")[1]} </p> 
                <i class="tiny material-icons right"  onClick={() => this.props.deleteJobs(this.props.job.id)}>delete</i>
                <i class="tiny material-icons left" onClick={this.toggleEdit}>border_color</i> 
                { this.state.editForm ? 
                <EditJobs job={this.props.job} closeEditForm={this.toggleEdit} 
                    editExistingJob={this.props.editExistingJob}
                /> : null }
                </div>)
        } else if (this.props.job.status === "interview") {
            return(
                <div key={this.props.job.id}
                draggable
                onDragStart={(e) => this.onDragStart(e, this.props.job.id)}
                className="jobcard-interview">
                <p className="jobcard-title"> {this.props.job.company} </p>
                <p className="jobcard-content"> {this.props.job.role} </p>
                <p className="jobcard-content"> {this.props.job.interviewDate.split("T")[0]}, {this.props.job.interviewDate.split("T")[1]} </p> 
                <i class="tiny material-icons right"  onClick={() => this.props.deleteJobs(this.props.job.id)}>delete</i>
                <i class="tiny material-icons left" onClick={this.toggleEdit}>border_color</i> 
                { this.state.editForm ? 
                <EditJobs job={this.props.job} closeEditForm={this.toggleEdit} 
                    editExistingJob={this.props.editExistingJob}
                /> : null }
                </div>)
        } else {
            return(
                <div key={this.props.job.id}
                draggable
                onDragStart={(e) => this.onDragStart(e, this.props.job.id)}
                className="jobcard-offer">
                <p className="jobcard-title"> {this.props.job.company} </p>
                <p className="jobcard-content"> {this.props.job.role} </p>
                <p className="jobcard-content"> {this.props.job.interviewDate.split("T")[0]}, {this.props.job.interviewDate.split("T")[1]} </p> 
                <i class="tiny material-icons right"  onClick={() => this.props.deleteJobs(this.props.job.id)}>delete</i>
                <i class="tiny material-icons left" onClick={this.toggleEdit}>border_color</i> 
                { this.state.editForm ? 
                <EditJobs job={this.props.job} closeEditForm={this.toggleEdit} 
                    editExistingJob={this.props.editExistingJob}
                /> : null }
                </div>)
        }
    }

}

export default Thirdcard