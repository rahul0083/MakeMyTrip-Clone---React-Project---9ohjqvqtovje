import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { loginuser, logoutuser, selectUser } from './UserSlice';
import {useDispatch, useSelector, useContext}  from 'react-redux';
import Header from './Header';
import Footer from './Footer';

export default function FlightBookPage() {

  const user=useSelector(selectUser)
    const location=useLocation();
    

    const price=location.state.name;

    const navigate=useNavigate();
    const [name,setName]=useState();
    const [card,setCard]=useState();
    const [cvv,setCvv]=useState();
    const [exDate,setExDate]=useState();

   

    const paymentHandler=()=> {
        if(!card || !name || !cvv || !exDate)
         alert("Please fill all the payment details!!");
         else 
          if(!user){
            alert("Please login to continue..")
          
         }
        else {
            navigate("/Booked");
        }
    }
  
  return (
 <div > 
       {!user?( <Header name="Login or Signup"/>)
     :(<Header name={user.displayName}/>)}
     <div className='payment-page'>
      <h1>Complete your booking</h1>
           
                <h3>Enter Your Payment Details</h3>
                <form>
                  <div>
                  
                    <input onChange={(e)=>setName(e.target.value)}
                    required value={name} type="name" placeholder="Card Holder's name" />
                     </div>
                     <div>
                    
                    <input onChange={(e)=>setCard(e.target.value)}
                    required value={card} type="number" max="9999999999999999" placeholder="Card Number" />
                      </div>
                      <div>
                      
                    <input onChange={(e)=>setCvv(e.target.value)}
                    required value={cvv} type="number" maxLength="3" placeholder='CVV' />
                    </div>
                    <div>
                        <label htmlFor='ex-date'>Expiry Date:-</label>
                        <input onChange={(e)=>setExDate(e.target.value)}
                        required value={exDate} type="tel" id="ex-date" maxLength="5"  placeholder='MM/YY'/>
                    </div>
                    <h2>Total Amount:- Rs {price}</h2>
                    
                    <button type="button" class="btn btn-success" onClick={paymentHandler}>Proceed to Payment</button>
                </form>
                <button type="button" class="btn btn-danger" onClick={()=> navigate("/")}>Go Back</button>
               
            </div>
            <Footer />
 </div>
  )
}
