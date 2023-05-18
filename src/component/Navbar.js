import React, { useEffect } from 'react';
import {
    useLocation,
    Link
    
  } from "react-router-dom";
  import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const changeback=()=>{
    
  }
  const history = useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('token')
    history('/login')
  }
  let location =useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location])
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>DROP NOTES!</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/"><button className='btn btn-outline-success'><h4>Home</h4></button></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/about"? "active":""}`} to="/about"><button className='btn btn-outline-success'><h4>About</h4></button></Link>
        </li>
       
        
        
      </ul>
      {!localStorage.getItem('token')?<div className='container sign'>
      <Link onClick={changeback} to='/login' class="btn btn-outline-success  active mx-2" role="button" aria-pressed="true"><h4>Login</h4></Link>
      <Link to='/signup' class="btn btn-outline-success  active mx-2" role="button" aria-pressed="true"> <h4>Sign up</h4></Link>
      </div>:<button onClick={handlelogout} className='logout btn btn-md btn-outline-success'><h4>Logout</h4></button>}
    </div>
  </div>
  
</nav>
    </div>;
}



export default Navbar;