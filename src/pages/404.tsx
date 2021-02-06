import * as React from "react";
import Layout from "../components/layout";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not found</title>
        <html lang="en" />
      </Helmet>
      <Box as="section" pt={{ base: "8rem", md: "10rem" }} pb="5rem">
        <Container
          maxW="1280px"
          align="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="4xl">
            <code>404</code>
          </Heading>
          <Heading as="h2" size="xl">
            Page not found
          </Heading>
          <br />
          <Text>Sorry, we couldn’t find what you were looking for.</Text>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
