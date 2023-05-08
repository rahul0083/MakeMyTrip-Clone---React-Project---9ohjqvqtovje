import React, { useState } from 'react'
import Flight from  './Flight'
import Footer from './Footer';
import FlightIcon from '@material-ui/icons/Flight';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { selectUser,selectdata,setdata} from "./UserSlice";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SeachFlights() {
  const data1=useSelector(selectdata)
  const data2=data1.data;
     const [result,setResult]=useState([]);
     const navigate = useNavigate();
     const user=useSelector(selectUser) 
    

        useEffect(()=>{
          console.log("search",data1);
         setResult(data2);
        },[data2])
       
    console.log("result",result);
  
  return (
    <div>
       {!user?( <Header name="Login or Signup"/>)
     :(<Header name={user.displayName}/>)}

   {  result.map((flight, index) => (
        
        <div className="flight_results" key={index}>
          <h3>Flights from {flight.from} to {flight.to}</h3>
          <div className="flight_results_data">
            <div><FlightIcon /></div>
          <div className='flight-route'><h4>{flight.from} <ArrowRightAltOutlinedIcon />{flight.to}</h4></div>
           <div className='flight-time'>Time: {flight.departure.departureTime} | Date: {flight.departure.departureDate}</div> 
          <div className='flight-airline'>Airline: {flight.airlineName}</div>
          <div className='flight-airline'>Via: {flight.via}</div>
          <div className='flight-price'>Price: Rs {flight.price}</div>
          <button type="button" className="btn btn-success" onClick={() => {navigate("/Payment",{state:{id:1,name:flight.price}})}} >Book Now</button>
         </div>
         
          </div>
           
          ))  }
    <Footer />
    </div>
  )
}

export default SeachFlights
