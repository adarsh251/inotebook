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
import Home from './components/Home';
function App() {
  const [theme,setTheme]=useState('light');
  const [dark,setDark]=useState('#F6D83B');
  const [mid,setMid]=useState('#FCF0C4');
  const [light,setLight]=useState('#faf7eb');
  function changeTheme(){
    if(theme==='light'){
      setTheme('dark');
      setDark('#321852');
      setMid('#541c84');
      setLight('#8926b9');
      document.body.style.backgroundColor="#541c84";
      document.body.style.color="#FFFFFF";
    }
    else{
      setTheme('light');
      setDark('#F6D83B');
      setMid('#FCF0C4');
      setLight('#faf7eb');
      document.body.style.backgroundColor="#FCF0C4";
      document.body.style.color="#000000";
    }
  }
  useEffect(() => {
    document.body.style.backgroundColor="#FCF0C4";
    document.body.style.color="#000000";
    
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
        <NavBar style={{theme,dark,mid,light}} changeTheme={changeTheme}/>
        <Home style={{theme,dark,mid,light}} mode={theme}/>
      </>,
    },
    {
      path:"/new",
      element:
      <>
        <NavBar style={{theme,dark,mid,light}} changeTheme={changeTheme}/>
        <AddNote style={{theme,dark,mid,light}}/>
      </>,
    },
    {
      path:"/notes",
      element:
      <>
        <NavBar style={{theme,dark,mid,light}} changeTheme={changeTheme}/>
        <Notes style={{theme,dark,mid,light}}/>
      </>,
    },
    {
      path:"/About",    
      element:
      <>
        <NavBar style={{theme,dark,mid,light}} changeTheme={changeTheme}/>
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
