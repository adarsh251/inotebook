import React, { useState } from 'react'
import authContext from './authContext';

const AuthState = (props) => {
    const [user,setUser]=useState({});
    
    const test=()=>{
      console.log(user);
    }
    const login=async(email,password)=>{
      //console.log(email+"+"+password);
      try {
        const response = await fetch("/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const json = await response.json();
        //console.log(json);
        //console.log(response);
        if (json.accessToken) {
          setUser(json);
          //console.log(user);
          const name=json.name;
          return {name};
          
  
        } else {
          // handle login error
          console.error("Login failed");
          const msg=json.msg;
          return {msg};
        }

      } catch (err) {
        console.error(err);
        const msg="Internal server error";
        return {msg};
      }


    }

    const verify=async()=>{
      try {
        const response = await fetch("/user/credentials", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        const json = await response.json();
        return json;
      } catch (err) {
        console.error(err);
      }
    }
  return (
    <authContext.Provider
      value={{user,login,verify,test}}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
