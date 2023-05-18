import React from 'react';
import Notes from './Notes';
import Addnote from './Addnote';





const Home = () => {
    
    return <div>
        <div className='row'>
            <div className='mount col-lg-6'><Addnote/></div>
            <div className='col-lg-6'><Notes/></div>
        
        </div>
        
    </div>;
}


export default Home;