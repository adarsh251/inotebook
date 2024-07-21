import React from "react";

const Four04 = () => {
  return (
    <>
    <style>
        {`
        .four04{
        display: flex;
        height:100vh;
        justify-content: center;
        background-color:white;
        }
        .four04 img{
        align-self: center;
        height:50vh;
        }
        `}
    </style>
    <div className="four04">
        <img src={process.env.PUBLIC_URL+'/notfound.svg'} alt="404" />
    </div>
        </>
  );
};

export default Four04;
