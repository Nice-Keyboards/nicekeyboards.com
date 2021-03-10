import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        overflowX: "hidden",
        minHeight: "100vh",
        paddingBottom: "4rem",
      }}
    >
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
