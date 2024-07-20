import React, { useContext, useEffect, useState } from 'react'
import authContext from "../context/notes/authContext";
import { Outlet, Navigate, useLocation } from 'react-router-dom';
const ProtectedRoutes =() => {
    const {verify}=useContext(authContext);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const location=useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      const result = await verify();
      console.log(result);
      setIsAuthenticated(result);
    };
    checkAuth();
  }, [location,verify]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a loading spinner
  }
  else{
    console.log(isAuthenticated);
    return isAuthenticated?.user ? <Outlet /> : <Navigate to="/" />;
  }
}

export default ProtectedRoutes
