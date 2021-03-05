import {
  Box,
  useColorModeValue,
  Container,
  Flex,
  chakra,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
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
      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "4rem", md: "6rem" }}
          pb="0.01rem"
          backgroundImage={`url('/nicenanobg-${useColorModeValue(
            "light",
            "dark"
          )}.svg')`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Container maxW="1280px" my="2rem">
            <Flex justify="center" alignItems="center" wrap="wrap">
              <Box
                mr="1em"
                maxHeight="50vh"
                maxWidth="275px"
                w="100%"
                ml="1rem"
              >
                <StaticImage
                  src="../images/nicenano.png"
                  alt="nice!nano"
                  height={400}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={80}
                />
              </Box>
              <Box textAlign="center" pt="2rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Meet the
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    {" "}
                    nice!nano
                  </Box>
                  .
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  The nice!nano is a Pro Micro drop-in replacement board that
                  makes building wireless keyboards a breeze.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box as="section">
          <Container maxW="1280px" my="2rem">
            <Flex justify="center" alignItems="center" wrap="wrap">
              <Box
                mr="1em"
                maxHeight="50vh"
                ml="1rem"
              >
                <video
                  height={450}
                  style={{ maxHeight: "50vh", height: "450px" }}
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source src="/nicenano-thin.webm" type="video/webm" />
                  <source
                    src="/nicenano-thin.mov"
                    type="video/quicktime"
                  ></source>
                  <img
                    src="/nicenano-thin.gif"
                    height={450}
                    style={{ maxHeight: "50vh", height: "450px" }}
                  />
                </video>
              </Box>
              <Box textAlign="center" pt="2rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Super
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    {" "}
                    Thin
                  </Box>
                  .
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  The nice!nano uses a mid-mount USB-C port making it only 3.2mm
                  thick. That's thinner than a Pro Micro.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default niceNano;
