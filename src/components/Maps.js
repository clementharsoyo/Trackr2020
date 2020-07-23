import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'

class Maps extends Component {

    state = {
        jobs: []
    }

    componentDidMount() {
        axios.defaults.headers.common["authorization"] = localStorage.getItem('authtoken')
        axios.get("http://localhost:5000/api/users/")
        .then(response => {
            console.log(response.data.jobs)
            this.setState({
                jobs: response.data.jobs
            })
        })
        .catch(error => {
            console.log(error)
            if (error.status === 401) {
                this.props.history.push("/login")
            }
        })
    } 
    
    render() {
        const API_KEY = "AIzaSyD0VjbJ2NjXqxlmkLxO6nlmvZcH9iL4p70"
        let markers = []
        this.state.jobs.forEach(job => {
            if (job.place) {
                let latitude = job.coordinates[0].lat
                let longitude = job.coordinates[0].lng
                markers.push(
                    <img src={job.logo} style={{borderRadius: "50%"}} lat={latitude} lng={longitude}></img>
                )
            }
        });
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyD0VjbJ2NjXqxlmkLxO6nlmvZcH9iL4p70" }}
                    defaultCenter={{lat: 1.290270, lng: 103.851959}}
                    defaultZoom={10}
                >
                {markers}
                </GoogleMapReact>
            </div>          
        )
    }
}

export default Maps