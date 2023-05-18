import './App.css';
import {
  
  Routes,
  Route,
  BrowserRouter,
  
} from "react-router-dom";
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import NoteState from './context/notes/NotesState';
import Login from './component/Login';
import Signup from './component/Signup';
import backgroundImage from './component/quino-al-mBQIfKlvowM-unsplash.jpg';

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <div className='mountback' style={{backgroundImage:`url(${backgroundImage})`,backgroundSize:"cover"}}>
      <Routes>
        <Route exact path='/about'element={<About/>}/>
        <Route exact path='/'element={<Home/>}/>
        <Route exact path='/login'element={<Login/>}/>
        <Route exact path='/signup'element={<Signup/>}/>
      
      </Routes>
      </div>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
