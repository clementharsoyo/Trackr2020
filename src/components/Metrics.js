import React, { Component } from 'react'
import axios from 'axios'

class Metrics extends Component {

    state = {
        jobs: []
    }

    componentDidMount() {
        axios.defaults.headers.common["authorization"] = localStorage.getItem('authtoken')
        axios.get("http://localhost:5000/api/users/sortedJobs?weekly=true")
        .then(response => {       
            console.log(response)     
            this.setState({
                jobs: response.data.jobs
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return(
            <div class="iris row" style={{marginBottom: 0}}>
                <div className="container">
                    <div class="col s12 m6 l6">
                    </div>
                </div>
            </div>
        )
    }
}

export default Metrics