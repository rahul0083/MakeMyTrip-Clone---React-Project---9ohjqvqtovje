import React,{useState,useEffect} from "react";
import CitiesList from "./FlightOptions";
import FlightAPI from './FlightAPI'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";

export default function Widget() {
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]) 
  const [result, setResult] = useState([]); 
  const [isshow, setIshow] = useState(false);

  const [alert, setAlert]=useState(false);
  const [alert2,setAlert2]=useState(false);


  useEffect(() => {
    fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights`)
      .then(response => response.json())
      .then((data) => setFlights(data))
      .catch(error => console.log(error))

    console.log(flights)
  }, [])

  const searchHandel = () => {
    
    //  navigate("/search")
      setResult(
        flights.filter(
          (flight) => {
            return flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase()
          }
        )
      )
      console.log(result);
      //  navigate("/search")
    }
  
  return (
    <div className="widgetLoader">
      <div className="widgetSection">
    
        <div className="widgetSection_options">
        <label htmlFor='From' >From</label><br />
          <input required className={alert?"red":"black"} type="text" id='From' placeholder='From' value={from} 
          onChange={(e) => {
          
            setFrom(e.target.value)
            }} />
        </div>
        <div className="v1"> </div>
         <div className="widgetSection_options">
         <label htmlFor='To'>To</label><br />
          <input required className={alert2?"red":"black"} type="text" id='To' placeholder='To' value={to} 
          onChange={(e) => {
          
            setTo(e.target.value)
            }} />
        </div>
        <div className="v2"> </div>
        <div  className="widgetSection_options">
        <label htmlFor='Depart'>Departure</label><br />
          <input type="date" id='Depart' placeholder='Depart' />
        </div>
        <div className="v3"> </div>
        <div className="widgetSection_options">
          
        <label htmlFor='Return'>Return</label><br />
          <input type="date" id='Return' placeholder='Return' />
         
        </div>
      
      </div>
        <div className="search_btn">
        <button className="btn btn-primary" role="button"  onClick={searchHandel}>SEARCH   </button>
        </div>
      
      {   result.map((flight, index) => (
        
            <div key={index}>
              <div className='flight-route'>{flight.from} - {flight.to}</div>
              <div className='flight-time'>Time: {flight.departure.departureTime} | Date: {flight.departure.departureDate}</div>
              <div className='flight-airline'>Airline: {flight.airlineName}</div>
              <div className='flight-airline'>Via: {flight.via}</div>
              <div className='flight-price'>Price: Rs {flight.price}</div>
              <button type="button" className="btn btn-success" onClick={() => {navigate("/Payment",{state:{id:1,name:flight.price}})}} >Book</button>
             
              </div>

              ))} 
             
    </div>
  );
}


