import React from 'react'
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import HotelIcon from '@material-ui/icons/Hotel';
import TrainIcon from '@material-ui/icons/Train';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import Login from './Login';
import { selectUser, userSlice } from './UserSlice';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
export default function Navbar() {
  
  return (
    <>
    
    <div className='navbar'>
        <div className="navbar_options">
        <div className="navbar_items">
            <a href="/">  <FlightTakeoffOutlinedIcon /> <span className='navbar_name'>Flights</span> </a>
        </div>
        <div className="navbar_items">
        <a href="/"><HotelIcon /> <span className='navbar_name'>Hotels</span></a>
        </div>
        <div className="navbar_items">
        <a href="/"><TrainIcon /> <span className='navbar_name'>Trains</span></a>
        </div>
        <div className="navbar_items">
        <a href="/"><DirectionsBusIcon /> <span className='navbar_name'>Buses</span></a>
        </div>
        <div className="navbar_items">
        <a href="/"><LocalTaxiIcon /> <span className='navbar_name'>Cabs</span></a>
        </div>
        </div>
    </div>
    
    </>
  )
}
