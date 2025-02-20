import React from "react";
import "./style.scss";

const ShopBtn = () => {
  return (
    <button className="shop-btn">
      <span>SHOP NOW</span>
      <span>
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7245 7.5C13.8018 6.1141 11.7357 3.30033 11.5003 0H12.3741C12.7079 4.23944 16.3736 7.57895 20.8466 7.57895C21.0666 7.57895 21.2845 7.57087 21.5003 7.55502V8.44498C21.2845 8.42913 21.0666 8.42105 20.8466 8.42105C16.3736 8.42105 12.7079 11.7606 12.3741 16H11.5003C11.7357 12.6997 13.8018 9.8859 16.7245 8.5H0.5V7.5H16.7245Z"
            fill="#56443E"
          />
        </svg>
      </span>
    </button>
  );
};

export default ShopBtn;
