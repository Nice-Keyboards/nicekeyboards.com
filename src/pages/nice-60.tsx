import {
  Box,
  chakra,
  Container,
  Flex,
  Text,
  useColorModeValue,
  Table,
  Tbody,
  Td,
  Tr,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import theme from "../@chakra-ui/gatsby-plugin/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/pro-duotone-svg-icons';
import FindAStore from "../components/find-a-store";

const stores = [
  {
    region: "North America",
    stores: [
      {
        name: "1upkeyboards",
        url: "https://1upkeyboards.com/shop/controllers/nice60-ble-pcb/",
        country: "US",
        type: "woocommerce",
      },
      {
        name: "Typeractive.xyz",
        url: "https://typeractive.xyz/products/nice-60",
        country: "US",
        type: "shopify",
      },
    ],
  },
];

const gray900 = theme.colors.gray[900];
const gray600 = theme.colors.gray[600];

const gradientRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
`;

const ZMKcss = css`
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: -1.5em;
  top: -1.5em;
  padding: 1.5em;
  filter: blur(1.5em);
  box-sizing: content-box;
  animation: ${scale} 4s ease-in-out infinite;

  &:before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 142%;
    height: 142%;
    left: -21%;
    top: -21%;
    position: absolute;
    animation: ${gradientRotate} 4s linear infinite;
    background: linear-gradient(0deg, #026fc5, #7829d1);
  }
`;

const nice60 = () => {
  return (
    <Layout>
      <Helmet>
        <title>nice!60 - Nice Keyboards</title>
        <meta
          name="description"
          content="The nice!60 is a wireless standard 60% PCB with hotswap sockets and underglow with unbelievable battery life."
        />
      </Helmet>
      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "4rem", md: "4rem" }}
          pb="0.01rem"
          background={useColorModeValue("gray.100", "gray.700")}
          backgroundImage={`url('/nice60bg-${useColorModeValue(
            "light",
            "dark"
          )}.svg')`}
          backgroundSize="cover"
          backgroundPosition="bottom"
        >
          <Container maxW="1280px" mb="3rem" mt="1rem">
            <Flex justify="space-evenly" alignItems="center" wrap="wrap">
              <Box
                mr={{ base: "1rem", lg: "-600px" }}
                maxHeight="50vh"
                w="100%"
                ml="1rem"
                css={css`
                  filter: drop-shadow(
                    0px 10px 20px ${useColorModeValue(gray600, gray900)}
                  );
                `}
              >
                <StaticImage
                  src="../images/nice60main.png"
                  alt="nice!nano"
                  height={600}
                  placeholder="none"
                  imgStyle={{
                    objectFit: "contain",
                    maxHeight: "50vh",
                  }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={80}
                />
              </Box>
              <Box textAlign="center" pt="2rem" zIndex="1">
                <chakra.h1
                  maxW="19ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  textAlign="left"
                  lineHeight="1.2"
                  display="flex"
                  flexDir="column"
                  alignItems={{ base: "center", lg: "flex-start" }}
                  color="white"
                >
                  <Box mb="20px" px="15px" backgroundColor="gray.500">
                    Unbelievable
                  </Box>
                  <Box mb="20px" px="15px" backgroundColor="gray.500">
                    Battery Life
                  </Box>
                  <Box mb="20px" px="15px" backgroundColor="cyan.500">
                    nice!60
                  </Box>
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.9}
                  fontSize={{ base: "lg", lg: "xl" }}
                  textAlign="left"
                  mt="6"
                >
                  Get months of battery life and charge back up in hours.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box as="section" pt={{ base: "4rem", md: "5rem" }} overflow="hidden">
          <Container maxW="1280px">
            <Flex direction="column" align="center">
              <Box textAlign="center" pb="3rem">
                <chakra.h1
                  maxW="30ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    Hotswap
                  </Box>{" "}
                  Sockets Installed
                </chakra.h1>
              </Box>
              <Flex wrap="wrap" justify="center">
                <List
                  maxW="560px"
                  mx="auto"
                  opacity={0.95}
                  fontSize={{ base: "sm", sm: "lg", lg: "xl" }}
                  mt={{ base: "0rem", lg: "2rem" }}
                  pb="3rem"
                  spacing={10}
                >
                  <ListItem>
                    <ListIcon color="cyan.500" fontSize="1.5em">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </ListIcon>
                    Quickly install your Cherry MX style switches
                  </ListItem>
                  <ListItem>
                    <ListIcon color="cyan.500" fontSize="1.5em">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </ListIcon>
                    Easily swap out different switch types
                  </ListItem>
                  <ListItem>
                    <ListIcon color="cyan.500" fontSize="1.5em">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </ListIcon>
                    Absolutely no soldering required
                  </ListItem>
                </List>
                <Box
                  css={css`
                    filter: drop-shadow(
                      0px 15px 30px ${useColorModeValue(gray600, gray900)}
                    );
                  `}
                  maxW="900px"
                  w="100%"
                  mr="-20%"
                  minW="450px"
                  pl="1em"
                  lineHeight="0"
                >
                  <StaticImage
                    src="../images/nice60hotswap.png"
                    alt="nice!60"
                    width={900}
                    placeholder="none"
                    imgStyle={{
                      maskImage:
                        "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
                      WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0.2) 90%, transparent)",
                    }}
                    loading="eager"
                    draggable={false}
                    formats={["auto", "webp", "avif"]}
                    quality={80}
                  />
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box
          as="section"
          py={{ base: "5rem", md: "6rem" }}
          background={useColorModeValue("gray.100", "gray.700")}
        >
          <Container maxW="1280px">
            <Flex
              direction={{ base: "column", lg: "row" }}
              justify="space-evenly"
              alignItems="center"
            >
              <Box
                position="relative"
                zIndex="1"
                mx="4em"
                mb={{ base: "6rem", lg: "0" }}
                mt={{ base: "2rem", lg: "0" }}
              >
                <Box css={ZMKcss} />
                <img
                  src="/zmk_logo.svg"
                  alt="ZMK Logo"
                  style={{
                    width: "20rem",
                    zIndex: 2,
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Flex flexDir="column" justify="center">
                <Box textAlign="center" pb="3rem">
                  <chakra.h1
                    maxW="30ch"
                    mx="auto"
                    fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                    fontFamily="heading"
                    letterSpacing="tight"
                    fontWeight="bold"
                    mb="16px"
                    lineHeight="1.2"
                  >
                    Powered by{" "}
                    <Box
                      as="span"
                      color={useColorModeValue("cyan.500", "cyan.300")}
                    >
                      ZMK
                    </Box>
                  </chakra.h1>
                </Box>
                <List
                  maxW="560px"
                  mx="auto"
                  opacity={0.95}
                  fontSize={{ base: "sm", sm: "md", lg: "xl" }}
                  mt="1rem"
                  spacing={10}
                >
                  <ListItem>
                    <ListIcon color="cyan.500" fontSize="1.5em">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </ListIcon>
                    Quickly manage wireless device profiles
                  </ListItem>
                  <ListItem>
                    <ListIcon color="cyan.500" fontSize="1.5em">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </ListIcon>
                    Build customized firmware in the cloud
                  </ListItem>
                  <ListItem>
                    <ListIcon color="cyan.500" fontSize="1.5em">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </ListIcon>
                    Friendly and flourishing community
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box as="section">
          <Container maxW="1280px" my="2rem">
            <Flex justify="space-evenly" alignItems="flex-start" wrap="wrap">
              <FindAStore stores={stores} />
              <Box textAlign="center" pt="3rem">
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
                  Tech Specs
                </chakra.h1>

                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>Microcontroller</Td>
                      <Td isNumeric>Nordic nRF52840</Td>
                    </Tr>
                    <Tr>
                      <Td>Layout</Td>
                      <Td isNumeric>ANSI</Td>
                    </Tr>
                    <Tr>
                      <Td>Form Factor</Td>
                      <Td isNumeric>Standard 60% (GH60)</Td>
                    </Tr>
                    <Tr>
                      <Td>Connector</Td>
                      <Td isNumeric>USB-C</Td>
                    </Tr>
                    <Tr>
                      <Td>Battery Charger</Td>
                      <Td isNumeric>4.2V Lithium @ 500mA rate</Td>
                    </Tr>
                    <Tr>
                      <Td>Voltage</Td>
                      <Td isNumeric>3.3V</Td>
                    </Tr>
                    <Tr>
                      <Td>Quiescent Current</Td>
                      <Td isNumeric>~10μA</Td>
                    </Tr>
                    <Tr>
                      <Td>PCB</Td>
                      <Td isNumeric>2U" ENIG, Tg 170 FR4</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default nice60;
