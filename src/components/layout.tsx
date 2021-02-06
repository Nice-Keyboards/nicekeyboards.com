import React from "react";
import Header from "./header";

export default function Layout({ children }) {
  return <div style={{ margin: `0 auto`, overflowX: 'hidden' }}>
    <Header/>
    {children}
  </div>;
}
