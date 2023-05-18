import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ props, children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
