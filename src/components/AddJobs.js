import React , { Component } from 'react'
import axios from 'axios';
import M from "materialize-css"

class AddJobs extends Component {
    state = {
        company: '',
        role: '',
        status: '',
        schedule: '',
        time: ''
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
        const newJob = {
            company: this.state.company,
            role: this.state.role,
            status: this.state.status,
            schedule: this.state.schedule,
            interviewDate: new Date(this.state.schedule + "T" + this.state.time + ":00.000Z")
        }
        console.log(newJob)
        const newArr = this.props.addNewJobs(newJob) 
        const newObj = {
            username: this.props.username,
            add: true,
            updatedJob: newJob,
            update: {
                jobs: newArr
            }
        }
        axios.put("http://localhost:5000/api/users/", newObj)
        this.setState({
            company: '',
            role: '',
            status: '',
            schedule: '',
            time: '',
        })
    }

    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <div className="row">
                <form className="col s13" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s3">
                            <i className="material-icons prefix">work</i>
                            <input id="company" type="text" className="validate"
                                name="company" value={this.state.company} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="company">Company</label>
                        </div>
                        <div className="input-field col s3">
                            <i className="material-icons prefix">person</i>
                            <input id="role" type="text" className="validate" 
                                name="role" value={this.state.role} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="role">Role</label>
                        </div>
                        <div className="input-field col s3">
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
                        <div className="input-field col s3">
                            <i className="material-icons prefix"></i>
                            <input id="schedule" type="date" 
                                name="schedule" value={this.state.schedule} onChange={this.handleChange}
                                autoComplete="off" /> 
                            <label htmlFor="schedule"></label>
                        </div>
                        <div className="input-field col s2">
                            <i className="material-icons prefix"></i>
                            <input id="time" type="time" 
                                name="time" value={this.state.time} onChange={this.handleChange}
                                autoComplete="off" /> 
                            <label htmlFor="time"></label>
                        </div>
                    </div>
                    <button className="FormField__Button waves-effect waves-light mr-20" type="Submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddJobs