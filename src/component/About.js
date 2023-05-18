import React, { useEffect } from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/NotesContext';
import backgroundImage from './8706670_3973263-removebg-preview.png'

const About = () => {
   
  
    return <div>
        <div className='aboutus'>
            <h2 className='abtxt'>Welcome to our world of web development! We are a passionate team of talented individuals dedicated to crafting exceptional digital experiences. With a deep-rooted love for technology and a keen eye for design, we thrive on transforming ideas into reality.</h2>
            <img className='abimg' src={backgroundImage}/>
        </div>
    </div>
}


export default About;