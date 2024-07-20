import React, { useState } from 'react'
import authContext from './authContext';

const AuthState = (props) => {
    const [user,setUser]=useState({});

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
          credentials: 'include'
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
          credentials: 'include'
        });
        let json=response.json();
        //console.log(response);
        if(response.status===401){
          try{
            console.log("refresh");
            const r = await fetch("/user/refresh", {
              method: "GET",
              credentials: 'include'
            });
            console.log(r);
            json =await r.json();
            if (json.accessToken) {
              //setUser(json);
              console.log(json);
              const name=json.foundUser.user;
              const accessToken=json.accessToken;
              setUser({name,accessToken});
              return json.foundUser;
            }
            else return null;
            console.log(json);
          }
          catch(err){
            console.log(err);
          }
        }
        else return json;
      } catch (err) {
        console.error(err);
      }
    }
  return (
    <authContext.Provider
      value={{user,login,verify}}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
