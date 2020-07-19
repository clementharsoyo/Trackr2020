import React, { Component } from 'react'
import axios from 'axios'

class TemporaryPage extends Component {

    state = {
        loggedIn: false,
        error: ""
    }

    loginWithLinkedIn = () => {
        return axios
            .get("http://localhost:5000/api/users/")
            .then(response => {
                localStorage.setItem('usertoken', response.data)
                localStorage.setItem('verified', response.data.verified)
                localStorage.setItem('username', response.data.username)
                return response.data
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    componentDidMount() {
        let url = window.location.href;
        if (url.includes('?')) {
            let authToken = new URLSearchParams(window.location.search).get('authToken')
            let refreshToken = new URLSearchParams(window.location.search).get('refreshToken')
            let errorSignIn = new URLSearchParams(window.location.search).get('error')
            if (errorSignIn) {
                this.setState({
                    error: errorSignIn
                })
            }
            axios.defaults.headers.common["authorization"] = authToken
            this.loginWithLinkedIn()
            .then(res => {
                if (res) {
                    if (res.usernameSet) {
                        localStorage.setItem('refreshtoken', refreshToken)
                        localStorage.setItem('authtoken', authToken)
                        setTimeout(() => { 
                        this.props.history.push("/")
                        this.props.history.go(0)
                        }, 2000)
                    } else {
                        localStorage.setItem('refreshtoken', refreshToken)
                        localStorage.setItem('authtoken', authToken)
                        this.props.history.push("/usernameForm")
                    }
                }
            })
            .catch(err => {
                console.log(err)
                if (localStorage.getItem('authToken')) {
                    axios.defaults.headers.common["authorization"] = localStorage.getItem('authToken')
                }
            })
        } else {
            console.log('No Parameters in URL');
        }
    }

    render() {
        let toDisplay;

        if (this.state.error !== '') {
            toDisplay = 
            <div className="card-action red white-text">
                <h3>Sorry, your email has been used with Trackr</h3>
                <h5>Please Sign In with Trackr instead</h5>
            </div>
        } else {
            toDisplay = 
            <div className="card-action red white-text">Wait Up ...</div>
        }
        return (
            <div className="row">
                <div className="col s12 l4 offset-l4">
                    <div className="card">
                        {toDisplay}
                    </div>
                </div>
            </div>
        )
    }
}

export default TemporaryPage


