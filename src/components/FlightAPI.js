import React,{useEffect,useState} from 'react'

export default function API() {
    const [flights,setFlights]=useState([]);
    const [result, setResult] = useState([]); // Filterd Flight
    const [isshow, setIshow] = useState(false);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    const search_btn=()=>{
      setResult(
        flights.filter(
          (flight) => {
            return flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase()
          }
        )
      )
      console.log(result);
      setIshow(true);
    }
   
    useEffect(()=>{
      fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights`)
      .then(response => response.json())
      .then((data) => setFlights(data))
      .catch(error => console.log(error))

    console.log(flights)
    },[])
   
  return (
    <div>
     <a className="btn btn-primary"  href="/" role="button"  onClick={search_btn}>SEARCH   </a>
    
       
         { result.map((index,flight)=>{
            <div key={index}>
              <div className='flight-route'>{flight.from} - {flight.to}</div>
              <div className='flight-time'>Time: {flight.departure.departureTime} | Date: {flight.departure.departureDate}</div>
              <div className='flight-airline'>Airline: {flight.airlineName}</div>
              <div className='flight-airline'>Via: {flight.via}</div>
              <div className='flight-price'>Price: ${flight.price}</div>
              {/* <button
                onClick={() => {navigate("/Payment",{state:{id:1,name:flight.price}})}}
              >Book</button> */}
            </div>
})}
        
      </div> 
   
  )
}
