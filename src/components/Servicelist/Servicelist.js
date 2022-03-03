// import React from 'react'

import "./servicelist.css";
// import fbqn from "./fbqn.jpg";

import { products } from "../../data";
import Services from "../Services/Services";

const Servicelist = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">OUR SERVICES ❤</h1>
        <hr />
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {/* {products.map((item) => (
          <Services key={item.id}  link={item.link} />
        ))} */}

        <Services/>
        <Services />
        <Services />
      </div>
      <button>ALL SERVICES</button>
    </div>
  );
};

export default Servicelist;
