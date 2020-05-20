import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    
    state = {
        username: '',
        password: '',
        email: ''
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
        this.setState({
            username: '',
            password: '',
            email: ''
        })
    }

    render() {
        return(
            <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                        
                        {/* for Username */}
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Username</label>
                        <input type="text" id="name" className="FormField__Input" 
                            placeholder="Enter your new username" name="username" 
                            value={this.state.username} onChange={this.handleChange}/>
                        </div>

                        {/* for Password */}
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="text" id="password" className="FormField__Input" 
                            placeholder="Enter your new password" name="password"
                            value={this.state.password} onChange={this.handleChange}/>
                        </div>

                        {/* for Email */}
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="FormField__Input" 
                            placeholder="Enter your email address" name="email" 
                            value={this.state.email} onChange={this.handleChange}/>
                        </div>

                        {/* Sign Up Button */}
                        <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/" className="FormField__Link">Have an account?</Link>
                        </div>
                    </form>
            </div>
        )
    }
}

export default SignUpForm