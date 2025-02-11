import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
