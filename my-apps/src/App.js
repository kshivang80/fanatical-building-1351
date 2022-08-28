import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Body } from './components/Body';
import WhiteBody from './components/WhiteBody';




function App() {
  return (
    <>
    
    <Navbar/>
    <Body/>
    <WhiteBody/>

  
      
      {/* <AllRoutes/> */}
    
    
    
    
    
    </>
  );
}

export default App;
