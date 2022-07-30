import Navbar from './Components/Navbar';
import FormText from './Components/FormText';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  function showAlert(message) {
    setAlert({
      msg: message
    })
  }

  return (
    <>
  
    <Router>
      <Navbar title="TextUtils" />
      <Alert alert={alert} />
 
      <Routes>
      <Route path="/" element={<FormText showAlerts={showAlert} />}/>
      <Route path="/About" element={<About />}/>
    
      </Routes>

    </Router>

    </>
  );
}

export default App;
