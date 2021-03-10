import {
  Box,
  Container,
  Heading,
  VStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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
      <Box>
        <Box as="section" pt={{ base: "5rem", md: "7rem" }}>
          <Container
            maxW="1280px"
            my="2rem"
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
          >
            <img
              src="/cutting_edge.svg"
              style={{ width: "25rem", height: "18rem", objectFit: "contain" }}
            />
            <VStack py="2rem" maxW="520px">
              <Heading pb="1rem">Making Cutting Edge Accessible</Heading>
              <Text>
                Nice Keyboards brings recent advancements in wireless technology
                to market making it easy to reap the benefits of longer battery
                life, better connectivity, and more feature-full software.
              </Text>
            </VStack>
          </Container>
        </Box>

        <Box
          as="section"
          background={useColorModeValue("gray.100", "gray.700")}
          py="0.01rem"
        >
          <Container
            maxW="1280px"
            my="2rem"
            display="flex"
            flexDir="row"
            flexWrap="wrap-reverse"
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
          >
            <VStack py="2rem" maxW="520px">
              <Heading pb="1rem">Designed for DIY</Heading>
              <Text>
                Each product is designed carefully with a tinkering user in
                mind. Schematics are public to offer a deeper look into how the
                board is designed. Documentation and support channels readily
                available to get any question answered.
              </Text>
            </VStack>
            <img
              src="/design.svg"
              style={{ width: "25rem", height: "18rem", objectFit: "contain" }}
            />
          </Container>
        </Box>
        <Box as="section" py="0.01rem" pb="5rem">
          <Container
            maxW="1280px"
            my="2rem"
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
          >
            <img
              src="/contact.svg"
              style={{ width: "25rem", height: "18rem", objectFit: "contain" }}
            />
            <VStack py="2rem" maxW="520px">
              <Heading pb="1rem">Contact</Heading>
              <Text>
                Interested in becoming a vendor for one of our products?
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
            </VStack>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default aboutPage;
