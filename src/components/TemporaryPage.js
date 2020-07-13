import React, { Component } from 'react'
import axios from 'axios'

class TemporaryPage extends Component {

    state = {
        loggedIn: false
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
                        this.props.history.push("/usernameForm")
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
            /* axios.get("http://localhost:5000/api/users/")
            .then(res => {
                Set tokens in Storage 
                localStorage.setItem('authtoken', authToken)
                localStorage.setItem('refreshtoken', refreshToken)
                localStorage.setItem('username', res.data.username) 
                Check if already have username
                if (res.data.usernameSet) {
                    console.log("Login Success")
                    localStorage.setItem('usertoken', res.data)
                    localStorage.setItem('verified', res.data.verified)
                    this.setState({
                        loggedIn: true
                    })
                    setTimeout(() => {
                    this.props.history.push({
                        pathname: "/",
                    })
                    this.props.history.go(0)
                    }, 1500)
                    
                } else {
                    this.props.history.push({
                        pathname: "/usernameForm",
                    })
                }
            })
            .catch(err => {
                console.log(err)
                Set back the axios headers 
                if (localStorage.getItem('authToken')) {
                    axios.defaults.headers.common["authorization"] = localStorage.getItem('authToken')
                }
            }) */
        } else {
            console.log('No Parameters in URL');
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 l4 offset-l4">
                    <div className="card">
                        <div className="card-action red white-text">
                            <h3>Wait Up</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TemporaryPage


