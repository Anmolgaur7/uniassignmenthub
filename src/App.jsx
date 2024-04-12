import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Main from './Pages/Main.jsx';
import About from './Pages/About.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Components/Footer.jsx';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>   
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
