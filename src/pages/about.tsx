import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const aboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About - Nice Keyboards</title>
        <meta
          name="description"
          content="Learn more about Nice Keyboards and find out how to get in contact."
        />
      </Helmet>
    </Layout>
  );
};

export default aboutPage;
