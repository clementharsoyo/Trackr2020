import React , { Component } from 'react'
import axios from 'axios';
import "./Thirdboard/Thirdboard.css"
import M from "materialize-css"

class AddJobs extends Component {
    state = {
        company: '',
        role: '',
        status: '',
        schedule: '',
        time: '',
        errors: []
    };

    putNewObj = (newObj) => {
        return axios
                .put("http://localhost:5000/api/users/jobs", newObj)
                .then(res => {
                    console.log(res.data)
                    return res.data
                    }
                )
                .catch(err => { 
                    this.setState({
                        errors: err.response.data
                    }) 
                    console.log(err.response.data)
                })
    }

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
            interviewDate: this.state.schedule + "T" + this.state.time,
        }
        console.log(newJob)
        const newArr = this.props.addNewJobs(newJob) 
        const newObj = {
            add: true,
            updatedJob: newJob,
            jobs: newArr
        }
        this.putNewObj(newObj)
            .then(res => {
                if (res) {
                    this.props.closePopup()
                }
            })
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
            <div className='popup'>
            <div className='popup_inner'>
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">work</i>
                            <input id="company" type="text" className="validate"
                                name="company" value={this.state.company} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="company">Company</label>
                            <p style={{color: "#a82424"}}>{ this.state.errors.company } </p>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input id="role" type="text" className="validate" 
                                name="role" value={this.state.role} onChange={this.handleChange} autoComplete="off"/>
                            <label htmlFor="role">Role</label>
                            <p style={{color: "#a82424"}}>{ this.state.errors.role } </p>
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
                            <p style={{color: "#a82424"}}>{ this.state.errors.status } </p>
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
                    <button class="btn waves-effect waves-light" type="submit" name="action">Add
                            <i class="material-icons right">send</i></button>
                    <button onClick={this.props.closePopup} className="right btn-flat">x</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default AddJobs