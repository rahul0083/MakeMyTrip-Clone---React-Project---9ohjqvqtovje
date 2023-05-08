import React from 'react'
import { Link } from 'react-router-dom'

function OffersCard({image,title,description}) {
  return (
    
      <div className="card mb-3" style={{maxWidth: "540px"}}>
   <Link to="/"> <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..."  style={{height:"200px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 2 mins ago</small></p>
      </div>
    </div>
  </div>
  </Link>
</div>
  
  )
}

export default OffersCard
