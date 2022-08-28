import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Body } from './components/Body';
import WhiteBody from './components/WhiteBody';
import WhiteBody2 from './components/WhiteBody2';
import Login from './Pages/Login';
import About from './Pages/About';
import AllRoutes from './Pages/AllRoutes';





function App() {
  return (
    <>
    
    <Navbar/>
    <Body/>
    <WhiteBody/>
    <WhiteBody2/>
  
      
      {/* <AllRoutes/> */}
    
    
    
    
    
    </>
  );
}

export default App;
