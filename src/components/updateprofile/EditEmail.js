import React, { Component } from 'react';
import axios from 'axios'
import "./EditPrivacy.css"

class EditEmail extends Component {
    
    state = {
        newemail:'',
        errors:[]
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
        e.preventDefault()
        axios.defaults.headers.common["authorization"] = localStorage.getItem('authtoken')
        axios.get("http://localhost:5000/api/users/sendVerificationEmail?email=" + this.state.newemail)
        .then (res => {
            console.log("Success")
            this.setState({
                successMessage: "Successfully change email"
            })
        })
        .catch(err => {
            console.log(err.response.data)
            this.setState({
                errors: err.response.data
            })
        })
    }
    
    render() {
        return(
            <div class="iris row" style={{marginBottom: 0}}>
                <div className="container">
                    <div className="col s12 l6 push-l3">
                        <div className="card">
                            <div className="card-action blue-grey lighten-5 center">
                                <h3>Change Email</h3>
                            </div>
                            <div className="card-content">
                                <div className="form-field">
                                    <label for="newemail">New Email</label>
                                    <input type="text" id="newemail" name="newemail" autoComplete="off" 
                                        value={this.state.newemail} onChange={this.handleChange} />
                                    <p style={{color: "black"}}>{ this.state.errors.email } </p>
                                </div>
                                <div className="form-field center-align">
                                    <button className="btn-large grey" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditEmail