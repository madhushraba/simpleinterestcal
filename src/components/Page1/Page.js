import React from "react";
import "./page.css";
import saree from "./saree.jpg";

const Page = () => {
  return (
    <div className="ib">
      <div className="ib-left">
        <div className="ib-left-wrapper">
          {/* <h2 className="ib-intro">Hellos</h2> */}
          <h1 className="ib-name">
            WE HAVE MANY YEAR EXPERIENCE IN CONSULTANCE BUSUINESS
          </h1>

          <p className="ib-desc">
            I design and develop services for customers of all sizes,
            specializores 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta saepe ex nesciunt nam exercitationem?
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
      <div className="ib-right">
        <div className="ib-bg"></div>
        <img src={"https://images.pexels.com/photos/8512137/pexels-photo-8512137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" className="ib-img" />
      </div>
    </div>
  );
};

export default Page;
