import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    
    state = {
        username: '',
        password: ''
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
        console.log('Form submitted with these data: ')
        console.log(this.state)
        this.setState({
            username: '',
            password: ''
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
                            placeholder="Enter your username" name="username" value={this.state.username}
                            onChange={this.handleChange}/>
                        </div>

                        {/* for Password */}
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="text" id="password" className="FormField__Input" 
                            placeholder="Enter your password" name="password" value={this.state.password}
                            onChange={this.handleChange} />
                        </div>

                        {/* Sign Up Button */}
                        <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                        <Link to="/sign-up" className="FormField__Link">New to Trackr?</Link>
                        </div>
                    </form>
            </div>
        )
    }
}

export default SignInForm