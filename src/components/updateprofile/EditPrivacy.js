import React,  {Component} from 'react'
import "./EditPrivacy.css"

class EditPrivacy extends Component {
    render() {
        return(
            <div className="iris">
                <div className="row container">
                    <a href="/EditUsername" className="center-align blue-grey btn-large">Edit Username</a>
                    <a href="/EditPassword" className="center-align blue-grey btn-large">Edit Password</a>
                    <a href="/EditEmail" className="center-align blue-grey btn-large">Edit Email</a>
                </div>
            </div>
        )
    }
}

export default EditPrivacy