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
            console.log("i run and work")        
            this.setState({
            jobs: response.data.jobs
          })
          console.log(response.data)
        })
        .catch(error => {
            console.log(error.data)
            if (error.status === 401) {
                this.props.history.push("/login")
            }
        })
    }
    
    render() {
        return(
            <div class="iris row">
                <div className="container">
                    <div class="col s12 m6 l6">
                        <p>{this.state.jobs}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Metrics