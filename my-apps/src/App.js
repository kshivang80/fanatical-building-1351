import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Body } from './components/Body';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Body/>
  
      <Routes>
        <Route></Route>
      </Routes>
    
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
