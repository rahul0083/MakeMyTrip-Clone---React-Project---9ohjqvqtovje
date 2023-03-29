import { auth } from './Firebase';
import 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginuser, selectUser } from './UserSlice';
import firebase from 'firebase/app';
import { signInwithGoogle } from './Firebase';
import {signwithphone} from './Firebase'
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithPhoneNumber} from "firebase/auth";


export default function Login() {

  
  const redirect=()=>{
   return signInwithGoogle();
 
  }
 


    const [signUp,setSignUp]=useState(false);
    const [name,setName]=useState("");
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
   
    

    const register=(e)=>{
     e.preventDefault();

     if(!email){
      return alert("Email is required");
     }
     if(!name){
      return alert("Name is required");
     }
     if(!password){
      return alert("Password is required");
     }
    
      
    
     
      auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{

        userAuth.user.updateProfile({

           displayName:name
           }).then(()=>{
        
                  dispatch(loginuser({

                     email:userAuth.user.email,
                     uid:userAuth.user.uid,
                     displayName:name
                    

                  })) 

                 } )
               

      }).catch(error=>alert(error));

      setName("");
      setEmail("");
      setPassword("");

    }

    const signIn=(e)=>{
      
    e.preventDefault();
    
    
    if(!email){
      return alert("Email is required");
     }

     if(!password){
      return alert("Password is required");
     }


     auth.signInWithEmailAndPassword(email, password)
     .then(({user}) => {
     
       
      dispatch(loginuser({

                     email:user.email,  
                     uid:user.uid,
                     displayName:user.displayName
                    
      }))
                  
     })
     .catch(error=>alert(error))

   
    }
  return (
<>
    
    <div className='loginscreen'>

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGPgmB6nlOaDIfRGR3W3N7d5oOFa-caVjWY9RO0Z-&s' />
     
        {

             signUp===true ? (<form onSubmit={register}>
        
             <input type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}  />
             
             <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
             
             <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}  />
             
             <input type="submit" placeholder='Sign Up'   />
             
             <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
             
             
             </form>  ):
             (<form onSubmit={signIn} >
       
             <input type="email" placeholder='Email'   onChange={(e)=>setEmail(e.target.value)}/>
             
             <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
             
             <input type="submit" placeholder='Sign In' />
             
             
             <h4>Not a member ? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
             
             
             </form> )
         }
         <div className='google_signin'>
          <p>Or</p>
         <p> Login or Sign up with</p>
         <button onClick={redirect}><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="gimage" /> </button>
     </div>
     {/* or
     <input type="number" value={ph}  onChange={(e)=>setPh(e.target.value)} />
     <button onClick={redirect2}>Click me</button> */}


    </div>

    </>
  )
 
}
