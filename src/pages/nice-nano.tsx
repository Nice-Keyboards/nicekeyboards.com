import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const niceNano = () => {
  return (
    <Layout>
      <Helmet>
        <title>nice!nano - Nice Keyboards</title>
        <meta
          name="description"
          content="The nice!nano is a Pro Micro drop-in replacement board that makes building wireless keyboards a breeze."
        />
        <html lang="en" />
      </Helmet>
    </Layout>
  );
};

export default niceNano;
