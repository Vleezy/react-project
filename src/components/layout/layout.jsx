import React from "react";

import Navbar from "../../containers/navbar/navbar";
import Footer from "../footer/footer";

const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
