import React , { Component } from 'react'
import axios from 'axios';

class AddJobs extends Component {
    state = {
        company: '',
        role: '',
        status: ''
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
            status: this.state.status
        }
        console.log(newJob)
        const newArr = this.props.addNewJobs(newJob) 
        const newObj = {
            username: this.props.username,
            update: {
                jobs: newArr
            }
        }
        axios.put("http://localhost:5000/api/users/", newObj)
        this.setState({
            company: '',
            role: '',
            status: ''
        })
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s4">
                            <i className="material-icons prefix">work</i>
                            <input placeholder="Company Name" id="company" type="text" className="validate"
                                name="company" value={this.state.company} onChange={this.handleChange} />
                            <label htmlFor="company"></label>
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">person</i>
                            <input placeholder="Role" id="role" type="text" className="validate" 
                                name="role" value={this.state.role} onChange={this.handleChange} />
                            <label htmlFor="role"></label>
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">sms</i>
                            <input placeholder="Status" id="status" type="text" className="validate" 
                                name="status" value={this.state.status} onChange={this.handleChange} />
                            <label htmlFor="status"></label>
                        </div>
                    </div>
                    <button className="FormField__Button waves-effect waves-light mr-20" type="Submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddJobs