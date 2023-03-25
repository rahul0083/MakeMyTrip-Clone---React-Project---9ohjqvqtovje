import React, { useEffect } from 'react'
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Login from './Login';
import { loginuser, logoutuser, selectUser } from './UserSlice';
import {useDispatch, useSelector}  from 'react-redux';
import { auth } from './Firebase';
import Home from './Home';
const App = () => {

  const user=useSelector(selectUser)

  const dispatch=useDispatch();
  
  useEffect(()=>{
  
    auth.onAuthStateChanged(userAuth=>{
       if(userAuth){
        dispatch(loginuser({
  
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName
         
  
       }))
       }
       else{
           dispatch(logoutuser())
       }
  
    })
   
  },[dispatch])
  

  return (
    <div id="main">
   
      <Home />

    </div>
  )
}


export default App;
