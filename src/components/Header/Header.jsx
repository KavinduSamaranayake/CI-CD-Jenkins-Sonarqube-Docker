import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;