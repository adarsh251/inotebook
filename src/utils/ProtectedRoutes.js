import React, { useContext, useEffect, useState } from 'react'
import authContext from "../context/notes/authContext";
import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRoutes =() => {
    const {verify}=useContext(authContext);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await verify();
      console.log(result);
      setIsAuthenticated(result);
    };
    checkAuth();
  }, [verify]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a loading spinner
  }
  else{
    console.log(isAuthenticated);
    return isAuthenticated.user ? <Outlet /> : <Navigate to="/" />;
  }
}

export default ProtectedRoutes
