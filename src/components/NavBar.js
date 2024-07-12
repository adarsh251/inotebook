import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <>
      <style>
        {`
        
        .navbar {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            background-color: ${props.style.dark};
            padding: 10px;
            position: sticky;
            top: 0;
            z-index: 1;
        }
        a{
          color: ${(props.style.theme==='dark'?'#FFFFFF':'#000000')};
        }
        .navbar .project-title {
            font-size: 1.5em;
            margin-left: 5px;
            margin-right: 5px;
        }
        .navbar a {            
            text-decoration: none;
            padding: 5px 8px;
        }
        .nav-links a:hover {
            text-decoration: underline;
            
            // transition: all 0.3s ease;
            // border-radius:  10px;
            // background-color: ${props.style.mid};
            // box-shadow:inset 0px 0px 5px 3px ${props.style.dark};
            // padding: 10px 13px;
            // margin:5px;
        }
        .navbar .right {
            display: flex;
            align-items: center;
        }
        .mode{
            width:36px;
            height: 36px;
            border-radius: 18px;
            margin-left: 20px;
            margin-right: 0px;
        }
        .mode svg{
            margin: 3px;
            cursor: pointer;
            user-select: none;
        }
    `}
      </style>
      <div className="navbar">
        <div className="project-title">
          <Link to="/">iNoteBook</Link>
        </div>
        <div className="right">
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/new">Add Note</Link>
            <Link to="/notes">My Notes</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="mode" onClick={props.changeTheme}>
            {props.style.theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sun"
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
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
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
