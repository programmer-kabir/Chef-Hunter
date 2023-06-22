import React from "react";
import Header from "../SharePage.jsx/Header";
import { Outlet } from "react-router-dom";
import Footer from "../SharePage.jsx/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
