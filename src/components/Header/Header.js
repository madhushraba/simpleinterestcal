import React from "react";
// // import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const user = true;
  return (
    <div className="top">
      <div className="topleft">
        <h1 className="he">BUSINESS</h1>
      </div>

      <div className="topcenter">
        <ul className="toplist">
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">PROJECT</li>
          <li className="topListItem">BLOG</li>
          <li className="topListItem">FOLLOW</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
