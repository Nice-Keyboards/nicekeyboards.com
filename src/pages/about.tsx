import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
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
        <html lang="en" />
      </Helmet>
      <Box>
        <Box as="section" pt={{ base: "6rem", md: "8rem" }} pb="5rem">
          {/* <Container maxW="900px" my="2rem" display="flex" flexDir="column" textAlign="center">
            <Heading>Making Cutting Edge Accessible</Heading>
            <Text>We&#39;re focused</Text>
            <Heading>Contact</Heading>
            <Text>
              Interested in becoming a vendor for one of Nice Keyboards&#39;
              products?
            </Text>
            <Text>Looking to collaborate on a project?</Text>
            <Text>Got some feedback?</Text>
            <Text>
              Please don&#39;t hesitate to reach out via email to{" "}
              <strong>
                <Link href="mailto:nick@nicekeyboards.com">
                  nick@nicekeyboards.com
                </Link>
              </strong>{" "}
              or via Discord at <strong>Nicell#0001</strong>.
            </Text>
          </Container> */}
        </Box>
      </Box>
    </Layout>
  );
};

export default aboutPage;
