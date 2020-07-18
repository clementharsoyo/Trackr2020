import React, { Component } from 'react';
import '../UsernameCSS.css'
import axios from 'axios'

class EditProfile extends Component {
    
    state = {
        username:'',
        oldpassword: '',
        newpassword: '',
        email: '',
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
        axios.put("http://localhost:5000/api/users/username", {
            username: this.state.username
        })
        .then (res => {
            console.log("Success")
            localStorage.setItem('usertoken', res.data)
            localStorage.setItem('verified', res.data.verified)
            localStorage.setItem('username', this.state.username)
            setTimeout(() => { 
                this.props.history.push("/")
                this.props.history.go(0)
                }, 2000)
        })
        .catch(err => {
            this.setState({
                errors: err.response.data
            })
        })
    }

    render() {
        return(
            <div className="bgimage">
            <div className="row">
                <div className="col s12 l4 offset-l4">
                    <div className="card">
                        <div className="card-action grey white-text">
                            <h3>Edit Profile</h3>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label for="username">New Username</label>
                                <input type="text" id="username" name="username" autoComplete="off" 
                                value={this.state.username} onChange={this.handleChange} />
                                <p style={{color: "black"}}>{ this.state.errors.username} </p>
                                <p style={{color: "black"}}>{ this.state.errors.error} </p>
                            </div>
                            <div className="form-field">
                                <label for="oldpassword">Old Password</label>
                                <input type="text" id="oldpassword" name="oldpassword" autoComplete="off" 
                                value={this.state.oldpassword} onChange={this.handleChange} />
                                <p style={{color: "black"}}>{ this.state.errors.username} </p>
                                <p style={{color: "black"}}>{ this.state.errors.error} </p>
                            </div>
                            <div className="form-field">
                                <label for="newpassword">New Password</label>
                                <input type="text" id="newpassword" name="newpassword" autoComplete="off" 
                                value={this.state.newpassword} onChange={this.handleChange} />
                                <p style={{color: "black"}}>{ this.state.errors.username} </p>
                                <p style={{color: "black"}}>{ this.state.errors.error} </p>
                            </div>
                            <div className="form-field">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" autoComplete="off" 
                                value={this.state.email} onChange={this.handleChange} />
                                <p style={{color: "black"}}>{ this.state.errors.username} </p>
                                <p style={{color: "black"}}>{ this.state.errors.error} </p>
                            </div>
                            <div className="form-field center-align">
                                <button className="btn-large grey" onClick={this.handleSubmit}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }


}

export default EditProfile