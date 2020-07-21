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
        let weeklyJobs = []
        this.state.jobs.forEach(job => {
            weeklyJobs.push(
                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s4">
                                <img src={job.logo}/>
                            </div>
                            <div class="col s8">
                                <span class="black-text">
                                {job.company}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div class="iris row" style={{marginBottom: 0}}>
                <div className="container">
                    <div class="col s12 m6 l6">
                    {weeklyJobs}
                    </div>
                </div>
            </div>
        )
    }
}

export default Metrics