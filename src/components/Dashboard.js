import React from 'react'
import Board from "./Board.js"
import Card from "./Card.js"
import AddJobs from "./AddJobs.js"
import "./Board.css"

const Dashboard= ({addNewJobs, deleteJobs, jobList, username}) => {
  
  const jobListToApply = jobList.map(job => { 
    if (job.status === 'toApply') {
      return (
        <Card id="card-1" className="card blue-grey darken-1"draggable="true" key={job.id}>
          <h5 style={{color: "white"}}> {job.company} </h5>
          <p style={{color: "yellow"}}> {job.role} </p>
          <button className="waves-effect waves-teal btn-flat"
          onClick={() => deleteJobs(job.id)} type="submit" name="action">
            <i class="material-icons tiny right">clear</i>
          </button>
        </Card>
      )
    }
  })

  const jobListApplied = jobList.map(job => { 
    if (job.status === 'applied') {
      return (
        <Card id="card-1" className="card blue-grey darken-1"draggable="true" key={job.id}>
          <h5 style={{color: "white"}}> {job.company} </h5>
          <p style={{color: "yellow"}}> {job.role} </p>
          <button className="waves-effect waves-teal btn-flat"
          onClick={() => deleteJobs(job.id)} type="submit" name="action">
            <i class="material-icons tiny right">clear</i>
          </button>
        </Card>
      )
    }
  })
  
  const jobListInterview = jobList.map(job => { 
    if (job.status === 'interview') {
      return (
        <Card id="card-1" className="card blue-grey darken-1"draggable="true" key={job.id}>
          <h5 style={{color: "white"}}> {job.company} </h5>
          <p style={{color: "yellow"}}> {job.role} </p>
          <button className="waves-effect waves-teal btn-flat"
          onClick={() => deleteJobs(job.id)} type="submit" name="action">
            <i class="material-icons tiny right">clear</i>
          </button>
        </Card>
      )
    }
  })

  const jobListOffer = jobList.map(job => { 
    if (job.status === 'offer') {
      return (
        <Card id="card-1" className="card blue-grey darken-1"draggable="true" key={job.id}>
          <h5 style={{color: "white"}}> {job.company} </h5>
          <p style={{color: "yellow"}}> {job.role} </p>
          <button className="waves-effect waves-teal btn-flat"
          onClick={() => deleteJobs(job.id)} type="submit" name="action">
            <i class="material-icons tiny right">clear</i>
          </button>
        </Card>
      )
    }
  })

  return (
    <div>
      <div className="container">
        <div className="flexbox">
          
          <Board id="board-1" className="board">
            <h5 className="center" style={{color: "blue"}}>To Apply</h5>
            { jobListToApply }
          </Board>
          <span className="divider"></span>
          
          <Board id="board-2" className="board">
            <h5 className="center" style={{color: "teal"}}>Applied</h5>
            { jobListApplied }
          </Board>
          <span className="divider"></span>
          
          <Board id="board-3" className="board">
            <h5 className="center" style={{color: "purple"}}>Interview</h5>
            { jobListInterview }
          </Board>
          <span className="divider"></span>
          
          <Board id="board-4" className="board">
          <h5 className="center" style={{color: "green"}}>Offer</h5>
            { jobListOffer }
          </Board>
        </div>
        <AddJobs addNewJobs = {addNewJobs} username = {username}/>
     </div>
    </div>
  )
}

export default Dashboard