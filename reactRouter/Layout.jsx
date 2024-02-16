import React from "react";
import Header from "./src/component/Header/header";
import Footer from "./src/component/footer/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
