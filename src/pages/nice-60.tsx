import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const nice60 = () => {
  return (
    <Layout>
      <Helmet>
        <title>nice!60 - Nice Keyboards</title>
        <meta
          name="description"
          content="The nice!60 is a wireless standard 60% PCB with hotswap sockets and underglow with unbelievable battery life."
        />
        <html lang="en" />
      </Helmet>
    </Layout>
  );
}

export default nice60;
