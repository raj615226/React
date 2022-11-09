import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Address from "./Address/Address";
import React from "react";
import Login from '../src/login/login'
const App = () => {
    return (
      <div >
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/submit" element={<Address />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  };
  
  export default App;