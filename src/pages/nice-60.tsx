import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
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
      <Box>
        <Box as="section" pt={{ base: "8rem", md: "10rem" }} pb="5rem">
        <Container maxW="1280px" my="2rem" display="flex" flexDir="column" alignItems="center">
          <img src="/under_construction.svg" style={{height: '16rem'}}/>
          <Heading pt="2rem">Coming Soon</Heading>
        </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default nice60;
