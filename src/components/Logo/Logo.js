import React from "react";
import './Logo.css';
import Tilt from "react-parallax-tilt";
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt" style={{height: "110px", width: '110px', backgroundColor: "cyan" }}>
        <div className="Tilt" >
          <h1><img style={{paddingTop: '5px', height: '100px', width: '100px'}} src={brain} alt="S"></img></h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
