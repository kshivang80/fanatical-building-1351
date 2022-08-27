import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Body } from './components/Body';
import WhiteBody from './components/WhiteBody';
import WhiteBody2 from './components/WhiteBody2';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Body/>
    <WhiteBody/>
    <WhiteBody2/>
  
      <Routes>
        <Route></Route>
      </Routes>
    
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
