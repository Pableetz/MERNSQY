import React from "react";
import Navbar from "../Navbar/Navbar";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Wrapper;
