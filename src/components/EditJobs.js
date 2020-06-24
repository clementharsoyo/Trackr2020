import React , { Component } from 'react'
import axios from 'axios';
import "./Thirdboard/Thirdboard.css"
import M from "materialize-css"

class EditJobs extends Component {
    state = {
        company: this.props.job.company,
        role: this.props.job.role,
        status: this.props.job.status,
        schedule: '',
        time: '',
        id: this.props.job.id
    };

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let stateName = target.name;

        this.setState({
            [stateName]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const editedJob = {
            company: this.state.company,
            role: this.state.role,
            status: this.state.status,
            interviewDate: this.state.schedule + "T" + this.state.time,
            id: this.state.id
        }
        console.log(editedJob)
        const newArr = this.props.editExistingJob(editedJob) 
        const newObj = {
            username: localStorage.getItem('username'),
            update: true,
            updatedJob: editedJob,
            update: {
                jobs: newArr
            }
        }
        axios.put("http://localhost:5000/api/users/", newObj)
        this.props.closeEditForm()
        this.setState({
            company: '',
            role: '',
            status: '',
            schedule: '',
            time: '',
            id: ''
        })
    }

    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <div className='popup'>
            <div className='popup_inner'>
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">work</i>
                            <input id="company" type="text" className="validate"
                                name="company" value={this.state.company} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="company"></label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input id="role" type="text" className="validate" 
                                name="role" value={this.state.role} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="role"></label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">sms</i>
                            <select id="status" name="status"
                                value={this.state.status} onChange={this.handleChange} autoComplete="off">
                                <option value="" disabled selected>Status</option>
                                <option value="toApply">To Apply</option>
                                <option value="applied">Applied</option>
                                <option value="interview">Interview</option>
                                <option value="offer">Offer</option>
                            </select>
                            <label htmlFor="status"></label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">access_alarm</i>
                            <input id="schedule" type="date" 
                                name="schedule" value={this.state.schedule} onChange={this.handleChange}
                                autoComplete="off" /> 
                            <label htmlFor="schedule"></label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix"></i>
                            <input id="time" type="time" 
                                name="time" value={this.state.time} onChange={this.handleChange}
                                autoComplete="off" /> 
                            <label htmlFor="time"></label>
                        </div>
                    </div>
                    <button className="FormField__Button waves-effect waves-light mr-20" type="Submit">Edit</button>
                    <button onClick={this.props.closeEditForm}>
                        <i class="material-icons tiny">clear</i>
                    </button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default EditJobs