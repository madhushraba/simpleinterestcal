import React from "react";
import "./topbar.css";

function Topbar() {
  
  return (
    <div className="top1">
      <div className="topleft">
        <h1>Emails</h1>
      </div>

      <div className="topcenter">
        <ul className="toplist">
        <i className="topicon fa fa-facebook"></i>
        <i className="topicon fa fa-instagram"></i>
        <i className="topicon fa fa-twitter"></i>
        <i className="topicon fa fa-pinterest"></i>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
