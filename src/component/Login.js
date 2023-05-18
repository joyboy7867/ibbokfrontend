import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import backgroundImage from './quino-al-mBQIfKlvowM-unsplash.jpg';

const Login = () => {
    const host="http://localhost:5000"
    const [credential, setcredential] = useState({email:"",password:""})
    const history = useNavigate();
    const onChange=(e)=>{
        setcredential({...credential,[e.target.name]:e.target.value})
    } 

    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST", 
            
            headers: {
              "Content-Type": "application/json",
              
             
            },
            body: JSON.stringify({email:credential.email,password:credential.password}),
           
           
          });
          const json=await response.json()
          console.log(json)
          if(json.success){
            //redirect
            
           let a= localStorage.setItem('token',json.jwtdata)
           console.log(json.jwtdata)
           console.log(a)
            history('/');

          }
          else{
            alert("invalid cerdentail")
          }
    }
    return <div className='title row'>
      <div className='col-sm-12'><h1> "Unleash Your Ideas, Empowered by Drops Notes"</h1></div>
        <form  className='col-sm-12  loginform' onSubmit={handlesubmit}>
  <div className='mainform'>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label"><h4>Email address</h4></label>
    <input type="email" className="form-control"value={credential.email} id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1"  className="form-label"><h4>Password</h4></label>
    <input type="password" value={credential.password} className="form-control"  onChange={onChange} id="password" name='password'/>
  </div>
  
  <button type="submit" className="btn submit btn-outline-success">Login</button>
  </div>
</form>
    </div>;
}



export default Login;