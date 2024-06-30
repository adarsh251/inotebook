import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <>
      <style>
        {`
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${props.style.bgColor};
            padding: 10px;
            position: sticky;
            top: 0;
            z-index: 1;
        }
        .navbar .project-title {
            font-size: 1.5em;
            margin-left: 5px;
            margin-right: 5px;
        }
        .navbar a {            
            text-decoration: none;
            padding: 5px 8px;
            transition: all 0.3s ease;
        }
        .nav-links a:hover {
            text-decoration: underline;
            border-radius:  10px;
            background-color: ${props.style.bgColor1};
            box-shadow:inset 0px 0px 5px 3px ${props.style.bgColor};
            padding: 10px 13px;
            margin:5px;
        }
        .navbar .right {
            display: flex;
            align-items: center;
        }
        .navbar input[type="text"] {
            padding: 6px;
            margin-right: 10px;
            border: none;
            border-radius: 4px;
        }
        .navbar input[type="submit"] {
            padding: 6px 10px;
            background-color: ${props.style.bgColor};
            border: none;
            outline: 0.05rem solid;
            border-radius: 2px;
            cursor: pointer;
        }
        .navbar input[type="submit"]:hover {
          background-color: ${props.style.bgColor1};
          }
        .mode{
            width:36px;
            height: 36px;
            background-color: ${props.style.bgColor1};
            border-radius: 18px;
            border:1px solid #738496;
            margin-left: 20px;
            margin-right: 0px;
        }
        .mode svg{
            margin: 3px;
        }
    `}
      </style>
      <div className="navbar">
        <div className="project-title">
          <Link to="/">iNoteBook</Link>
        </div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="right">
          <input type="text" placeholder="Search..." />
          <input type="submit" value="Submit" />
          <div className="mode" onClick={props.changeTheme}>
            {props.style.theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
