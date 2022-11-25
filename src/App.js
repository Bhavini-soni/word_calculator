
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import TextForm from './components/TextForm';
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="SoniMedia" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>
          <Route path="/about" element={<About/>} />
          
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>}/>
        

        
        </Routes>
        </Router>

{/* <About/> */}

    </>
  );
}

export default App;
