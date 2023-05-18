import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import backgroundImage from './quino-al-mBQIfKlvowM-unsplash.jpg';

const Signup = () => {
    const host="http://localhost:5000"
    const [credential, setcredential] = useState({name:"",email:"",password:"",cpassword:""})
    const history = useNavigate();
    const onChange=(e)=>{
        setcredential({...credential,[e.target.name]:e.target.value})
    } 
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const {name,email,password,cpassword}=credential;
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST", 
            
            headers: {
              "Content-Type": "application/json",
              
             
            },
            body: JSON.stringify({name,email,password}),
           
           
          });
          const json=await response.json()
          console.log(json)
          if(json.success){
            //redirect
            localStorage.setItem('token',json.jwtdata)
            history('/login');

          }
          else{
            alert("invalid cerdentail")
          }
          
    }
    return <div>
       <div ><h1> "Drops Notes: Your Digital Companion for Limitless Ideas"</h1></div>
        <form  className='container signupform' onSubmit={handlesubmit} >
        <div className='mainform2'>
        <div className="mb-3">
    <label htmlfor="name" className="form-label"><h4>Name</h4></label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange}  aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlfor="email" className="form-label"><h4>Email address</h4></label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="password"  className="form-label"><h4>Password</h4></label>
    <input type="password"  className="form-control" onChange={onChange}  id="password" name='password'/>
  </div>
  <div className="mb-3">
    <label htmlfor="cpassword"  className="form-label"><h4>Confirm Password</h4></label>
    <input type="password"  className="form-control" onChange={onChange} id="cpassword" name='cpassword'/>
  </div>
  
  <button type="submit" className="btn submit btn-outline-success">Sign Up</button>
  </div>
</form>
    </div>;
}


export default Signup;