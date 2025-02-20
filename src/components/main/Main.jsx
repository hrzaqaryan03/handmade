import React from "react";
import ShopBtn from "../../sharedComponents/shopBtn/ShopBtn";
import "./style.scss";
const Main = () => {
  return (
    <main className="main">
      <div className="main-top">
        <div className="main-top_container container">
          <h3>We Introduce our New</h3>
          <h1>
            <span>Collection</span>
            <span className="line"></span>
            <span>Diana</span>
          </h1>
          <p>Marketing non-disclosure agreement scrum project alpha lean startup startup business plan user experience angel </p>
          <ShopBtn />
        </div>
      </div>
      <div className="main-middle"></div>
      <div className="main-bottom"></div>
    </main>
  );
};

export default Main;
