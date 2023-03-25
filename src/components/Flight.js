import React from "react";
import CitiesList from "./FlightOptions";

export default function Widget() {
  return (
    <div className="widgetLoader">
      <div className="widgetSection">
    
        <div className="widgetSection_options">
         <CitiesList label="From" type="text" defaultValue="Mumbai"/>
        </div>
        <div className="v1"> </div>
         <div className="widgetSection_options">
        <CitiesList label="To" type="text" defaultValue="New Delhi" />
        </div>
        <div className="v2"> </div>
        <div  className="widgetSection_options">
         <CitiesList  label="Departure " type="date" defaultValue="2023-03-24"/> 
        </div>
        <div className="v3"> </div>
        <div className="widgetSection_options">
          
         <CitiesList label="Return" type="date" defaultValue="2023-03-24"/> 
         
        </div>
      
      </div>
        <div className="search_btn">
        <a class="btn btn-primary"  href="/" role="button" >SEARCH   </a>
        </div>
    </div>
  );
}
