import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return <div style={{ margin: `0 auto`, overflowX: 'hidden', minHeight: '100vh', paddingBottom: '4rem' }}>
    <Header/>
    {children}
    <Footer/>
  </div>;
}
