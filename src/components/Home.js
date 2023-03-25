import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUser, userSlice } from './UserSlice';
import { useState } from 'react';
import Flight from './Flight'

 
export default function Home() {
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
    const user=useSelector(selectUser);
  
  return (
    <div >
     {!user?( <Header name="Login or Signup"/>)
     :(<Header name={user.displayName}/>)
     
     }
      <Navbar />
     <Flight />
    </div>
  )
}
