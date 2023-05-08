import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import { loginuser, logoutuser, selectUser } from './UserSlice';
import {useDispatch, useSelector, useContext}  from 'react-redux';
import Footer from './Footer';
export default function BookingConfirmation() {
    const user=useSelector(selectUser)
    const navigate=useNavigate();
  return (
    <div>
              {!user?( <Header name="Login or Signup"/>)
     :(<Header name={user.displayName}/>)}
     <div className='booking'>
      <img src="" alt="" />
      <h3>Congratulations!!Your Booking is Confirmed...</h3>
      <button type="button" class="btn btn-success" onClick={()=>navigate("/")} >Go To Home Page</button>
     
            </div>
            <Footer />
    </div>
  )
}
