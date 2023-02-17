import logo from './logo.svg';
import './App.css';
import Map1 from './Map';
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Map2 from './Map2';
import Map3 from './Map3';
import Footer from './Footer';


function App() {
  
  return (
    <>
    <Nav/>
    <Routes>
        
        <Route path="/" element={<Map1 />} />
        <Route path="overview" element={<Map2/>} />
        <Route path="dashboard" element={<Map3/>} />
        
    </Routes>
    <Footer/>
    </>
   
     
  
  );
}

export default App;
