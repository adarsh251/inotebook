import React, { useState,useEffect } from 'react'
import NavBar from './components/NavBar'
import "./App.css";
import NoteState from './context/notes/noteState';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import Login from './components/Login';
import Signup from './components/Signup';
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
  useEffect(() => {
    changeTheme();
    // eslint-disable-next-line
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      
      element:<>
      <Login />
      </>,
    },
    {
      path: "/signup",
      
      element:<>
      <Signup />
      </>,
    },
    {
      path:"/Home",
      element:
      <>
        <NavBar style={{theme,bgColor,bgColor1}} changeTheme={changeTheme}/>
        <AddNote/>
        <Notes/>
      </>,
    },
    {
      path:"/new",
      element:
      <>
        <NavBar style={{theme,bgColor,bgColor1}} changeTheme={changeTheme}/>
      </>,
    },
    {
      path:"/About",    
      element:
      <>
        <NavBar style={{theme,bgColor,bgColor1}} changeTheme={changeTheme}/>
        <About/>
      </>,
    }
  ]);
  return (
    <>
    <NoteState>
    
    <RouterProvider router={router} />
    </NoteState>
    </>
  )
}

export default App
