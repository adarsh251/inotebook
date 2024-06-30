import React, { useState } from 'react'
import NavBar from './components/NavBar'
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [theme,setTheme]=useState('light');
  const [bgColor,setBgColor]=useState('#DEE4EA');
  const [bgColor1,setBgColor1]=useState('#C7D1DB');
  function changeTheme(){
    if(theme==='light'){
      setTheme('dark');
      setBgColor('#101214');//70
      setBgColor1('#161A1D');//30
      document.body.style.backgroundColor="#161A1D";
    }
    else{
      setTheme('light');
      setBgColor('#C7D1DB');//70
      setBgColor1('#DEE4EA');//30
      document.body.style.backgroundColor="#DEE4EA";
    }
  }
  return (
    <>
    <Router>
    <div className='app'>
      <NavBar style={{theme,bgColor,bgColor1}} changeTheme={changeTheme}/>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/Home" element={<h1>Home</h1>}/>
        <Route path="/About" element={<h1>About</h1>}/>
      </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
