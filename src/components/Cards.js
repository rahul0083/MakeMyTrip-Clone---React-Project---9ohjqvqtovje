import React from 'react'
import {Link } from "react-router-dom";
function Cards({image,title,description}) {
  return (
    <div>
   <Link to="/">  <div className="card" style={{width: "14rem",height:"20rem"}}>
    <img src={image} className="card-img-top" alt="image" style={{height:"20rem"}} />
    <div className="card-body">
    <h5 className="card-title" style={{color:"blueviolet"}}>{title}</h5>
    <p className="card-text">{description}</p>
  </div>
</div> </Link>
    </div>
  )
}

export default Cards
