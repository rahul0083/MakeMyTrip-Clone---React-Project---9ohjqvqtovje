import React from 'react'
import Header from './Header'
import { selectUser, userSlice } from './UserSlice';
import { useSelector } from 'react-redux';
import FlightBookPage from './FlightBookPage'
export default function HomeFlight() {
    const user=useSelector(selectUser);
  return (
    <div>
       {!user?( <Header name="Login or Signup"/>)
        :(<Header name={user.displayName}/>)
    
     }
     <FlightBookPage />
    </div>
  )
}
