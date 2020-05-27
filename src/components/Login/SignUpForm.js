import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Register, register } from '../UserFunctions.js'

class SignUpForm extends Component {
    
    state = {
        username: '',
        password: '',
        isPasswordShown: false,
        email: '',
        successful: false,
        errors: {}
    };
    
    handleChange = (e) => {
        let target = e.target;
        let value = target.value
        let stateName = target.name

        this.setState({
            [stateName]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with these data: ')
        console.log(this.state)
        const userData = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        register(newUser).then(res => {
            this.props.history.push('/')
        })
    }

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
      };
    
    regis = () => {
        if (this.state.successful) {
            alert("success")
        } else {
            alert("fail");
        }
    }
    render() {
        const { errors } = this.state;
        return(
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                        
                    {/* for Username */}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="text" id="username" className="FormField__Input" 
                            placeholder="Enter your new username" name="username" autoComplete="off"
                            value={this.state.username} onChange={this.handleChange}
                            error={errors.username}
                            />
                    </div>

                    {/* for Password */}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type={this.state.isPasswordShown ? "text" : "password"} id="password" className="FormField__Input" 
                            placeholder="Enter your new password" name="password" autoComplete="off"
                            value={this.state.password} onChange={this.handleChange}
                            error={errors.password}
                            />
                        <i>
                            <FontAwesomeIcon icon={this.state.isPasswordShown ? faEyeSlash : faEye} className="password-icon" 
                                onClick={this.togglePasswordVisiblity}
                            />
                        </i>
                    </div>

                    {/* for Email */}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="FormField__Input" 
                            placeholder="Enter your email address" name="email" autoComplete="off"
                            value={this.state.email} onChange={this.handleChange}
                            error={errors.email}
                            />
                    </div>

                    {/* Sign Up Button */}
                    <div className="FormField">
                        <button className="FormField__Button waves-effect waves-light mr-20" type="Submit">Sign Up</button>
                        <Link to="/" className="FormField__Link">Have an account?</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm