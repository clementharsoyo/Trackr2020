import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login } from "../UserFunctions.js"

class SignInForm extends Component {
    
    state = {
        username: '',
        password: '',
        isPasswordShown: false,
    };
    
    /* When filling the form, will update the state to accept 
        user input */
    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let stateName = target.name;

        this.setState({
            [stateName]: value
        })
    }

    /* When submit, will perform login if the username and password match,
        hence navigate to homepage */
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with these data: ')
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.changeState(userData.username)
        console.log(userData)
        login(userData)
        .then(res => {
            if (res) {
            console.log('Login Successful')
            this.props.history.push({
                pathname: "/",
                state: { username: userData.username }
                })
            }
        })
    }

    /* When enabled, password will be displayed either as text
        or hidden */
    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
      };
    
    render() {
        const { errors } = this.state;
        return(
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                        
                    {/* Section for username */}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="text" id="username" className="FormField__Input" 
                            placeholder="Enter your username" name="username" autoComplete="off"
                            value={this.state.username} onChange={this.handleChange}
                            />
                    </div>

                    {/* Section for password */}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>                            <input type={this.state.isPasswordShown ? "text" : "password"} id="password" className="FormField__Input" 
                            placeholder="Enter your password" name="password" autoComplete="off"
                            value={this.state.password} onChange={this.handleChange}
                            />
                        <i>
                            <FontAwesomeIcon icon={this.state.isPasswordShown ? faEyeSlash : faEye} className="password-icon" 
                                onClick={this.togglePasswordVisiblity}
                            />
                        </i>
                    </div>

                    {/* Sign In Button */}
                    <div className="FormField">
                        <button className="FormField__Button waves-effect waves-light mr-20" type="Submit">Sign In</button>
                        <Link to="/login/signup" className="FormField__Link">New to Trackr?</Link>
                        </div>
                </form>
            </div>
        )
    }
}


export default SignInForm