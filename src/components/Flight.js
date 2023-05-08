import React, { useState, useEffect } from "react";
import CitiesList from "./FlightOptions";
import FlightAPI from "./FlightAPI";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FlightIcon from "@material-ui/icons/Flight";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser, selectdata, setdata } from "./UserSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


function Flight() {
  const data1 = useSelector(selectdata);
  const dispatch = useDispatch();

  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(true);
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const today = new Date();
  const numberOfDaysToAdd = 2;
  const date1 = today.setDate(today.getDate());
  const defaultValue1 = new Date(date1).toISOString().split("T")[0];
  const date2 = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue2 = new Date(date2).toISOString().split("T")[0];
  const [data, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights"
        );
        setFlights(response.data);
        setData(response.data)
        console.log(flights);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const searchHandel = (e) => {
    e.preventDefault();

  const result1 = flights.filter((flight) => {
      return (
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase()
      )
    });

    dispatch(
      setdata({
        data: result1,
      })
    );
   // Validation
   console.log("rsult1",result1);
    if(result1.length===0){
      toast.warning("Sorry!! Currently Flights Not Available For This Route")

    }else
    if(!data){
      toast.warning("Network Connection is Not Good")
     }
    else if(result1){
       toast.success("Found Flights Succesfully!")
       navigate("/Search")
      console.log("available");
    }
    

  
  };

  return (
    <>
      (
        <div className="widgetLoader">
          <form onSubmit={searchHandel}>
            <div className="widgetSection">
              <div className="widgetSection_options">
                <label htmlFor="From">From</label>
                <br />
              
                <select value={from} onChange={(e)=>{
                  setFrom(e.target.value)
                }}>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Goa">Goa</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Jaipur">Jaipur</option>
                </select>
              </div>
              <div className="v1"> </div>
              <div className="widgetSection_options">
                <label htmlFor="To">To</label>
                <br />
               

<select value={to} onChange={(e)=>{
                  setTo(e.target.value)
                }}>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Goa">Goa</option>
                  <option value="Indore">Indore</option>
                  <option value="Jaipur">Jaipur</option>
                </select>
              </div>
              <div className="v2"> </div>
              <div className="widgetSection_options">
                <label htmlFor="Depart">Departure</label>
                <br />
                <input
                  type="date"
                  id="Depart"
                  placeholder="Depart"
                  defaultValue={defaultValue1}
                />
              </div>
              <div className="v3"> </div>
              <div className="widgetSection_options">
                <label htmlFor="Return">Return</label>
                <br />
                <input
                  type="date"
                  id="Return"
                  placeholder="Return"
                  defaultValue={defaultValue2}
                />
              </div>
            </div>
            <div className="search_btn">
              <button
                className="btn btn-primary"
                role="button"
                onClick={searchHandel}
              >
                SEARCH{" "}
              </button>
            </div>
          </form>
        </div>
      )
   
    </>
  );
}

export default Flight;
