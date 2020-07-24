import React, { Component } from 'react';
import axios from 'axios'

class ForgotPassword extends Component {
    
    state = {
        username:'',
        count: 15,
        isButtonDisabled: false,
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
        this.setState({
            isButtonDisabled: true,
            count: 15
          })
        setTimeout(this.disableButton, 15000)
        axios.get("http://localhost:5000/api/users/sendPasswordRecoveryEmail/" + this.state.username)
        .catch(err => {
            this.setState({
                errors: err.response.data
            })
        })
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            count: this.state.count - 1
          })}, 1000)
    }

    render() {
        let sendButton;
        if (this.state.isButtonDisabled) {
            sendButton = <button className="btn-large red">Wait {this.state.count}</button>
        } else {
            sendButton = <button className="btn-large red" onClick={this.handleSubmit}>Send Recovery Email</button>
        }
        return(
            <div className="bgimage" style={{marginBottom: 0}}>
            <div className="row login" style={{marginBottom: 0}}>
                <div className="col s12 l4 offset-l4">
                    <div className="card">
                        <div className="card-action red white-text">
                            <h3>No Worries!</h3>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label for="username">Please input your username / email</label>
                                <input type="text" id="username" name="username" autoComplete="off" 
                                value={this.state.username} onChange={this.handleChange} />
                                <p style={{color: "black"}}>{ this.state.errors.username} </p>
                                <p style={{color: "black"}}>{ this.state.errors.email} </p>
                            </div>
                            <div className="form-field center-align">
                                {sendButton}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }


}

export default ForgotPassword